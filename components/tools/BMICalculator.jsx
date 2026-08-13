"use client";

import { useState } from "react";
import {
  RotateCcw,
  Clipboard,
  Check,
} from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [bmi, setBMI] = useState("");
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    let valid = true;

    setHeightError("");
    setWeightError("");

    if (!height.trim()) {
      setHeightError("Please enter your height.");
      valid = false;
    } else if (!Number.isFinite(h) || h < 10 || h > 300) {
      setHeightError("Height must be between 10 and 300 cm.");
      valid = false;
    }

    if (!weight.trim()) {
      setWeightError("Please enter your weight.");
      valid = false;
    } else if (!Number.isFinite(w) || w < 2 || w > 500) {
      setWeightError("Weight must be between 2 and 500 kg.");
      valid = false;
    }

    if (!valid) {
      setBMI("");
      setStatus("");
      return;
    }

    const heightInMeters = h / 100;
    const result = (w / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";

    if (result < 18.5) {
      category = "Underweight";
    } else if (result < 25) {
      category = "Normal Weight";
    } else if (result < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    setBMI(result);
    setStatus(category);
  };

  const copyToClipboard = async () => {
    if (!bmi) return;

    await navigator.clipboard.writeText(
      `BMI: ${bmi}\nCategory: ${status}`
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

const resetFields = () => {
  setHeight("");
  setWeight("");
  setBMI("");
  setStatus("");
  setHeightError("");
  setWeightError("");
};

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

          {/* Height */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Height (cm)
            </label>

            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
                setHeightError("");
              }}
              className="w-full rounded-xl border border-gray-300 p-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            {heightError && (
              <p className="mt-2 text-sm text-red-500">
                {heightError}
              </p>
            )}
          </div>

          {/* Weight */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Weight (kg)
            </label>

            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
                setWeightError("");
              }}
              className="w-full rounded-xl border border-gray-300 p-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            {weightError && (
              <p className="mt-2 text-sm text-red-500">
                {weightError}
              </p>
            )}
          </div>

          {/* Result */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              BMI Result
            </label>

            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
              {bmi ? (
                <>
                  <p className="text-3xl font-bold text-blue-600">
                    {bmi}
                  </p>

                  <p className="mt-2 text-gray-700">
                    Category:
                    <span className="font-semibold ml-2">
                      {status}
                    </span>
                  </p>
                </>
              ) : (
                <p className="text-gray-400">
                  Your BMI will appear here...
                </p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">

            <button
              onClick={calculateBMI}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition"
            >
              Calculate BMI
            </button>

            <button
              onClick={copyToClipboard}
              disabled={!bmi}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition flex items-center gap-2"
            >
              {copied ? <Check size={16} /> : <Clipboard size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>

            <button
              onClick={resetFields}
              className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-medium transition flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Reset
            </button>

          </div>

          {/* BMI Table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">BMI</th>
                  <th className="p-3 border">Category</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-3 border">&lt; 18.5</td>
                  <td className="p-3 border">Underweight</td>
                </tr>

                <tr>
                  <td className="p-3 border">18.5 - 24.9</td>
                  <td className="p-3 border">Normal Weight</td>
                </tr>

                <tr>
                  <td className="p-3 border">25 - 29.9</td>
                  <td className="p-3 border">Overweight</td>
                </tr>

                <tr>
                  <td className="p-3 border">30+</td>
                  <td className="p-3 border">Obese</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-5 text-center">
            <span className="inline-block text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg">
              ⚖️ BMI is an estimate and does not directly measure body fat.
            </span>
          </div>

        </div>
      </div>

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