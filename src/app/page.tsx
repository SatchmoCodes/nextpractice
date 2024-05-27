import Link from "next/link";
import { Post } from "./components/Post";
import { prisma } from "./db";

function getPosts() {
  return prisma.posts.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl text-slate-100 mb-10">BlogMania</h1>
      <Link
        className="border border-slate-100 text-slate-100 rounded p-2 hover:bg-slate-700 outline-none"
        href="/new"
      >
        New
      </Link>
      {posts.map((post) => {
        return <Post {...post} key={post.id} />;
      })}
    </main>
  );
}
