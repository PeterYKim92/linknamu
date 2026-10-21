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
  name: "김클로",
  bio: "세계 최강 바이브코더",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com", icon: "💻" },
    { id: "blog", title: "블로그", url: "https://velog.io", icon: "✍️" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com", icon: "📸" },
    { id: "youtube", title: "YouTube", url: "https://youtube.com", icon: "🎬" },
  ],
};
