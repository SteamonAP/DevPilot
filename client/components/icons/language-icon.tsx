import type { IconType } from "react-icons";
import {
  SiC,
  SiClojure,
  SiCplusplus,
  SiCrystal,
  SiCss,
  SiDart,
  SiDocker,
  SiElixir,
  SiErlang,
  SiFsharp,
  SiGnubash,
  SiGo,
  SiGraphql,
  SiHaskell,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiJupyter,
  SiKotlin,
  SiLua,
  SiMarkdown,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiR,
  SiReact,
  SiRuby,
  SiRust,
  SiSass,
  SiScala,
  SiSolidity,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

type LanguageConfig = {
  Icon: IconType;
  bg: string;
  iconClass: string;
};

const LANGUAGE_MAP: Record<string, LanguageConfig> = {
  JavaScript: {
    Icon: SiJavascript,
    bg: "bg-[#F7DF1E]",
    iconClass: "text-[#323330]",
  },

  TypeScript: {
    Icon: SiTypescript,
    bg: "bg-[#3178C6]",
    iconClass: "text-white",
  },

  Python: {
    Icon: SiPython,
    bg: "bg-[#3776AB]",
    iconClass: "text-white",
  },

  Java: {
    Icon: SiC,
    bg: "bg-[#ED8B00]",
    iconClass: "text-white",
  },

  C: {
    Icon: SiC,
    bg: "bg-[#A8B9CC]",
    iconClass: "text-white",
  },

  "C++": {
    Icon: SiCplusplus,
    bg: "bg-[#00599C]",
    iconClass: "text-white",
  },

  Clojure: {
    Icon: SiClojure,
    bg: "bg-[#5881D8]",
    iconClass: "text-white",
  },

  Crystal: {
    Icon: SiCrystal,
    bg: "bg-[#000000]",
    iconClass: "text-white",
  },

  CSS: {
    Icon: SiCss,
    bg: "bg-[#1572B6]",
    iconClass: "text-white",
  },

  Dart: {
    Icon: SiDart,
    bg: "bg-[#0175C2]",
    iconClass: "text-white",
  },

  Docker: {
    Icon: SiDocker,
    bg: "bg-[#2496ED]",
    iconClass: "text-white",
  },

  Elixir: {
    Icon: SiElixir,
    bg: "bg-[#4B275F]",
    iconClass: "text-white",
  },

  Erlang: {
    Icon: SiErlang,
    bg: "bg-[#A90533]",
    iconClass: "text-white",
  },

  FSharp: {
    Icon: SiFsharp,
    bg: "bg-[#378BBA]",
    iconClass: "text-white",
  },

  "F#": {
    Icon: SiFsharp,
    bg: "bg-[#378BBA]",
    iconClass: "text-white",
  },

  Go: {
    Icon: SiGo,
    bg: "bg-[#00ADD8]",
    iconClass: "text-white",
  },

  GraphQL: {
    Icon: SiGraphql,
    bg: "bg-[#E10098]",
    iconClass: "text-white",
  },

  Haskell: {
    Icon: SiHaskell,
    bg: "bg-[#5D4F85]",
    iconClass: "text-white",
  },

  HTML: {
    Icon: SiHtml5,
    bg: "bg-[#E34F26]",
    iconClass: "text-white",
  },

  HTML5: {
    Icon: SiHtml5,
    bg: "bg-[#E34F26]",
    iconClass: "text-white",
  },

  JSON: {
    Icon: SiJson,
    bg: "bg-[#000000]",
    iconClass: "text-white",
  },

  Jupyter: {
    Icon: SiJupyter,
    bg: "bg-[#F37626]",
    iconClass: "text-white",
  },

  Kotlin: {
    Icon: SiKotlin,
    bg: "bg-[#7F52FF]",
    iconClass: "text-white",
  },

  Lua: {
    Icon: SiLua,
    bg: "bg-[#2C2D72]",
    iconClass: "text-white",
  },

  Markdown: {
    Icon: SiMarkdown,
    bg: "bg-[#000000]",
    iconClass: "text-white",
  },

  MySQL: {
    Icon: SiMysql,
    bg: "bg-[#4479A1]",
    iconClass: "text-white",
  },

  Node: {
    Icon: SiNodedotjs,
    bg: "bg-[#339933]",
    iconClass: "text-white",
  },

  "Node.js": {
    Icon: SiNodedotjs,
    bg: "bg-[#339933]",
    iconClass: "text-white",
  },

  PHP: {
    Icon: SiPhp,
    bg: "bg-[#777BB4]",
    iconClass: "text-white",
  },

  PostgreSQL: {
    Icon: SiPostgresql,
    bg: "bg-[#4169E1]",
    iconClass: "text-white",
  },

  React: {
    Icon: SiReact,
    bg: "bg-[#61DAFB]",
    iconClass: "text-[#20232A]",
  },

  R: {
    Icon: SiR,
    bg: "bg-[#276DC3]",
    iconClass: "text-white",
  },

  Ruby: {
    Icon: SiRuby,
    bg: "bg-[#CC342D]",
    iconClass: "text-white",
  },

  Rust: {
    Icon: SiRust,
    bg: "bg-[#000000]",
    iconClass: "text-white",
  },

  Sass: {
    Icon: SiSass,
    bg: "bg-[#CC6699]",
    iconClass: "text-white",
  },

  Scala: {
    Icon: SiScala,
    bg: "bg-[#DC322F]",
    iconClass: "text-white",
  },

  Solidity: {
    Icon: SiSolidity,
    bg: "bg-[#363636]",
    iconClass: "text-white",
  },

  Swift: {
    Icon: SiSwift,
    bg: "bg-[#F05138]",
    iconClass: "text-white",
  },

  Tailwind: {
    Icon: SiTailwindcss,
    bg: "bg-[#06B6D4]",
    iconClass: "text-white",
  },

  TailwindCSS: {
    Icon: SiTailwindcss,
    bg: "bg-[#06B6D4]",
    iconClass: "text-white",
  },

  Vue: {
    Icon: SiVuedotjs,
    bg: "bg-[#4FC08D]",
    iconClass: "text-white",
  },
};

type LanguageIconProps = {
  language: string;
  className?: string;
};

export function LanguageIcon({
  language,
  className = "",
}: LanguageIconProps) {
  const config = LANGUAGE_MAP[language];

  if (!config) {
    return (
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground ${className}`}
        title={language}
      >
        <span className="text-xs font-semibold">
          {language.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  const { Icon, bg, iconClass } = config;

  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-md ${bg} ${className}`}
      title={language}
    >
      <Icon className={`h-5 w-5 ${iconClass}`} />
    </div>
  );
}