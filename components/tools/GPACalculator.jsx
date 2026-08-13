"use client";

import { useState } from "react";
import { RotateCcw, Clipboard, Check } from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

export default function GPACalculator() {
  const [grades, setGrades] = useState("");
  const [credits, setCredits] = useState("");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const calculate = () => {

    if (!grades || !credits) { setResult(null); return; }
    const g = grades.split(",").map((v) => parseFloat(v.trim())).filter((v) => !isNaN(v));
    const c = credits.split(",").map((v) => parseFloat(v.trim())).filter((v) => !isNaN(v));
    if (g.length === 0 || g.length !== c.length) { setResult(null); return; }
    let totalPoints = 0;
    let totalCredits = 0;
    for (let idx = 0; idx < g.length; idx++) {
      totalPoints += g[idx] * c[idx];
      totalCredits += c[idx];
    }
    if (totalCredits === 0) { setResult(null); return; }
    const gpa = totalPoints / totalCredits;
    setResult({ gpa: gpa.toFixed(2), totalCredits: totalCredits.toFixed(1) });

  };

  const copyToClipboard = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(`GPA: ${result.gpa}, Total Credits: ${result.totalCredits}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const resetFields = () => {
    setGrades("");
    setCredits("");
    setResult(null);
  };

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Grade Points (comma separated)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={grades}
              onChange={(e) => setGrades(e.target.value)}
              placeholder="e.g. 4,3.7,3.3,4"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Credit Hours (comma separated)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              placeholder="e.g. 3,4,3,2"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Result
            </label>

            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
              {result ? (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Your GPA</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {result.gpa}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Total Credit Hours: <span className="font-semibold text-gray-700">{result.totalCredits}</span>
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
