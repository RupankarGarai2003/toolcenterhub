"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Square, RotateCcw } from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

export default function TextToSpeechConverter() {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setSupported(false);
      return;
    }

    const loadVoices = () => {
      const available = window.speechSynthesis.getVoices();
      if (available.length > 0) setVoices(available);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = () => {
    if (!text.trim() || !supported) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (voices[voiceIndex]) utterance.voice = voices[voiceIndex];
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.onstart = () => {
      setSpeaking(true);
      setPaused(false);
    };
    utterance.onend = () => {
      setSpeaking(false);
      setPaused(false);
    };
    utterance.onerror = () => {
      setSpeaking(false);
      setPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const togglePause = () => {
    if (!window.speechSynthesis) return;
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
    } else {
      window.speechSynthesis.pause();
      setPaused(true);
    }
  };

  const stop = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
  };

  const resetFields = () => {
    stop();
    setText("");
    setRate(1);
    setPitch(1);
  };

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

          {!supported && (
            <div className="mb-5 rounded-xl bg-amber-50 border border-amber-300 p-4 text-sm text-amber-800">
              Your browser does not support text-to-speech. Please try Chrome, Edge, or Safari.
            </div>
          )}

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Text to Convert
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste text here to hear it read aloud..."
              rows={6}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-y"
            />
          </div>

          {voices.length > 0 && (
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Voice
              </label>
              <select
                value={voiceIndex}
                onChange={(e) => setVoiceIndex(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                {voices.map((v, i) => (
                  <option key={i} value={i}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Speed: {rate.toFixed(1)}x
              </label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Pitch: {pitch.toFixed(1)}
              </label>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={pitch}
                onChange={(e) => setPitch(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={speak}
              disabled={!text.trim() || !supported || speaking}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              <Play size={16} />
              Speak
            </button>

            <button
              onClick={togglePause}
              disabled={!speaking}
              className="bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              <Pause size={16} />
              {paused ? "Resume" : "Pause"}
            </button>

            <button
              onClick={stop}
              disabled={!speaking}
              className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              <Square size={16} />
              Stop
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
