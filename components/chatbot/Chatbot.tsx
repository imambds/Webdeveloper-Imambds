"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect";
import { cn } from "@/lib/utils";
import ChatbotButton from "./ChatbotButton";

export default function ChatbotPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);  // State to track if the bot is thinking

  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);

  const clearChat = () => {
    setMessages([]);  // Clear all messages
    setInput("");  // Reset input field
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(panelRef.current, { x: 0, duration: 0.6, ease: "power3.inOut" });
        gsap.to(backdropRef.current, { opacity: 1, duration: 0.6, ease: "power3.inOut" });
      } else {
        gsap.to(panelRef.current, { x: "100%", duration: 0.6, ease: "power3.inOut" });
        gsap.to(backdropRef.current, { opacity: 0, duration: 0.6, ease: "power3.inOut" });
      }
    }, panelRef);

    return () => ctx.kill();
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const userMessage = input;
    setInput("");
    
    // Display "thinking" message
    setIsThinking(true);
    
    let botResponse = "";

// Improved chatbot with regex matching
const userText = userMessage.toLowerCase();

// Define regex patterns
      const patterns = [
        { regex: /^(halo|hallo|hai)/i, response: "Halo! Saya Imam Budi Prakoso, seorang Frontend Developer. Ada yang bisa saya bantu?" },
        { regex: /(nama kamu|siapa nama kamu)/i, response: "Saya Imam Budi Prakoso, senang berkenalan!" },
        { regex: /(siapa kamu|tentang kamu|kamu siapa)/i, response: "Saya Imam, seorang Frontend Developer yang fokus pada pembuatan website modern dan interaktif." },
        { regex: /(projek|portofolio|proyek|project)/i, response: "Saya mengerjakan berbagai proyek web, aplikasi frontend, dan UI/UX design. Cek portofolio saya untuk detailnya!" },
        { regex: /(keahlian|skill|bisa apa|kemampuan)/i, response: "Saya memiliki keahlian di HTML, CSS, JavaScript, React, Next.js, TailwindCSS, dan teknologi frontend lainnya." },
        { regex: /(pengalaman|pernah kerja|experience|kerja di mana)/i, response: "Saya memiliki pengalaman magang di perusahaan teknologi 247 Solusi, serta mengerjakan banyak proyek freelance di bidang frontend development." },
        { regex: /(pendidikan|kuliah dimana|kuliah di mana|latar belakang pendidikan|sekolah)/i, response: "Saya lulusan S1 Sistem Informasi dari Universitas Mercu Buana Yogyakarta dan saat ini juga memperdalam bidang frontend developer." },
        { regex: /(buat website|buat aplikasi|jasa website|bisa buat app)/i, response: "Tentu! Saya bisa membantu membuat website atau aplikasi frontend sesuai kebutuhan Anda." },
        { regex: /(kontak|hubungi kamu|cara kontak|email|linkedin)/i, response: "Anda bisa menghubungi saya lewat email atau LinkedIn. Detail kontak tersedia di bagian portofolio." },
        { regex: /(cita-cita|impian|tujuan karir|goal)/i, response: "Saya bercita-cita menjadi Frontend Engineer handal yang bisa menciptakan produk digital bermanfaat dan inovatif." },
        { regex: /(terima kasih|makasih|thanks|thank you)/i, response: "Sama-sama! Senang bisa membantu. Ada lagi yang ingin ditanyakan?" },
        { regex: /(sertifikat|pelatihan|certification)/i, response: "Saya memiliki beberapa sertifikat di bidang frontend development, project management, dan digital marketing." },
        { regex: /(kerja sama|kerja bareng|kolaborasi|collaboration)/i, response: "Tentu, saya sangat terbuka untuk kerja sama proyek atau freelance! Mari kita diskusikan lebih lanjut." }
      ];

      // Matching logic
      let matched = false;
      for (const pattern of patterns) {
        if (pattern.regex.test(userText)) {
          botResponse = pattern.response;
          matched = true;
          break;
        }
      }

      // Default fallback
      if (!matched) {
        botResponse = "Terima kasih sudah bertanya! Maaf, saya belum mengenali pertanyaan tersebut. Silakan tanya tentang projek, skill, pengalaman, atau kontak saya.";
      }


    // Simulate a thinking time (delay) and then display the bot's response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botResponse },
      ]);
      setIsThinking(false);  // Hide the "thinking" message after a delay
    }, 1500);  // Simulate delay for thinking
  };

  return (
    <>
      <ChatbotButton isOpen={isOpen} toggle={toggle} />

      {/* Backdrop */}
      <div
        ref={backdropRef}
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-40",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={toggle}
      />

      {/* Chat Panel */}
      <motion.div
        ref={panelRef}
        className="fixed bottom-0 right-0 z-50 w-full max-w-lg h-[80vh] translate-x-full flex flex-col bg-white dark:bg-black shadow-xl rounded-t-xl"
      >
        {/* Header */}
        <div className="flex-none px-6 py-4 bg-black text-white rounded-t-xl">
          <h2 className="text-lg font-semibold">Ask anything about me</h2>
        </div>

        {/* Message Container */}
        <div className="flex-1 p-4 overflow-y-auto bg-white dark:bg-black rounded-b-xl space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400">
              <div className="bg-gray-300 dark:bg-gray-700 rounded-full p-4 mb-4">
                {/* Icon Robot */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2a1 1 0 011 1v1h2a1 1 0 011 1v2h-8V5a1 1 0 011-1h2V3a1 1 0 011-1zM5 10h14v10a1 1 0 01-1 1H6a1 1 0 01-1-1V10z"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold mb-2">
                Send a message to start conversation with our AI Assistant.
              </p>
              <p className="text-sm text-gray-400">
                You can ask anything about me, my work, or anything else you want to know
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex",
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[75%] px-4 py-2 rounded-lg text-sm transition-all",
                      msg.sender === "user"
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {/* Show thinking message if bot is thinking */}
              {isThinking && (
                <div className="flex justify-start">
                  <div className="max-w-[75%] px-4 py-2 rounded-lg text-sm bg-gray-200 text-gray-600">
                    <i>Thinking...</i>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="flex-none px-4 py-4 bg-white dark:bg-black flex items-center space-x-3 rounded-b-xl">
          <input
            type="text"
            className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:bg-black dark:text-white"
            placeholder="Enter Your Question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 focus:outline-none transition-all"
          >
            Send
          </button>
          <button
            onClick={clearChat}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none transition-all"
          >
            Clear Chat
          </button>
        </div>
      </motion.div>
    </>
  );
}
