"use client";

import { useState } from "react";
import { Clipboard, Check, RotateCcw, Loader2, AlertCircle, Sparkles } from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

export default function CoverLetterGenerator() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [keySkills, setKeySkills] = useState("");
  const [tone, setTone] = useState("professional");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (!jobTitle.trim() || !company.trim() || !keySkills.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/ai-generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tool: "cover-letter-generator",
          inputs: { jobTitle, company, keySkills, tone },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setResult(data.result);
    } catch (err) {
      setError("Could not reach the AI service. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const resetFields = () => {
    setJobTitle("");
    setCompany("");
    setKeySkills("");
    setTone("professional");
    setResult(null);
    setError("");
  };

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Job Title
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g. Marketing Manager"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Acme Corp"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Key Skills / Experience
            </label>
            <textarea
              value={keySkills}
              onChange={(e) => setKeySkills(e.target.value)}
              placeholder="e.g. 5 years in digital marketing, led a team of 4, increased leads by 30%..."
              rows={5}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-y"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Tone
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
                <option value="professional">Professional</option>
                <option value="enthusiastic">Enthusiastic</option>
                <option value="formal">Formal</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Result
            </label>
            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5 min-h-[100px]">
              {loading ? (
                <div className="flex items-center gap-2 text-gray-500">
                  <Loader2 size={18} className="animate-spin" />
                  Generating...
                </div>
              ) : error ? (
                <div className="flex items-start gap-2 text-red-600 text-sm">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  {error}
                </div>
              ) : result ? (
                <p className="text-gray-800 whitespace-pre-wrap">{result}</p>
              ) : (
                <p className="text-gray-400">
                  Result will appear here...
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={generate}
              disabled={loading || !jobTitle.trim() || !company.trim() || !keySkills.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              <Sparkles size={16} />
              {loading ? "Generating..." : "Generate"}
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
