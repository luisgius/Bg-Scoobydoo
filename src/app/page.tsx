import { prisma } from "@/lib/prisma";
import { LandingClient } from "./LandingClient";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const latestPosts = await prisma.post.findMany({
    orderBy: { publishedAt: "desc" },
    take: 3,
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      publishedAt: true,
      contentEn: true,
    },
  });

  return <LandingClient posts={latestPosts} />;
}
