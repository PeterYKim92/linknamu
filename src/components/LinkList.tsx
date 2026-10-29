"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 받아오기 전에는 비어 있어 모든 카드가 0회로 보인다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : {}))
      .then(setCounts)
      .catch(() => {});
  }, []);

  function handleClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // 새 탭으로 이동해도 요청이 끝까지 가도록 keepalive를 쓴다.
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <ul className="mt-10 flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} count={counts[link.id] ?? 0} onClick={() => handleClick(link.id)} />
        </li>
      ))}
    </ul>
  );
}
