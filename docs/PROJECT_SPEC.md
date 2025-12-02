# [PRD] 미니멀리즘 테크 블로그 구축 기획서
**Project Name:** Project Vitesse (Antfu Style Clone)  
**Version:** 1.0  
**Status:** Ready for Dev

## 1. 프로젝트 개요 (Overview)
* **제품 정의:** 불필요한 장식을 배제하고 **'활자(Typography)'**와 **'코드 가독성'**에 집중한 개발자 전용 블로그.
* **핵심 가치:** Extreme Minimalism, High Performance, Developer Experience (DX).
* **타겟 유저:** 고품질의 기술 아티클을 읽고 쓰는 개발자 그룹.

---

## 2. 디자인 시스템 (Visual Identity System)

가장 중요한 것은 **'완전한 블랙/화이트의 배제'**를 통한 눈의 편안함입니다.

### 2.1. 컬러 팔레트 (Color Scheme)
시스템 설정에 따라 **Light/Dark 모드**가 자동 전환되어야 하며, 토글 시 `Hydration Mismatch` 깜빡임이 없어야 합니다.

| 구분 | 요소 (Element) | Dark Mode (Default) | Light Mode | 비고 |
| :--- | :--- | :--- | :--- | :--- |
| **Background** | Main BG | `#050505` (Deep Black) | `#ffffff` (Pure White) | OLED 절전 및 가독성 최적화 |
| | Component BG | `#121212` | `#f8f9fa` | 코드 블록, 카드 배경 |
| **Text** | Heading | `#ffffff` | `#111827` | 강조 텍스트 |
| | Body | `#b0b0b0` (Soft Grey) | `#374151` (Dark Grey) | **핵심:** 너무 쨍하지 않게 처리 |
| | Muted | `#737373` | `#6b7280` | 날짜, 태그, 부가 정보 |
| **Accent** | Brand Color | `#3eaf7c` (Vue Green) | `#3eaf7c` | 링크, 로고, 강조점 |
| | Selection | `#3eaf7c33` (Opacity 20%) | `#3eaf7c33` | 드래그 시 배경색 |
| **Border** | Line | `#373737` | `#e5e7eb` | 구분선 |

### 2.2. 타이포그래피 (Typography)
* **Font Family:**
    * **Body:** Inter (가독성), Noto Sans KR (국문)
    * **Code:** Fira Code, JetBrains Mono (Ligature 필수 지원)
* **Typesetting:**
    * **Line-height:** 1.75 (여유로운 줄 간격)
    * **Letter-spacing:** `-0.02em` (미세하게 자간을 좁혀 세련됨 강조)
    * **Weight:** 400(Regular) 위주, Bold 사용 최소화.

### 2.3. 레이아웃 (Layout)
* **Container Width:** `max-width: 65ch` (약 650~700px).
    * *PM Note:* 65ch는 사람이 고개를 돌리지 않고 눈동자만으로 읽을 수 있는 최적의 너비입니다.
* **Grid:** 1단 컬럼 (Single Column) 레이아웃.
* **Responsive:** 모바일에서는 `padding: 0 1rem`만 적용하고 구조 변경 없음.

---

## 3. 기능 및 UX 명세 (Functional & UX Specs)

### 3.1. 내비게이션 & 인터랙션
* **GNB (Global Navigation Bar):**
    * 스크롤 시 배경과 `backdrop-filter: blur(10px)` 처리되어 본문 위로 떠 있는 느낌.
    * 구성: Logo (Left), [Blog, Projects, Demos, Search, Theme Toggle] (Right).
* **Theme Toggle:**
    * 클릭 시 부드러운 전환 애니메이션 (View Transitions API 활용 권장).
    * 설정값은 `localStorage`에 저장.
* **Image Zoom:**
    * 본문 이미지 클릭 시 라이트박스 팝업이 아닌, 해당 위치에서 자연스럽게 확대되는 `medium-zoom` 스타일 적용.

### 3.2. 콘텐츠 뷰어 (Article Viewer)
* **Code Block (High Priority):**
    * **Shiki** 라이브러리 사용 (빌드 타임 렌더링).
    * **Twoslash** 기능 구현: 코드 내 변수에 마우스 오버 시 타입 정보 툴팁 노출.
    * Copy Button: 호버 시 우측 상단에 노출.
* **Typography Elements:**
    * **List:** 불렛(`•`)은 텍스트보다 흐린 색(`Muted Color`)으로 처리.
    * **Blockquote:** 좌측 `3px` 두께의 Accent Color Border 적용.
    * **Links:** 텍스트 색상은 유지하되, 하단에 얇은 밑줄(`border-bottom`) 적용. 호버 시 Accent Color로 변경.

### 3.3. SEO 및 성능 최적화
* **Metadata:** 게시글별 `og:image` 자동 생성 (Satori 등 활용).
* **RSS:** `feed.xml` 자동 생성 및 헤더 링크 노출.
* **Sitemap:** `sitemap.xml` 동적 생성.

---

## 4. 권장 기술 스택 (Tech Stack Recommendation)

원본 블로그(`antfu.me`)와 동일한 퍼포먼스를 내기 위한 최적의 조합입니다.

| 구분 | 추천 스택 | 선정 이유 |
| :--- | :--- | :--- |
| **Framework** | **Nuxt 3** (또는 Next.js) | Vue 생태계의 정점, SSG/ISR 지원 강력. |
| **Content** | **Nuxt Content** (Markdown) | `.md` 파일을 DB처럼 조회 가능, Frontmatter 관리 용이. |
| **Styling** | **UnoCSS** (또는 Tailwind) | Atomic CSS 엔진으로 가볍고 빠른 스타일링. |
| **Code Tool** | **Shiki** | 런타임 JS 없이 고품질 구문 강조 가능. |
| **Deployment** | **Vercel** / **Netlify** | Edge Function 및 전역 CDN 활용. |

---

## 5. PM의 코멘트 (Wrap-up)

> "이 프로젝트의 성공 기준은 **'무엇을 더하느냐'가 아니라 '무엇을 뺄 것인가'**에 달려 있습니다.
>
> 1.  **색상:** `#000000` 대신 `#050505`를 사용하는 디테일을 지켜주세요.
> 2.  **여백:** 65ch의 좁은 폭을 두려워하지 마세요. 읽는 경험이 훨씬 좋아집니다.
> 3.  **코드:** 개발자 블로그의 핵심은 코드 블록입니다. `Shiki` 테마 적용에 공수를 많이 들여주세요."