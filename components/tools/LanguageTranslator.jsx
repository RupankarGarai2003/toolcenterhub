"use client";

import { useState } from "react";
import { Clipboard, Check, RotateCcw, Loader2, AlertCircle, ArrowLeftRight } from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "hi", label: "Hindi" },
  { code: "zh", label: "Chinese" },
  { code: "ar", label: "Arabic" },
  { code: "pt", label: "Portuguese" },
  { code: "ru", label: "Russian" },
  { code: "ja", label: "Japanese" },
  { code: "it", label: "Italian" },
  { code: "bn", label: "Bengali" },
];

export default function LanguageTranslator() {
  const [text, setText] = useState("");
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("es");
  const [translated, setTranslated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const translate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError("");
    setTranslated(null);

    try {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=${fromLang}|${toLang}`
      );
      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      const result = data?.responseData?.translatedText;
      if (!result) throw new Error("No translation returned");

      setTranslated(result);
    } catch (err) {
      setError(
        "Could not reach the translation service. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const swapLanguages = () => {
    setFromLang(toLang);
    setToLang(fromLang);
    if (translated) {
      setText(translated);
      setTranslated(null);
    }
  };

  const copyToClipboard = async () => {
    if (!translated) return;
    await navigator.clipboard.writeText(translated);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const resetFields = () => {
    setText("");
    setTranslated(null);
    setError("");
  };

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

          <div className="flex items-center gap-3 mb-5">
            <select
              value={fromLang}
              onChange={(e) => setFromLang(e.target.value)}
              className="flex-1 rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>

            <button
              onClick={swapLanguages}
              className="shrink-0 border border-gray-300 hover:bg-gray-100 text-gray-600 p-3 rounded-xl"
              title="Swap languages"
            >
              <ArrowLeftRight size={18} />
            </button>

            <select
              value={toLang}
              onChange={(e) => setToLang(e.target.value)}
              className="flex-1 rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Text to Translate
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste text here..."
              rows={5}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-y"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Translation
            </label>
            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5 min-h-[80px]">
              {loading ? (
                <div className="flex items-center gap-2 text-gray-500">
                  <Loader2 size={18} className="animate-spin" />
                  Translating...
                </div>
              ) : error ? (
                <div className="flex items-start gap-2 text-red-600 text-sm">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  {error}
                </div>
              ) : translated ? (
                <p className="text-gray-800">{translated}</p>
              ) : (
                <p className="text-gray-400">
                  Translation will appear here...
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={translate}
              disabled={loading || !text.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl"
            >
              Translate
            </button>

            <button
              onClick={copyToClipboard}
              disabled={!translated}
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
