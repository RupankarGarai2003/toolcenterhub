"use client";

import { useState } from "react";
import { RotateCcw, Clipboard, Check } from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

export default function TemperatureConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("c");
  const [toUnit, setToUnit] = useState("f");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const calculate = () => {

    if (value === "" || value === undefined) { setResult(null); return; }
    const v = parseFloat(value);
    let celsius;
    if (fromUnit === "c") celsius = v;
    if (fromUnit === "f") celsius = (v - 32) * (5 / 9);
    if (fromUnit === "k") celsius = v - 273.15;

    let converted;
    if (toUnit === "c") converted = celsius;
    if (toUnit === "f") converted = celsius * (9 / 5) + 32;
    if (toUnit === "k") converted = celsius + 273.15;

    setResult({ converted: converted.toFixed(2) });
  
  };

  const copyToClipboard = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(`${value} degrees ${fromUnit.toUpperCase()} = ${result.converted} degrees ${toUnit.toUpperCase()}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const resetFields = () => {
    setValue("");
    setFromUnit("c");
    setToUnit("f");
    setResult(null);
  };

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Value
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. 100"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              From
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
                <option value="c">Celsius</option>
                <option value="f">Fahrenheit</option>
                <option value="k">Kelvin</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              To
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
                <option value="c">Celsius</option>
                <option value="f">Fahrenheit</option>
                <option value="k">Kelvin</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Result
            </label>

            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
              {result ? (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Converted Value</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {result.converted}
                  </p>

                </div>
              ) : (
                <p className="text-gray-400">
                  Result will appear here...
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">

            <button
              onClick={calculate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl"
            >
              Calculate
            </button>

            <button
              onClick={copyToClipboard}
              disabled={!result}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              {copied ? <Check size={16} /> : <Clipboard size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>

            <button
              onClick={resetFields}
              className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Reset
            </button>

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
