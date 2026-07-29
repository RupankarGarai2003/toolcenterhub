"use client";

import { useState } from "react";
import { Clipboard, Check, RotateCcw, Loader2, AlertCircle } from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

export default function GrammarChecker() {
  const [text, setText] = useState("");
  const [matches, setMatches] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const checkGrammar = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError("");
    setMatches(null);

    try {
      const res = await fetch("https://api.languagetool.org/v2/check", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          text,
          language: "en-US",
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setMatches(data.matches || []);
    } catch (err) {
      setError(
        "Could not reach the grammar check service. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const applyAllSuggestions = () => {
    if (!matches || matches.length === 0) return;
    let corrected = text;
    const sorted = [...matches].sort((a, b) => b.offset - a.offset);
    for (const m of sorted) {
      if (m.replacements && m.replacements.length > 0) {
        const replacement = m.replacements[0].value;
        corrected =
          corrected.slice(0, m.offset) +
          replacement +
          corrected.slice(m.offset + m.length);
      }
    }
    setText(corrected);
    setMatches(null);
  };

  const copyToClipboard = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const resetFields = () => {
    setText("");
    setMatches(null);
    setError("");
  };

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Your Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste or type your text here to check grammar, spelling, and punctuation..."
              rows={8}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-y"
            />
            <p className="text-xs text-gray-400 mt-1">{text.length} characters</p>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Issues Found
            </label>
            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5 min-h-[80px]">
              {loading ? (
                <div className="flex items-center gap-2 text-gray-500">
                  <Loader2 size={18} className="animate-spin" />
                  Checking your text...
                </div>
              ) : error ? (
                <div className="flex items-start gap-2 text-red-600 text-sm">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  {error}
                </div>
              ) : matches === null ? (
                <p className="text-gray-400">
                  Results will appear here...
                </p>
              ) : matches.length === 0 ? (
                <p className="text-emerald-600 font-medium">
                  No issues found — your text looks good!
                </p>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-700">
                    {matches.length} issue{matches.length > 1 ? "s" : ""} found
                  </p>
                  {matches.slice(0, 25).map((m, i) => (
                    <div
                      key={i}
                      className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-3"
                    >
                      <p className="text-sm text-gray-800">{m.message}</p>
                      {m.replacements && m.replacements.length > 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                          Suggestion:{" "}
                          <span className="font-medium text-gray-700">
                            {m.replacements
                              .slice(0, 3)
                              .map((r) => r.value)
                              .join(", ")}
                          </span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={checkGrammar}
              disabled={loading || !text.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl"
            >
              Check Grammar
            </button>

            {matches && matches.length > 0 && (
              <button
                onClick={applyAllSuggestions}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl"
              >
                Apply All Suggestions
              </button>
            )}

            <button
              onClick={copyToClipboard}
              disabled={!text}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              {copied ? <Check size={16} /> : <Clipboard size={16} />}
              {copied ? "Copied" : "Copy Text"}
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
