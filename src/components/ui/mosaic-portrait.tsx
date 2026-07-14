import React, { useEffect, useRef, useCallback } from 'react';

interface MosaicPortraitProps {
  src: string;
  width?: number;
  height?: number;
  cellSize?: number;
  animStyle?: 'wave' | 'pulse' | 'shimmer' | 'ripple' | 'flicker';
  animSpeed?: number;   // 0-100
  animIntensity?: number; // 0-100
  brightness?: number; // e.g. 12 means +12%
  contrast?: number;   // e.g. 115 means 115%
  saturation?: number; // 0-200
  vignette?: boolean;
  vignetteIntensity?: number;
  bloom?: boolean;
  bloomIntensity?: number;
  className?: string;
}

export default function MosaicPortrait({
  src,
  width = 480,
  height = 640,
  cellSize = 16,
  animStyle = 'wave',
  animSpeed = 100,
  animIntensity = 60,
  brightness = 12,
  contrast = 115,
  saturation = 100,
  vignette = true,
  vignetteIntensity = 38,
  bloom = true,
  bloomIntensity = 25,
  className = '',
}: MosaicPortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const animFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(performance.now());

  const drawFrame = useCallback((time: number) => {
    const canvas = canvasRef.current;
    const offscreen = offscreenRef.current;
    const img = imgRef.current;
    if (!canvas || !offscreen || !img) return;

    const ctx = canvas.getContext('2d');
    const offCtx = offscreen.getContext('2d');
    if (!ctx || !offCtx) return;

    const elapsed = (time - startTimeRef.current) / 1000;
    const speedFactor = animSpeed / 100;
    const intensityFactor = animIntensity / 100;

    const cols = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);

    // --- Sample image data ---
    offCtx.drawImage(img, 0, 0, width, height);
    const imageData = offCtx.getImageData(0, 0, width, height);
    const pixels = imageData.data;

    // --- Apply brightness/contrast/saturation to sampling ---
    const brightnessF = 1 + brightness / 100;
    const contrastF = contrast / 100;
    const satF = saturation / 100;

    // --- Draw background (dark) ---
    ctx.fillStyle = '#0B0D0A';
    ctx.fillRect(0, 0, width, height);

    // --- Draw mosaic cells ---
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const px = col * cellSize;
        const py = row * cellSize;
        const cx = Math.min(px + cellSize / 2, width - 1);
        const cy = Math.min(py + cellSize / 2, height - 1);

        // Sample center pixel
        const idx = (Math.floor(cy) * width + Math.floor(cx)) * 4;
        let r = pixels[idx] / 255;
        let g = pixels[idx + 1] / 255;
        let b = pixels[idx + 2] / 255;

        // Saturation
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        r = lum + (r - lum) * satF;
        g = lum + (g - lum) * satF;
        b = lum + (b - lum) * satF;

        // Brightness + Contrast
        r = ((r * brightnessF - 0.5) * contrastF + 0.5);
        g = ((g * brightnessF - 0.5) * contrastF + 0.5);
        b = ((b * brightnessF - 0.5) * contrastF + 0.5);

        r = Math.max(0, Math.min(1, r));
        g = Math.max(0, Math.min(1, g));
        b = Math.max(0, Math.min(1, b));

        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        // --- Animation offset ---
        let animOffset = 0;
        const normCol = col / cols;
        const normRow = row / rows;

        if (animStyle === 'wave') {
          animOffset = Math.sin(normCol * Math.PI * 4 + elapsed * speedFactor * 3) *
                       Math.cos(normRow * Math.PI * 2 + elapsed * speedFactor * 1.5) *
                       intensityFactor * 0.35;
        } else if (animStyle === 'pulse') {
          const dist = Math.sqrt((normCol - 0.5) ** 2 + (normRow - 0.5) ** 2);
          animOffset = Math.sin(dist * 10 - elapsed * speedFactor * 4) * intensityFactor * 0.3;
        } else if (animStyle === 'shimmer') {
          animOffset = Math.sin((normCol + normRow) * 6 + elapsed * speedFactor * 5) * intensityFactor * 0.25;
        } else if (animStyle === 'ripple') {
          const dist = Math.sqrt((normCol - 0.5) ** 2 + (normRow - 0.5) ** 2);
          animOffset = Math.sin(dist * 12 - elapsed * speedFactor * 3) * Math.exp(-dist * 2) * intensityFactor * 0.4;
        } else if (animStyle === 'flicker') {
          animOffset = (Math.random() - 0.5) * intensityFactor * 0.3;
        }

        const animLum = Math.max(0, Math.min(1, luminance + animOffset));
        const cellW = cellSize * (0.75 + animLum * 0.25);
        const gap = (cellSize - cellW) / 2;

        const ri = Math.round(r * 255);
        const gi = Math.round(g * 255);
        const bi = Math.round(b * 255);

        // Draw mosaic tile with a slight gap for the grid feel
        ctx.fillStyle = `rgb(${ri},${gi},${bi})`;
        ctx.fillRect(px + gap, py + gap, cellW - gap * 0.5, cellW - gap * 0.5);
      }
    }

    // --- Bloom ---
    if (bloom && bloomIntensity > 0) {
      const blm = bloomIntensity / 100;
      ctx.save();
      ctx.globalAlpha = blm * 0.4;
      ctx.filter = `blur(${Math.round(bloomIntensity / 8)}px) brightness(1.5)`;
      ctx.globalCompositeOperation = 'screen';
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    }

    // --- Vignette ---
    if (vignette && vignetteIntensity > 0) {
      const vigAlpha = vignetteIntensity / 100;
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, height * 0.2,
        width / 2, height / 2, height * 0.85
      );
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(1, `rgba(0,0,0,${vigAlpha * 0.85})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    animFrameRef.current = requestAnimationFrame(drawFrame);
  }, [width, height, cellSize, animStyle, animSpeed, animIntensity, brightness, contrast, saturation, vignette, vignetteIntensity, bloom, bloomIntensity]);

  useEffect(() => {
    // Create offscreen canvas for image sampling
    const offscreen = document.createElement('canvas');
    offscreen.width = width;
    offscreen.height = height;
    offscreenRef.current = offscreen;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      imgRef.current = img;
      startTimeRef.current = performance.now();
      animFrameRef.current = requestAnimationFrame(drawFrame);
    };
    img.src = src;

    return () => {
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [src, width, height, drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{ imageRendering: 'pixelated' }}
    />
  );
}
