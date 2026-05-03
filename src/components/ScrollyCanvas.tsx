"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const TOTAL_FRAMES = 120;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;
      const START_THRESHOLD = 20; // Start experience after 20 frames

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${frameNumber}_delay-0.066s.png`;
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount >= START_THRESHOLD && isLoading) {
            setIsLoading(false);
          }
        };
        
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, [isLoading]);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas || images.length === 0) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      const index = Math.floor(frameIndex.get());
      const img = images[index];

      if (img) {
        // Handle object-fit: cover logic manually in canvas
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgWidth = img.naturalWidth;
        const imgHeight = img.naturalHeight;

        const imgRatio = imgWidth / imgHeight;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
          drawHeight = canvasHeight;
          drawWidth = canvasHeight * imgRatio;
          offsetX = (canvasWidth - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvasWidth;
          drawHeight = canvasWidth / imgRatio;
          offsetX = 0;
          offsetY = (canvasHeight - drawHeight) / 2;
        }

        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        render();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Subscribe to frameIndex changes
    const unsubscribe = frameIndex.on("change", render);

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#121212]">
            <div className="text-white text-xl font-light tracking-widest animate-pulse">
              LOADING EXPERIENCE...
            </div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
