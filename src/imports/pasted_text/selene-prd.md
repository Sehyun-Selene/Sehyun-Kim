# PRD — Sehyun Kim 자기소개 페이지

**Product Name:** Selene · Sehyun Kim — Personal Introduction Page  
**Version:** 1.0  
**Last Updated:** 2026-03-24  
**Tech Stack:** Next.js 14+ (App Router) · TypeScript · Zod · Tailwind CSS

---

## 1. Overview

Sehyun Kim(셀린)의 개인 자기소개 페이지. 미술관 홈페이지의 감성을 베이스로, 방문자가 직관적이고 시각적으로 매력적인 방식으로 Sehyun의 이력·역량·가치관을 습득하고, "함께 일하고 싶다"는 인상을 갖도록 유도한다.

### Design Concept
> **"Gallery of a Person"**  
> 미술관처럼 각 섹션이 하나의 전시실이 되고, 방문자는 큐레이션된 경험을 따라 Sehyun의 이야기를 탐험한다.  
> 키워드: **신뢰 · 효율 · 디자인적 감각**  
> 톤 앤 무드: Black & White, 미니멀 에디토리얼, 고급스러운 여백

---

## 2. Target User

| 구분 | 내용 |
|------|------|
| 주요 유저 | Sehyun에 대한 정보가 필요한 일반 방문자 (채용 담당자, 협업 파트너, 교수, 지인 등) |
| 핵심 니즈 | 짧은 시간 안에 핵심 정보를 직관적으로 파악하고 싶다 |
| 기대 결과 | 방문 후 "이 사람과 함께 일하고 싶다 / 면접을 보고 싶다"는 감정을 갖도록 유도 |

---

## 3. Goals & Success Metrics

### 목표
- Sehyun의 이력·역량·가치관을 효과적으로 전달
- 정보 탐색 후 자연스럽게 연락(Contact)으로 이어지는 흐름 설계
- 디자인 감각 자체가 Sehyun의 역량을 증명하는 매체가 되도록

### 성공 지표 (정성적)
- 방문자가 GNB를 통해 원하는 섹션으로 3초 이내 이동 가능
- 모바일 환경에서 가독성 저하 없이 동일한 정보 접근 가능
- Contact 버튼·링크 클릭 유도

---

## 4. Scope

### In Scope
- 단일 페이지(Single Page Application) + 앵커 내비게이션
- 반응형 레이아웃 (Desktop 1440px, Mobile 375~430px)
- GNB / LNB 드롭다운 내비게이션
- Hero 섹션
- About 섹션 (Academic Background, Interests, Values)
- Skills 섹션 (Languages, Tools)
- Experiences 섹션 (Abroad, Inner School, Outer School)
- Projects 섹션 (이미지 플레이스홀더 포함)
- Contact (GNB 우측 버튼 + Footer)
- Zod 기반 데이터 스키마 검증 (콘텐츠 데이터 타입 안전성)

### Out of Scope (v1)
- CMS / 어드민 패널
- 다국어 지원
- 실제 이미지 업로드 기능 (사진은 추후 교체)
- 애니메이션 인터랙티브 갤러리 (v2 고려)
- 블로그 / 글쓰기 기능

---

## 5. Information Architecture

```
/ (루트 — 단일 페이지)
├── GNB
│   ├── About ▾
│   │   ├── Academic Background
│   │   ├── Interests
│   │   └── Values
│   ├── Skills ▾
│   │   ├── Languages
│   │   └── Tools
│   ├── Experiences ▾
│   │   ├── Abroad
│   │   ├── Inner School
│   │   └── Outer School
│   ├── Projects
│   └── [Contact] (우측 상단 버튼)
│
├── Hero Section
├── About Section
├── Skills Section
├── Experiences Section
├── Projects Section
└── Footer (Contact 정보)
```

---

## 6. Content Specification

### 6-1. Identity
| 항목 | 내용 |
|------|------|
| Full Name | Sehyun Kim |
| Nickname | Selene |
| Profile Image | 첨부 예정 (placeholder 처리) |

### 6-2. About

**Academic Background**
- Anyang Foreign Language High School, English Major — 2023.02 Graduation
- Seoul National University, Korean Language and Literature / Information Science and Culture (재학)

**Interests**
- HCI · UX/UI
- Vibe Coding
- AI (especially Edu-tech)
- Korean Education

**Values**
- Courtesy · Inclusivity · Passion · Education

### 6-3. Skills

**Languages**
| Language | Level |
|----------|-------|
| Korean | Native |
| English | Fluent |
| Chinese | Intermediate |
| French | Beginner |
| Spanish | Beginner |

**Tools (Learning)**
- JavaScript
- Figma
- Adobe Illustrator
- Audacity

### 6-4. Experiences

**Abroad** *(사진 첨부 예정)*
| 기간 | 내용 |
|------|------|
| 2024.01 | University of Minnesota Exchange Program |
| 2024.07 | University of Michigan Advanced English Course |
| 2025.02–06 | University of Copenhagen Exchange Student |
| 2026.01 | Social Responsibility + SNU in the World Program in Peru |

**Inner School**
| 기간 | 내용 |
|------|------|
| 2023 | LNL (Living N Learning) 2A Class President |
| 2023.09–12 | Student Seminar — "Usage of Media for an Effective Korean Education as the 2nd Language" Representative |
| 2023.03–2024.06 | Seoul National University Broadcast Newsroom Reporter |
| 2024.01 | Project Manager, Online Exchange Program with University of Michigan |
| 2024.01–06 | Newsroom Reporter Training Team Leader |
| 2024.03–06 | Scheme Devising Team, School of Transdisciplinary Innovations |
| 2024.03–06 | SNU Buddy (Supporting Exchange Students) |
| 2024.09–12 | Member, Student Council — Department of Humanities |

**Outer School**
| 기간 | 내용 |
|------|------|
| 2024 | Mentoring Multicultural Students (Korean & English) |
| 2024.09–2025.06 | American Diplomacy House Academy, Year 3 |
| 2025.09–12 | Library Volunteer |
| 2026– | Mentoring Elementary School Students at Child Center |

### 6-5. Projects *(이미지는 Figma 작업 시 교체 예정)*
| 프로젝트 | 유형 | 설명 |
|---------|------|------|
| "층" | Participatory VR Program | 인터랙티브 기사를 모티브로 층간소음 사회 문제를 다룬 참여형 가상현실 프로그램. 글·영상을 넘어선 현실감으로 경각심을 유도. |
| "The Devil of Anxiety — Arc.Number 100" | Interactive Storytelling Game | 청년 불안을 주제로 Twine으로 개발한 인터랙티브 스토리텔링 게임. |

### 6-6. Contact
| 채널 | 내용 |
|------|------|
| Instagram | https://www.instagram.com/12imsehyun/ |
| Email | su9pta1r@snu.ac.kr |

---

## 7. UX / Navigation Specification

### GNB (Global Navigation Bar)
- 위치: 페이지 최상단, sticky (스크롤 시 고정)
- 좌측: 로고 또는 이름 텍스트 (Selene / Sehyun Kim)
- 중앙: About / Skills / Experiences / Projects 메뉴 (호버 시 LNB 드롭다운)
- 우측: **Contact** CTA 버튼 (아웃라인 또는 반전 버튼)
- LNB: 호버/클릭 시 해당 섹션 앵커로 스크롤 이동

### Hero Section
- GNB 바로 아래 전체 뷰포트(100vh) 구성
- 이름(Sehyun Kim · Selene), tagline 3줄, 프로필 이미지 플레이스홀더 (Figma 작업 시 실제 이미지로 교체)
- **Tagline:**
  - "Knowing the Value of Experiences"
  - "Making every step meaningful"
  - "Balancing between humanities and science"
- 미술관 입구 느낌 — 여백 중심, 타이포그래피 강조

### 모바일 (375–430px)
- GNB → 햄버거 메뉴로 전환, 탭 시 풀스크린 또는 사이드 드로어 메뉴 표시
- LNB 항목은 아코디언 형태로 확장
- 모든 섹션 단일 컬럼 레이아웃
- Contact 버튼은 모바일 메뉴 내부에 포함

---

## 8. Design System

### 색상
| 토큰 | 값 |
|------|----|
| `--color-bg` | #FFFFFF |
| `--color-surface` | #F5F5F5 |
| `--color-primary` | #000000 |
| `--color-secondary` | #333333 |
| `--color-muted` | #888888 |
| `--color-border` | #E0E0E0 |
| `--color-accent` | #000000 (반전 버튼용) |

### 타이포그래피
| 용도 | 폰트 | 크기 |
|------|------|------|
| Display (Hero 이름) | Cormorant Garamond / Playfair Display | 72–96px |
| Section Title | 동일 serif | 40–56px |
| Body | DM Sans / Instrument Sans | 16–18px |
| Label / Caption | DM Mono | 12–14px |

### 그리드
- Desktop: 12컬럼, 최대 너비 1440px, 좌우 패딩 80px
- Tablet (768–1024px): 8컬럼, 패딩 40px
- Mobile: 4컬럼, 패딩 20px

### 스타일 원칙
- 배경: 흰색 기반, 섹션 구분은 풀 블리드 블랙 또는 라이트 그레이
- 선(border)과 여백으로 콘텐츠 구조 형성
- 호버 효과: 언더라인 슬라이드, 이미지 흑백→컬러 (사진 첨부 후)
- 미술관 캡션 스타일의 레이블 처리 (작은 크기, 대문자, 자간 넓게)

---

## 9. Technical Specification

### 기술 스택
| 항목 | 기술 |
|------|------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Validation | **Zod** (콘텐츠 데이터 스키마 검증) |
| Styling | Tailwind CSS |
| Font | Google Fonts (Cormorant Garamond + DM Sans + DM Mono) |
- 이미지 플레이스홀더: 코드에서는 `next/image` + 회색 placeholder 처리, Figma에서 최종 이미지 확정 후 파일만 교체하면 반영되도록 설계
- Deployment: **Vercel** (확정)
- 스크롤 애니메이션: **전 섹션 적용** — Intersection Observer 기반 fade-in / slide-up, staggered reveal

### 파일 구조 (제안)
```
src/
├── app/
│   ├── layout.tsx          # Root layout (GNB, Footer 포함)
│   ├── page.tsx            # 메인 SPA 페이지
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── GNB.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperiencesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── SectionTitle.tsx
│       ├── TimelineItem.tsx
│       └── SkillBar.tsx
├── data/
│   └── content.ts          # 모든 정적 콘텐츠 데이터
└── lib/
    └── schemas.ts          # Zod 스키마 정의
```

### Zod 스키마 설계 (핵심)
```typescript
// lib/schemas.ts

import { z } from "zod";

export const AcademicItemSchema = z.object({
  institution: z.string(),
  major: z.string().optional(),
  period: z.string(),
});

export const LanguageSkillSchema = z.object({
  language: z.string(),
  level: z.enum(["Native", "Fluent", "Intermediate", "Beginner"]),
});

export const ExperienceItemSchema = z.object({
  period: z.string(),
  title: z.string(),
  category: z.enum(["Abroad", "InnerSchool", "OuterSchool"]),
  imageUrl: z.string().url().optional(),
});

export const ProjectSchema = z.object({
  title: z.string(),
  type: z.string(),
  description: z.string().optional(),
  imageUrl: z.string().url().optional(),
});

export const ContactSchema = z.object({
  instagram: z.string().url(),
  email: z.string().email(),
});

export const PortfolioDataSchema = z.object({
  name: z.string(),
  nickname: z.string(),
  tagline: z.string().optional(),
  academics: z.array(AcademicItemSchema),
  interests: z.array(z.string()),
  values: z.array(z.string()),
  languages: z.array(LanguageSkillSchema),
  tools: z.array(z.string()),
  experiences: z.array(ExperienceItemSchema),
  projects: z.array(ProjectSchema),
  contact: ContactSchema,
});

export type PortfolioData = z.infer<typeof PortfolioDataSchema>;
```

---

## 10. Accessibility & Performance

- 모든 이미지에 `alt` 텍스트 필수
- 키보드 내비게이션 지원 (GNB, Contact 버튼)
- 색상 대비 WCAG AA 기준 충족 (흑백 톤이므로 자연스럽게 충족)
- `next/image` 사용으로 이미지 최적화
- `next/font`로 폰트 최적화 (layout shift 방지)
- Lighthouse Performance 목표: 90+

---

## 11. Phase Plan

| Phase | 내용 | 산출물 |
|-------|------|-------|
| **Phase 1** | 프로젝트 셋업 + Zod 스키마 + 콘텐츠 데이터 | `schemas.ts`, `content.ts` |
| **Phase 2** | GNB / Hero 섹션 구현 | `GNB.tsx`, `HeroSection.tsx` |
| **Phase 3** | About / Skills 섹션 구현 | `AboutSection.tsx`, `SkillsSection.tsx` |
| **Phase 4** | Experiences / Projects 섹션 구현 | `ExperiencesSection.tsx`, `ProjectsSection.tsx` |
| **Phase 5** | Contact / Footer + 모바일 반응형 | `Footer.tsx`, `MobileMenu.tsx` |
| **Phase 6** | 디자인 polish + 애니메이션 + 이미지 교체 | 완성본 |

---

## 12. Resolved Questions (확정)

| # | 질문 | 결정 |
|---|------|------|
| 1 | 프로필/Abroad/Projects 이미지 제공 방식 | Figma에서 직접 교체 — 코드는 placeholder로 처리 ✅ |
| 2 | Hero tagline | "Knowing the Value of Experiences / Making every step meaningful / Balancing between humanities and science" ✅ |
| 3 | Projects 설명 | "층": 층간소음 VR 참여형 프로그램 / "The Devil of Anxiety": Twine 기반 청년 불안 인터랙티브 게임 ✅ |
| 4 | 배포 환경 | Vercel ✅ |
| 5 | 스크롤 애니메이션 범위 | 전 섹션 적용 ✅ |

---

*PRD 확정 — 개발 진행 가능*