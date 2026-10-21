import LinkCard from "@/components/LinkCard";
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

      <ul className="mt-10 flex flex-col gap-4">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>

      <footer className="mt-auto pt-12 text-center text-xs text-neutral-400">🌳 링크나무</footer>
    </main>
  );
}
