import { Mail, MessageSquare } from "lucide-react";
import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium } from "react-icons/fa6";
import { ModeToggle } from "@/components/mode-toggle";
import React, { useState, useEffect } from "react";

export function ContactSection() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/amankumar-portfolio/visits')
      .then(res => res.json())
      .then(data => setVisitorCount(data.value))
      .catch(() => setVisitorCount(null));
  }, []);

  return (
    <section
      id="contact"
      className="w-full py-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge
          title="Contact"
          icon={<MessageSquare size={14} color="#EF4444" />}
        />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            Let&apos;s{" "}
            <span className="text-[#08090a] dark:text-slate-200">Connect</span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            I&apos;m always excited to collaborate on interesting projects or
            just have a great tech conversation!
          </p>
        </div>
      </div>

      <div className="w-full">
        <SpotlightCard
          gradientColor="rgba(100, 116, 139, 0.1)"
          lightGradientColor="rgba(8, 9, 10, 0.1)"
          spotlightSize={400}
          multiSpotlight={true}
          initialHovered={false}
          disableScale={true}
          className="p-8 rounded-sm border border-gray-200/80 dark:border-gray-500/10 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-slate-500/10 transition-all duration-300"
        >
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <h4 className="text-xl font-medium text-[#08090a] dark:text-white">
                Ready to start a conversation?
              </h4>

              <a
                href="mailto:amankumarr7390@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500/10 transition-colors"
              >
                amankumarr7390@gmail.com
                <Mail className="w-4 h-4 mt-1" color="#2563EB" />
              </a>

              <div className="flex items-center justify-center gap-4 pt-4">
                <a
                  href="https://x.com/Amank1412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500/10 transition-colors relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaXTwitter className="relative w-5 h-5" />
                </a>

                <a
                  href="https://github.com/Amank1412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500/10 transition-colors relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaGithub className="relative w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/Amank1412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500/10 transition-colors relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaLinkedin className="relative w-5 h-5" />
                </a>

                <a
                  href="https://medium.com/@Amank1412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-500/10 transition-colors relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaMedium className="relative w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="inline-block px-4 py-2 text-sm text-[#737373] dark:text-[#A1A1AA] bg-gray-50 dark:bg-[#141414] rounded-sm">
                💬 I typically respond within 30 Minutes!
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
      <div className="w-full flex flex-col items-center gap-4 mt-8">
        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="flex items-center px-3 py-2 bg-gray-100 dark:bg-[#191a1a] rounded text-sm text-gray-700 dark:text-gray-200 min-w-[56px] justify-center shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12C2.25 12 5.25 5.25 12 5.25s9.75 6.75 9.75 6.75-3 6.75-9.75 6.75S2.25 12 2.25 12z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{visitorCount !== null ? visitorCount : '--'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
