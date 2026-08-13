"use client";

import { useState, useEffect, useRef } from "react";

import ImageUploader from "./ImageUploader";

import {
  Loader2,
  CheckCircle2,
  Shield,
  Download,
  RotateCcw,
  Zap,
} from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";
import CustomButton from "../tools/CustomButton";

import { CiLock, CiUnlock } from "react-icons/ci";

export default function ImageResizer() {
  const [preview, setPreview] = useState(null);

  const [resized, setResized] = useState(null);

  const [loading, setLoading] = useState(false);

  const [fileData, setFileData] = useState(null);

  const [width, setWidth] = useState("");

  const [height, setHeight] = useState("");

  const [percent, setPercent] = useState(100);

  const [lockRatio, setLockRatio] = useState(true);

  const [format, setFormat] = useState("image/jpeg");

  const [quality, setQuality] = useState(0.8);
  const [targetSize, setTargetSize] = useState("40");
  const [original, setOriginal] = useState({
    w: 0,
    h: 0,
  });

  const [estimatedSize, setEstimatedSize] = useState(null);

  const imageRef = useRef(null);

  /* CLEAN OBJECT URL */
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  /* HANDLE FILE */
  const handleChange = (e) => {
    const selected = e.target.files?.[0];

    if (!selected || !selected.type.startsWith("image/")) {
      return;
    }

    if (selected.size > 20 * 1024 * 1024) {
      alert("Maximum image size is 20MB");

      return;
    }

    const url = URL.createObjectURL(selected);

    const img = new Image();

    img.onload = () => {
      imageRef.current = img;

      setPreview(url);

      setResized(null);

      setOriginal({
        w: img.width,
        h: img.height,
      });

      setWidth(img.width);

      setHeight(img.height);

      setPercent(100);

      setFileData({
        name: selected.name,

        size: (selected.size / 1024).toFixed(1) + " KB",

        width: img.width,

        height: img.height,
      });
    };

    img.src = url;
  };

  /* DROP */
  const handleDrop = (e) => {
    e.preventDefault();

    const selected = e.dataTransfer.files?.[0];

    if (!selected) return;

    const fakeEvent = {
      target: {
        files: [selected],
      },
    };

    handleChange(fakeEvent);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  /* RESET */
  const handleRemove = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview(null);

    setResized(null);

    setFileData(null);

    setEstimatedSize(null);

    setLoading(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* WIDTH */
  const handleWidth = (val) => {
    setWidth(val);

    setPercent(Math.round((val / original.w) * 100));

    if (lockRatio) {
      const ratio = original.h / original.w;

      setHeight(Math.round(val * ratio));
    }
  };

  /* HEIGHT */
  const handleHeight = (val) => {
    setHeight(val);

    setPercent(Math.round((val / original.h) * 100));

    if (lockRatio) {
      const ratio = original.w / original.h;

      setWidth(Math.round(val * ratio));
    }
  };

  /* PERCENT */
  const handlePercent = (val) => {
    setPercent(val);

    const w = (original.w * val) / 100;

    const h = (original.h * val) / 100;

    setWidth(Math.round(w));

    setHeight(Math.round(h));
  };

  /* LIVE ESTIMATE */
  useEffect(() => {
    if (!preview || !width || !height) {
      return;
    }

    const timeout = setTimeout(() => {
      const img = imageRef.current;

      if (!img) return;

      const canvas = document.createElement("canvas");

      canvas.width = width;

      canvas.height = height;

      const ctx = canvas.getContext("2d");

      ctx.imageSmoothingEnabled = true;

      ctx.imageSmoothingQuality = "high";

      ctx.drawImage(img, 0, 0, width, height);

      const data =
        format === "image/jpeg" || format === "image/webp"
          ? canvas.toDataURL(format, quality)
          : canvas.toDataURL(format);

      const size = Math.round((data.length * 3) / 4 / 1024);

      setEstimatedSize(size);
    }, 200);

    return () => clearTimeout(timeout);
  }, [width, height, quality, format, preview]);


  const compressToTargetSize = (canvas, mimeType, targetKB) => {
    const targetBytes = targetKB * 1024;

    let low = 0.05;
    let high = 1;
    let bestData = null;
    let bestSize = Infinity;

    for (let i = 0; i < 10; i++) {
      const quality = (low + high) / 2;

      const dataUrl = canvas.toDataURL(mimeType, quality);

      const base64Length = dataUrl.split(",")[1].length;
      const size = Math.round((base64Length * 3) / 4);

      const difference = Math.abs(size - targetBytes);

      if (difference < Math.abs(bestSize - targetBytes)) {
        bestData = dataUrl;
        bestSize = size;
      }

      if (size > targetBytes) {
        high = quality;
      } else {
        low = quality;
      }
    }

    return {
      dataUrl: bestData,
      size: Math.round(bestSize / 1024),
    };
  };
  /* RESIZE */
  const handleResize = async () => {
    if (width < 1 || height < 1) {
      alert("Invalid dimensions");
      return;
    }

    const targetKB = Number(targetSize);

    if (!targetSize || !Number.isFinite(targetKB) || targetKB < 1) {
      alert("Please enter a valid target file size.");
      return;
    }

    if (targetKB > 10240) {
      alert("Target file size cannot exceed 10 MB.");
      return;
    }

    try {
      setLoading(true);

      const img = imageRef.current;

      const canvas = document.createElement("canvas");

      canvas.width = width;

      canvas.height = height;

      const ctx = canvas.getContext("2d");

      ctx.imageSmoothingEnabled = true;

      ctx.imageSmoothingQuality = "high";

      ctx.drawImage(img, 0, 0, width, height);

      let result;
      let finalSize;

      if (format === "image/jpeg" || format === "image/webp") {
        const compressed = compressToTargetSize(
          canvas,
          format,
          targetSize
        );

        result = compressed.dataUrl;
        finalSize = compressed.size;
      } else {
        result = canvas.toDataURL(format);

        finalSize = Math.round(
          (result.split(",")[1].length * 3) / 4 / 1024
        );
      }

      setEstimatedSize(finalSize);
      setResized(result);
    } finally {
      setLoading(false);
    }
  };

  /* DOWNLOAD */
  const handleDownload = () => {
    if (!resized) return;

    const ext = format.split("/")[1];

    const link = document.createElement("a");

    link.href = resized;

    link.download = `resized-image.${ext}`;

    link.click();
  };

  return (
    <>
      <div className="max-w-md mx-auto space-y-8">
        {/* UPLOADER */}
        <ImageUploader
          preview={preview}
          fileData={fileData}
          onChange={handleChange}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onRemove={handleRemove}
        />



        {/* SETTINGS */}
        {preview && !resized && (
          <div
            className="
              bg-white
              rounded-[28px]
              border border-gray-100
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              p-6
              space-y-7
            "
          >
            {/* HEADER */}
            <div className="text-center">
              <h2 className="text-xl font-black text-gray-800">
                Resize Settings
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                Customize dimensions and output quality
              </p>
            </div>

            {/* DIMENSIONS */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-gray-700">Dimensions</p>

                <button
                  onClick={() => setLockRatio(!lockRatio)}
                  className="
                    px-3 py-1 rounded-full
                    bg-gray-100
                    text-sm
                    hover:bg-gray-200
                    transition-all
                  "
                >
                  <button className="flex items-center justify-center gap-1 ">
                    {lockRatio ? (
                      <>
                        <CiLock className="text-lg stroke-1 text-gray-700" />
                        <span className="text-gray-700">Lock</span>
                      </>
                    ) : (
                      <>
                        <CiUnlock
                          className="text-lg stroke-1 text-gray-700"
                          bold
                        />
                        <span className="text-gray-700">Free</span>
                      </>
                    )}
                  </button>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-2">Width</p>

                  <input
                    type="number"
                    value={width}
                    onChange={(e) => handleWidth(Number(e.target.value))}
                    className="
                      w-full h-12
                      rounded-2xl
                      border border-gray-200
                      px-4
                      outline-none
                      focus:ring-4
                      focus:ring-blue-100
                      focus:border-blue-400
                    "
                  />
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-2">Height</p>

                  <input
                    type="number"
                    value={height}
                    onChange={(e) => handleHeight(Number(e.target.value))}
                    className="
                      w-full h-12
                      rounded-2xl
                      border border-gray-200
                      px-4
                      outline-none
                      focus:ring-4
                      focus:ring-blue-100
                      focus:border-blue-400
                    "
                  />
                </div>
              </div>
            </div>

            {/* SCALE */}
            <div>
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-gray-700">Resize Scale</p>

                <p className="text-blue-600 font-bold">{percent}%</p>
              </div>

              <input
                type="range"
                min="10"
                max="200"
                value={percent}
                onChange={(e) => handlePercent(Number(e.target.value))}
                className="
                  w-full
                  accent-blue-600
                "
              />
            </div>

            {/* FORMAT */}
            <div>
              <p className="font-semibold text-gray-700 mb-3">Output Format</p>

              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="
                  w-full h-12
                  rounded-2xl
                  border border-gray-200
                  px-4
                  outline-none
                  focus:ring-4
                  focus:ring-blue-100
                  focus:border-blue-400
                "
              >
                <option value="image/jpeg">JPG</option>

                <option value="image/png">PNG</option>

                <option value="image/webp">WEBP</option>
              </select>
            </div>


            {/* TARGET FILE SIZE */}
            <div>
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-gray-700">
                  Target File Size
                </p>

                <p className="text-blue-600 font-bold">
                  KB
                </p>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="1"
                  max="10240"
                  value={targetSize}
                  onChange={(e) => {
                    const value = e.target.value;

                    // Allow the user to completely clear the field
                    if (value === "") {
                      setTargetSize("");
                      return;
                    }

                    const numericValue = Number(value);

                    // Don't allow values above 10 MB
                    if (numericValue > 10240) {
                      setTargetSize("10240");
                      return;
                    }

                    setTargetSize(value);
                  }}
                  placeholder="e.g. 40"
                  className="
                    w-full h-12
                    rounded-2xl
                    border border-gray-200
                    px-4
                    outline-none
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-400
                  "
                />

                <span className="text-sm font-semibold text-gray-500">
                  KB
                </span>
              </div>


              <p className="text-xs text-gray-400 mt-2">
                Best results for JPG and WebP. PNG size depends mainly on image dimensions.
              </p>
            </div>


            {/* STATS */}


            {/* BUTTON */}
            <CustomButton
              onClick={handleResize}
              loading={loading}
              disabled={loading}
              leftIcon={<Zap size={18} strokeWidth={2.5} />}
              animation="ripple"
              btnSize="lg"
              variant="primary"
              fullWidth
            >
              {loading ? "Resizing..." : "Resize Image"}
            </CustomButton>
          </div>
        )}

        {/* RESULT */}
        {resized && (
          <div className="space-y-6">
            {/* SUCCESS */}
            <div
              className="
                flex items-center justify-center gap-2
                text-green-600
                font-bold text-lg
              "
            >
              <CheckCircle2 className="w-5 h-5 animate-bounce" />
              Image Resized
            </div>

            {/* BEFORE AFTER */}
            <div className="grid grid-cols-1 gap-5">
              {/* BEFORE */}
              <div
                className="
                  bg-white
                  rounded-[28px]
                  p-4
                  border border-gray-100
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                "
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-gray-700">Before</p>

                  <div
                    className="
                      px-3 py-1 rounded-full
                      bg-gray-100
                      text-xs font-semibold
                      text-gray-600
                    "
                  >
                    Original
                  </div>
                </div>

                <div
                  className="
                    bg-gray-50
                    rounded-2xl
                    overflow-hidden
                    flex items-center justify-center
                    min-h-[200px]
                  "
                >
                  <img
                    src={preview}
                    className="
                      max-h-[260px]
                      object-contain
                    "
                  />
                </div>
              </div>

              {/* AFTER */}
              <div
                className="
                  bg-white
                  rounded-[28px]
                  p-4
                  border-2 border-blue-500
                  shadow-[0_10px_40px_rgba(59,130,246,0.12)]
                "
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-blue-600">After</p>

                  <div
                    className="
                      px-3 py-1 rounded-full
                      bg-blue-50
                      text-xs font-semibold
                      text-blue-600
                    "
                  >
                    Resized
                  </div>
                </div>

                <div
                  className="
                    bg-blue-50/40
                    rounded-2xl
                    overflow-hidden
                    flex items-center justify-center
                    min-h-[200px]
                  "
                >
                  <img
                    src={resized}
                    className="
                      max-h-[260px]
                      object-contain
                    "
                  />
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 justify-center align-middle">
              <CustomButton
                onClick={handleRemove}
                leftIcon={<RotateCcw size={18} strokeWidth={2.5} />}
                animation="ripple"
                btnSize="md"
              >
                Reset
              </CustomButton>

              <CustomButton
                variant="download"
                onClick={handleDownload}
                animation="bounce"
              />
            </div>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="contentWrapper">
        <RelatedTools />
        <About />
        <HowToUse />
        <Features />
        <Benefits />
        <FAQ />
      </div>
    </>
  );
}
