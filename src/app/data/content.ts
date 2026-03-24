import { PortfolioDataSchema, type PortfolioData } from "../lib/schemas";

export const portfolioData: PortfolioData = PortfolioDataSchema.parse({
  name: "Sehyun Kim",
  nickname: "Selene",
  tagline: [
    "Knowing the Value of Experiences",
    "Making every step meaningful",
    "Balancing between humanities and science",
  ],
  academics: [
    {
      institution: "Anyang Foreign Language High School",
      major: "English Major",
      period: "2023.02 Graduation",
    },
    {
      institution: "Seoul National University",
      major: "Korean Language and Literature / Information Science and Culture",
      period: "재학",
    },
  ],
  interests: [
    "HCI · UX/UI",
    "Vibe Coding",
    "AI (especially Edu-tech)",
    "Korean Education",
  ],
  values: ["Courtesy", "Inclusivity", "Passion", "Education"],
  languages: [
    { language: "Korean", level: "Native" },
    { language: "English", level: "Fluent" },
    { language: "Chinese", level: "Intermediate" },
    { language: "French", level: "Beginner" },
    { language: "Spanish", level: "Beginner" },
  ],
  tools: ["JavaScript", "Figma", "Adobe Illustrator", "Audacity"],
  experiences: [
    {
      period: "2024.01",
      title: "University of Minnesota Exchange Program",
      category: "Abroad",
    },
    {
      period: "2024.07",
      title: "University of Michigan Advanced English Course",
      category: "Abroad",
    },
    {
      period: "2025.02–06",
      title: "University of Copenhagen Exchange Student",
      category: "Abroad",
      description: "Worked as an Assistant Teacher in Korean Alphabet School",
    },
    {
      period: "2026.01",
      title: "SR+SWP in Peru",
      category: "Abroad",
      description: "Volunteered as an Elementary School Teacher",
    },
    {
      period: "2023",
      title: "LNL (Living N Learning) 2A Class President",
      category: "InnerSchool",
    },
    {
      period: "2023.09–12",
      title:
        'Student Seminar — "Usage of Media for an Effective Korean Education as the 2nd Language" Representative',
      category: "InnerSchool",
    },
    {
      period: "2023.03–2024.06",
      title: "Seoul National University Broadcast Newsroom Reporter",
      category: "InnerSchool",
    },
    {
      period: "2024.01",
      title: "Project Manager, Online Exchange Program with University of Michigan",
      category: "InnerSchool",
    },
    {
      period: "2024.01–06",
      title: "Newsroom Reporter Training Team Leader",
      category: "InnerSchool",
    },
    {
      period: "2024.03–06",
      title: "Scheme Devising Team, School of Transdisciplinary Innovations",
      category: "InnerSchool",
    },
    {
      period: "2024.03–06",
      title: "SNU Buddy (Supporting Exchange Students)",
      category: "InnerSchool",
    },
    {
      period: "2024.09–12",
      title: "Member, Student Council — Department of Humanities",
      category: "InnerSchool",
    },
    {
      period: "2024",
      title: "Mentoring Multicultural Students (Korean & English)",
      category: "OuterSchool",
    },
    {
      period: "2024.09–2025.06",
      title: "American Diplomacy House Academy, Year 3",
      category: "OuterSchool",
    },
    {
      period: "2025.09–12",
      title: "Library Volunteer",
      category: "OuterSchool",
    },
    {
      period: "2026–",
      title: "Mentoring Elementary School Students at Child Center",
      category: "OuterSchool",
    },
  ],
  projects: [
    {
      title: "층",
      type: "Participatory VR Program",
      description:
        "인터랙티브 기사를 모티브로 층간소음 사회 문제를 다룬 참여형 가상현실 프로그램. 글·영상을 넘어선 현실감으로 경각심을 유도.",
      imageUrl: "/images/project-floor.jpg",
    },
    {
      title: "The Devil of Anxiety — Arc.Number 100",
      type: "Interactive Storytelling Game",
      description:
        "청년 불안을 주제로 Twine으로 개발한 인터랙티브 스토리텔링 게임.",
      imageUrl: "/images/project-anxiety.jpg",
    },
  ],
  contact: {
    instagram: "https://www.instagram.com/12imsehyun/",
    email: "su9pta1r@snu.ac.kr",
  },
});