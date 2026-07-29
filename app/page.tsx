"use client";
import FAQ from "@/components/tool-content/FAQ";
import { useState } from "react";
import Link from "next/link";
import { tools } from "@/lib/toolsList";
import "../components/Styles/page.css"
import CustomButton from "../components/tools/CustomButton";

import {
  Image,
  Crop,
  Scissors,
  Maximize,
  FileText,
  Split,
  FileDown,
  Unlock,
  Lock,
  CheckCircle,
  Binary,
  Key,
  FileCode,
  FileJson,
  FileType,
  QrCode,
  Text,
  Link as LinkIcon,
  Repeat,
  LucideIcon,
  Activity,
  Calendar,
  Languages,
  Volume2,
  Mic,
  SpellCheck,
  Wand2,
  Mail,
  Briefcase,
  Users,
  Hash,
  Megaphone,
} from "lucide-react";

/* ICON MAP */
const iconMap: Record<string, LucideIcon> = {
  "image compressor": Image,
  "image converter": Repeat,
  "image cropper": Crop,
  "image resizer": Maximize,
  "background remover": Scissors,
  "jpg to png": Image,
  "png to jpg": Image,

  "pdf compressor": FileText,
  "pdf merger": FileText,
  "pdf splitter": Split,
  "pdf to word": FileDown,
  "pdf to jpg": FileDown,
  "pdf unlock": Unlock,
  "pdf protect": Lock,
  "jpg to pdf": FileText,
  "word to pdf": FileText,

  "json formatter": FileJson,
  "json validator": CheckCircle,
  "html minifier": FileCode,
  "css minifier": FileCode,
  "js minifier": FileCode,

  "base64 encoder": Binary,
  "base64 decoder": Binary,
  "url encoder": LinkIcon,
  "url decoder": LinkIcon,

  "password generator": Key,
  "qr code generator": QrCode,
  "word counter": Text,
  "bmi calculator": Activity,
  "age calculator": Calendar,
  "grammar checker": SpellCheck,
  "language translator": Languages,
  "text to speech converter": Volume2,
  "speech to text converter": Mic,
  "ai text summarizer": FileText,
  "ai paraphrasing tool": Wand2,
  "ai essay generator": FileText,
  "ai content generator": Wand2,
  "ai resume analyzer": Briefcase,
  "ai cover letter generator": Briefcase,
  "ai email reply generator": Mail,
  "ai meeting notes summarizer": Users,
  "ai caption & hashtag generator": Hash,
  "ai slogan & tagline generator": Megaphone,
};

function getCategory(tool: any) {
  // Use explicit category if available
  if (tool.category) return tool.category;

  const n = tool.name.toLowerCase();

  if (n.includes("image") || n.includes("jpg") || n.includes("png"))
    return "image";

  if (n.includes("pdf") || n.includes("word"))
    return "pdf";

  if (
    n.includes("json") ||
    n.includes("html") ||
    n.includes("css") ||
    n.includes("js")
  )
    return "dev";

  if (n.includes("to")) return "converter";

  return "tool";
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const homeFaqs = [
    {
      q: "Are all tools on ToolsCenterHub completely free to use?",
      a: "Yes. Every online tool available on ToolsCenterHub is completely free to use. There are no hidden charges, subscriptions, or registration requirements. Simply choose a tool, upload your file if needed, and download the result instantly.",
    },
    {
      q: "Do I need to create an account before using the tools?",
      a: "No. You can use all image, PDF, developer, and utility tools without creating an account or logging in. Everything works directly from your browser.",
    },
    {
      q: "Are my uploaded files secure and private?",
      a: "Yes. Your privacy is important to us. Uploaded files are processed securely and are automatically removed after processing. We do not permanently store or share your files.",
    },
    {
      q: "Can I resize and compress images online without losing quality?",
      a: "Yes. Our Image Resizer and Image Compressor are designed to reduce file size or change image dimensions while maintaining the best possible image quality for websites, social media, and documents.",
    },
    {
      q: "Which image formats are supported?",
      a: "Our image tools support popular formats including JPG, JPEG, PNG, and WEBP. Depending on the tool, you can resize, crop, compress, or convert between these formats.",
    },
    {
      q: "Can I merge, split, and convert PDF files online?",
      a: "Yes. ToolsCenterHub provides free PDF tools including PDF Merger, PDF Splitter, PDF to Word, Word to PDF, PDF to JPG, and JPG to PDF. All tools work directly in your browser.",
    },
    {
      q: "Do I need to install any software?",
      a: "No. All tools are browser-based, so you don't need to download or install any software. They work on Windows, macOS, Linux, Android, and iPhone.",
    },
    {
      q: "Can I use these online tools on mobile devices?",
      a: "Absolutely. ToolsCenterHub is fully responsive and works on smartphones, tablets, laptops, and desktop computers using modern browsers like Chrome, Edge, Firefox, and Safari.",
    },
    {
      q: "Which developer tools are available?",
      a: "We provide JSON Formatter, JSON Validator, Base64 Encoder, Base64 Decoder, URL Encoder, URL Decoder, HTML Minifier, CSS Minifier, JavaScript Minifier, Word Counter, and other developer utilities.",
    },
    {
      q: "Can I generate QR codes and secure passwords online?",
      a: "Yes. Our free QR Code Generator creates QR codes for URLs, text, Wi-Fi, and more. You can also use the Password Generator to create strong and secure passwords instantly.",
    },
    {
      q: "Why should I choose ToolsCenterHub over other online tool websites?",
      a: "ToolsCenterHub combines fast performance, secure processing, mobile-friendly design, and a wide collection of free online tools in one place. Whether you need image editing, PDF management, developer utilities, or productivity tools, you can complete your tasks quickly without installing software.",
    },
    {
      q: "What types of online tools are available on ToolsCenterHub?",
      a: "ToolsCenterHub offers Image Tools, PDF Tools, Developer Tools, QR Code Generator, Password Generator, JSON Formatter, Base64 Tools, URL Encoder and Decoder, HTML/CSS/JavaScript Minifiers, Word Counter, and many other free online utilities.",
    },
  ];
  const userChoiceSlugs = [
    "image-compressor",
    "background-remover",
    "pdf-merger",
    "pdf-to-word",
    "qr-code-generator",
    "password-generator",
  ];

  const filteredTools =
    activeTab === "all"
      ? tools
      : activeTab === "choice"
        ? tools.filter((t) => userChoiceSlugs.includes(t.slug))
        : tools.filter((t) => getCategory(t) === activeTab);

  console.log("Active Tab:", activeTab);

  console.log(
    "Filtered Tools:",
    tools.filter((t) => getCategory(t) === activeTab)
  );
  const tabs = [
    { label: "All", value: "all" },
    { label: "Image", value: "image" },
    { label: "PDF", value: "pdf" },
    { label: "Dev", value: "dev" },
    { label: "Calculator", value: "calculator" },
    { label: "AI Tools", value: "text" },
    { label: "Utility", value: "tool" },
    { label: "⭐ User’s Choice", value: "choice" },
  ];

  const toolColorMap = [
    { types: ["image"], color: "#facc15" },
    { types: ["pdf"], color: "#ef4444" },
    { types: ["word"], color: "#3b82f6" },
    { types: ["jpg"], color: "#a855f7" },
    { types: ["url"], color: "#22c55e" },
    { types: ["json"], color: "#c52274" },
    { types: ["png"], color: "#5a8ec6" },
    { types: ["html", "css", "js"], color: "#bd299f" },
    { types: ["base"], color: "#75d545" },
    { types: ["qr"], color: "#412d3c" },
    { types: ["calculator"], color: "#10b981" },
    { types: ["text"], color: "#6366f1" },

  ];

  const getToolColor = (name: string) => {
    const n = name.toLowerCase();

    const match = toolColorMap.find(item =>
      item.types.some(type => n.startsWith(type))
    );

    return match ? match.color : "#6b7280";
  };

  return (
    <div className="page">

      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">
          All-in-One Free{" "}
          <span className="hero-gradient">Online Tools</span> 🚀
        </h1>

        <p className="hero-text">
          Image, PDF, developer & utility tools — fast, free and powerful.
        </p>
      </section>

      {/* TABS */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`tab-btn ${activeTab === tab.value ? "tab-active" : ""
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <section className="grid">
        {filteredTools.map((tool) => {
          const name = tool.name.toLowerCase();
          const Icon: LucideIcon = iconMap[name] || FileType;

          return (
            <Link key={tool.slug} href={`/tools/${tool.slug}`}>
              <div className="card">

                <div className="glass-icon">
                  <Icon
                    size={25}
                    strokeWidth={2.5}
                    color={getToolColor(tool.name)}
                  />
                </div>

                <h3 className="title">{tool.name}</h3>

                <p className="description">
                  {tool.description}
                </p>

                {/* <div className="card-btn">
                  <button>Explore →</button>
                </div> */}
                <div>
                  <CustomButton variant="card" btnSize="sm">
                    Explore →
                  </CustomButton>
                </div>
              </div>
            </Link>


          );
        })}
      </section>
      <section className="seo-section">
        <h2>
          Why Choose ToolsCenterHub?
        </h2>

        <p>
          ToolsCenterHub provides free
          online tools for image editing,
          PDF management, file conversion,
          developer utilities, and
          productivity tasks. Our tools
          work directly in your browser
          without requiring downloads,
          installation, or registration.
        </p>

        <p>
          Whether you need to resize
          images, compress files, merge
          PDFs, convert documents, format
          JSON, generate QR codes, or
          create secure passwords,
          ToolsCenterHub offers fast,
          secure, and easy-to-use
          solutions.
        </p>
      </section>

      <section className="seo-section">
        <h2>
          Popular Tool Categories
        </h2>

        <ul className="seo-list">
          <li>
            Image Tools – Resize,
            compress, crop, and convert
            images.
          </li>

          <li>
            PDF Tools – Merge, split,
            convert, and optimize PDF
            files.
          </li>

          <li>
            Developer Tools – JSON
            formatter, validator, Base64
            utilities, and code minifiers.
          </li>

          <li>
            Utility Tools – Password
            generator, QR code generator,
            word counter, and more.
          </li>
        </ul>
      </section>

      <section className="seo-section">
        <h2>
          Free Online Tools For Everyday
          Tasks
        </h2>

        <p>
          ToolsCenterHub is an all-in-one
          platform offering free online
          tools for students, developers,
          designers, marketers,
          businesses, and everyday users.
        </p>

        <p>
          Our collection includes image
          compressors, image resizers,
          PDF converters, PDF mergers,
          JSON formatters, URL encoders,
          Base64 tools, QR code
          generators, and many other
          utilities designed to save time
          and improve productivity.
        </p>

        <p>
          All tools are optimized for
          speed and simplicity, allowing
          users to complete tasks quickly
          from desktop and mobile
          devices.
        </p>
      </section>

      <section className="seo-section">
        <FAQ
          title="Frequently Asked Questions"
          customFaqs={homeFaqs as never}
        />
      </section>
    </div>
  );
}