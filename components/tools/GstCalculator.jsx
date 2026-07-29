"use client";

import { useState } from "react";
import { RotateCcw, Clipboard, Check } from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

export default function GstCalculator() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [mode, setMode] = useState("add");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const calculate = () => {

    if (!amount || !gstRate) { setResult(null); return; }
    const A = parseFloat(amount);
    const rate = parseFloat(gstRate);
    let base, gst, total;
    if (mode === "add") {
      base = A;
      gst = (A * rate) / 100;
      total = A + gst;
    } else {
      total = A;
      base = A / (1 + rate / 100);
      gst = A - base;
    }
    setResult({
      base: base.toFixed(2),
      gst: gst.toFixed(2),
      total: total.toFixed(2),
    });
  
  };

  const copyToClipboard = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(`Base Amount: ${result.base}, GST: ${result.gst}, Total: ${result.total}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const resetFields = () => {
    setAmount("");
    setGstRate("");
    setMode("add");
    setResult(null);
  };

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 1000"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              GST Rate (%)
            </label>
            <input
              type="number"
              value={gstRate}
              onChange={(e) => setGstRate(e.target.value)}
              placeholder="e.g. 18"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Calculation Type
            </label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
                <option value="add">Add GST</option>
                <option value="remove">Remove GST</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Result
            </label>

            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
              {result ? (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {result.total}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Base Amount: <span className="font-semibold text-gray-700">{result.base}</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    GST Amount: <span className="font-semibold text-gray-700">{result.gst}</span>
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
