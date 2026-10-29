import type { LinkItem } from "@/data/profile";

type Props = LinkItem & {
  count: number;
  onClick: () => void;
};

export default function LinkCard({ title, url, icon, count, onClick }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md active:translate-y-0 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-emerald-500"
    >
      {/* 양쪽 칸 너비를 같게 맞춰 제목이 가운데 오도록 한다 */}
      <span className="w-12 text-xl" aria-hidden>
        {icon}
      </span>
      <span className="flex-1 text-center font-medium">{title}</span>
      <span className="w-12 text-right text-xs tabular-nums text-neutral-400 dark:text-neutral-500">{count}회</span>
    </a>
  );
}
