import type { LinkItem } from "@/data/profile";

export default function LinkCard({ title, url, icon }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md active:translate-y-0 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-emerald-500"
    >
      {icon && (
        <span className="text-xl" aria-hidden>
          {icon}
        </span>
      )}
      <span className="flex-1 text-center font-medium">{title}</span>
      {/* 아이콘과 대칭을 맞춰 제목이 가운데 오도록 한다 */}
      {icon && <span className="w-[1.25em] text-xl" aria-hidden />}
    </a>
  );
}
