"use client";

import { useState, useEffect, useRef } from "react";
import ImageUploader from "./ImageUploader";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

import CustomButton from "../tools/CustomButton";

import { Check, ChevronDown } from "lucide-react";

/* =========================================================
   FORMAT DROPDOWN
========================================================= */

function FormatDropdown({
  value,
  options,
  onChange,
  exclude,
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter(
    (option) => option !== exclude
  );

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative w-32"
    >
      {/* ================= TRIGGER ================= */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`
          w-full
          h-11
          px-4
          rounded-xl

          flex
          items-center
          justify-between
          gap-2

          bg-white/90
          backdrop-blur-xl
          backdrop-saturate-150

          border
          ${
            open
              ? "border-blue-500 shadow-lg shadow-blue-500/10"
              : "border-gray-200"
          }

          text-gray-700
          font-semibold
          text-sm

          shadow-sm

          transition-all
          duration-200

          hover:border-blue-400
          hover:shadow-md
        `}
      >
        <span>{value}</span>

        <ChevronDown
          size={17}
          strokeWidth={2.2}
          className={`
            text-gray-500
            transition-transform
            duration-200

            ${open ? "rotate-180 text-blue-500" : ""}
          `}
        />
      </button>

      {/* ================= DROPDOWN ================= */}

      {open && (
        <div
          className="
            absolute
            top-full
            left-0
            mt-2

            w-full
            p-2

            bg-white/95
            backdrop-blur-2xl
            backdrop-saturate-150

            border
            border-gray-200/70

            rounded-2xl

            shadow-[0_15px_40px_rgba(0,0,0,0.12)]

            z-[100]

            animate-in
            fade-in
            slide-in-from-top-2
            duration-200
          "
        >
          <div className="space-y-1">
            {filteredOptions.map((option) => {
              const selected = option === value;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`
                    w-full
                    px-3
                    py-2.5
                    rounded-xl

                    flex
                    items-center
                    justify-between

                    text-sm
                    font-medium

                    transition-all
                    duration-150

                    ${
                      selected
                        ? "bg-blue-500 text-white shadow-sm"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }
                  `}
                >
                  <span>{option}</span>

                  {selected && (
                    <Check
                      size={16}
                      strokeWidth={2.5}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   IMAGE CONVERTER
========================================================= */

export default function ImageConverter() {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [converted, setConverted] = useState(null);

  const [fileData, setFileData] = useState(null);

  const [fromFormat, setFromFormat] = useState("JPG");
  const [toFormat, setToFormat] = useState("PNG");

  const [quality, setQuality] = useState(0.9);

  const [dragActive, setDragActive] = useState(false);

  const formats = [
    "JPG",
    "PNG",
    "WEBP",
    "GIF",
    "BMP",
    "AVIF",
  ];

  const formatMap = {
    JPG: "image/jpeg",
    PNG: "image/png",
    WEBP: "image/webp",
    GIF: "image/gif",
    BMP: "image/bmp",
    AVIF: "image/avif",
  };

  /* =========================================================
     CLEANUP PREVIEW MEMORY
  ========================================================= */

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  /* =========================================================
     PROCESS FILE
  ========================================================= */

  const processFile = (selected) => {
    if (!selected.type.startsWith("image/")) {
      alert("Please upload a valid image!");
      return;
    }

    setPreview(null);
    setFile(null);
    setConverted(null);

    const objectUrl = URL.createObjectURL(selected);
    const img = new Image();

    img.onload = () => {
      const detected =
        selected.type.split("/")[1].toUpperCase();

      const normalized =
        detected === "JPEG" ? "JPG" : detected;

      setPreview(objectUrl);
      setFile(selected);

      setFileData({
        name: selected.name,
        size:
          (selected.size / 1024).toFixed(1) + " KB",
        width: img.width,
        height: img.height,
        format: normalized,
      });

      setFromFormat(normalized);

      const defaultTarget =
        formats.find((f) => f !== normalized) || "PNG";

      setToFormat(defaultTarget);
    };

    img.src = objectUrl;
  };

  /* =========================================================
     REMOVE IMAGE
  ========================================================= */

  const handleRemove = () => {
    setPreview(null);
    setFile(null);
    setConverted(null);
    setFileData(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     FILE INPUT
  ========================================================= */

  const handleChange = (e) => {
    const selected = e.target.files?.[0];

    if (!selected) return;

    processFile(selected);

    e.target.value = "";
  };

  /* =========================================================
     DRAG & DROP
  ========================================================= */

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setDragActive(false);

    const dropped = e.dataTransfer.files?.[0];

    if (!dropped) return;

    processFile(dropped);
  };

  /* =========================================================
     CONVERT IMAGE
  ========================================================= */

  const handleConvert = async () => {
    if (!file) return;

    if (fromFormat === toFormat) {
      alert("Choose a different format!");
      return;
    }

    try {
      const bitmap = await createImageBitmap(file);

      const canvas = document.createElement("canvas");

      canvas.width = bitmap.width;
      canvas.height = bitmap.height;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        bitmap.close();
        return;
      }

      ctx.drawImage(bitmap, 0, 0);

      const mime = formatMap[toFormat];

      const result =
        toFormat === "JPG" ||
        toFormat === "WEBP"
          ? canvas.toDataURL(mime, quality)
          : canvas.toDataURL(mime);

      setConverted(result);

      bitmap.close();
    } catch (error) {
      console.error("Image conversion failed:", error);
      alert("Unable to convert this image.");
    }
  };

  /* =========================================================
     DOWNLOAD
  ========================================================= */

  const handleDownload = () => {
    if (!converted || !file) return;

    const link = document.createElement("a");

    const base = file.name.split(".")[0];

    link.href = converted;

    link.download = `${base}.${toFormat.toLowerCase()}`;

    link.click();
  };

  /* =========================================================
     RESET
  ========================================================= */

  const handleReset = () => {
    setPreview(null);
    setFile(null);
    setConverted(null);
    setFileData(null);

    setFromFormat("JPG");
    setToFormat("PNG");
    setQuality(0.9);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      <div className="container space-y-10">

        {/* =================================================
            FORMAT SELECTOR
        ================================================= */}

        <div className="flex items-center justify-center gap-4">

          {/* FROM FORMAT */}

          <FormatDropdown
            value={fromFormat}
            options={formats}
            onChange={(value) => {
              setFromFormat(value);

              /*
               * Don't allow FROM and TO
               * to have the same format.
               */
              if (value === toFormat) {
                const newTarget =
                  formats.find(
                    (format) => format !== value
                  ) || "PNG";

                setToFormat(newTarget);
              }
            }}
          />

          {/* ARROW */}

          <div
            className="
              flex
              items-center
              justify-center

              w-8
              h-8

              rounded-full

              bg-gray-100
              text-gray-400

              font-semibold

              shadow-sm
            "
          >
            →
          </div>

          {/* TO FORMAT */}

          <FormatDropdown
            value={toFormat}
            options={formats}
            exclude={fromFormat}
            onChange={setToFormat}
          />

        </div>

        {/* =================================================
            QUALITY
        ================================================= */}

        {(toFormat === "JPG" ||
          toFormat === "WEBP") && (
          <div className="flex flex-col items-center">

            <p
              className="
                mb-3
                text-sm
                font-semibold
                text-gray-600
              "
            >
              Quality:{" "}
              <span className="text-blue-600">
                {Math.round(quality * 100)}%
              </span>
            </p>

            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={quality}
              onChange={(e) =>
                setQuality(
                  Number(e.target.value)
                )
              }
              className="
                w-64
                accent-blue-600
                cursor-pointer
              "
            />

          </div>
        )}

        {/* =================================================
            UPLOADER
        ================================================= */}

        <ImageUploader
          preview={preview}
          fileData={fileData}
          onChange={handleChange}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onRemove={handleRemove}
        />

        {/* =================================================
            CONVERT BUTTON
        ================================================= */}

        {preview && !converted && (
          <div className="flex justify-center">

            <CustomButton
              onClick={handleConvert}
              animation="ripple"
              btnSize="md"
              variant="success"
            >
              Convert Now
            </CustomButton>

          </div>
        )}

        {/* =================================================
            RESULT
        ================================================= */}

        {converted && (
          <div
            className="
              text-center
              space-y-6
              animate-in
              fade-in
              duration-300
            "
          >

            <img
              src={converted}
              alt="Converted image preview"
              className="
                mx-auto
                max-h-60
                max-w-full
                rounded-2xl
                shadow-xl
                object-contain
              "
            />

            <div
              className="
                flex
                justify-center
                gap-3
                flex-wrap
              "
            >

              <CustomButton
                onClick={handleReset}
                animation="ripple"
                btnSize="md"
              >
                Convert Another Image
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

      {/* ===================================================
          CONTENT SECTION
      =================================================== */}

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