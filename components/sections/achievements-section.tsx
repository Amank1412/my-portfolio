import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  GraduationCap,
  Award,
  Trophy,
  BookText,
  CodeIcon, // ✅ Added this
} from "lucide-react";

type Achievement = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ReactNode;
};

const achievements: Achievement[] = [
  {
    title: "Harvard Undergraduate Ventures TECH Summer Program 2025",
    issuer: "Harvard (SEAS) & Harvard Undergraduate Ventures",
    date: "June 2025",
    description:
      "Accepted with $1250 scholarship (15% acceptance rate). Hosted by Harvard Technology & Entrepreneurship Center.",
    icon: <GraduationCap className="w-6 h-6" color="#9333EA" />,
  },
  {
    title: "International Quant Championship 2025 – Stage 1",
    issuer: "WorldQuant",
    date: "June 2025",
    description: "Ranked in the top 20% globally in Stage 1.",
    icon: <Trophy className="w-6 h-6" color="#F59E0B" />,
  },
  {
    title: "International Quant Championship 2025 – Institute Rank 1",
    issuer: "WorldQuant",
    date: "May 2025",
    description: "Secured Institute Rank 1 in International Quant Championship.",
    icon: <Trophy className="w-6 h-6" color="#F59E0B" />,
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "May 2025",
    description: "Certified by Meta. Focused on JavaScript and frontend fundamentals.",
    icon: <BookText className="w-6 h-6" color="#2563EB" />,
  },
  {
    title: "Gold Level - WorldQuant Challenge",
    issuer: "WorldQuant",
    date: "April 2025",
    description: "Achieved Gold level in the WorldQuant Research Challenge.",
    icon: <Award className="w-6 h-6" color="#EAB308" />,
  },
  {
    title: "Competitive Programming (Level 1)",
    issuer: "TLE Eliminators",
    date: "March 2025",
    description: "Certified in C++ and Competitive Programming fundamentals.",
    icon: <CodeIcon className="w-6 h-6" color="#22C55E" />,
  },
  {
    title: "Basics of C++",
    issuer: "TLE Eliminators",
    date: "2025",
    description: "Completed training on fundamentals of C++ programming.",
    icon: <CodeIcon className="w-6 h-6" color="#A78BFA" />,
  },
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge
          title="Achievements & Certifications"
          icon={<Trophy size={14} color="#22C55E" />}
        />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            <span className="text-[#08090a] dark:text-slate-200">
              Highlights from My Journey
            </span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Recognitions and certifications that reflect my dedication to
            learning and performance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 w-full">
        {achievements.map((item, index) => (
          <SpotlightCard
            key={index}
            gradientColor="rgba(100, 116, 139, 0.50)"
            lightGradientColor="rgba(8, 9, 10, 0.2)"
            spotlightSize={350}
            glowEffect={true}
            glowSize={150}
            glowOpacity={0.15}
            className="p-6 rounded-sm border border-gray-200/80 dark:border-gray-500/10 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-gray-500/20 transition-all duration-300"
          >
            <div className="flex flex-col xs:flex-row items-start gap-4">
              <div className="flex-shrink-0 mt-1">{item.icon}</div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#08090a] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-[#737373] dark:text-[#A1A1AA] text-sm leading-relaxed">
                  <strong>{item.issuer}</strong> &nbsp;| {item.date}
                </p>
                <p className="text-[#525252] dark:text-[#D4D4D8] text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
