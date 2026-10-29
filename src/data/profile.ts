export type LinkItem = {
  id: string;
  title: string;
  url: string;
  icon?: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 기준 경로. 없으면 이름 첫 글자로 아바타를 표시한다.
  image?: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "김용택",
  bio: "비지니스 기획자\n요즘에는 AI기반의 비지니스 모델들을 구상하고 만들고 있습니다.",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com", icon: "💻" },
    { id: "blog", title: "블로그", url: "https://velog.io", icon: "✍️" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com", icon: "📸" },
    { id: "youtube", title: "YouTube", url: "https://youtube.com", icon: "🎬" },
  ],
};
