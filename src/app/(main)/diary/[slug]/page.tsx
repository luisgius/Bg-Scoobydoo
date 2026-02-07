import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { PostDetailClient } from "./PostDetailClient";

export const dynamic = "force-dynamic";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } });
  if (!post) return { title: "Not Found" };
  return { title: post.title };
}

export default async function PostPage({ params }: Props) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } });
  if (!post) notFound();

  return <PostDetailClient post={post} />;
}
