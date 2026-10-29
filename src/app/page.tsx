import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pb-12 pt-6">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-4">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
      </div>

      <LinkList links={profile.links} />

      <footer className="mt-auto pt-12 text-center text-xs text-neutral-400">🌳 링크나무</footer>
    </main>
  );
}
