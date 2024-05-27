import Link from "next/link";
import { prisma } from "../db";
import Delete from "./Delete";
import { redirect } from "next/navigation";

type Post = {
  id: string;
  title: string;
  content: string;
};

async function handleDelete(id: string) {
  "use server";
  await prisma.posts.delete({ where: { id } });
  redirect('/')
}

export function Post({ id, title, content }: Post) {
  return (
    <>
      <div
        key={id}
        className="bg bg-slate-50 border border-slate-950 mt-5 p-2 w-11/12"
      >
        <div className="flex justify-between">
          <h2 className="text-3xl mb-4">{title}</h2>
          <div className="flex justify-center items-center gap-2">
            <Link
              className="border border-slate-900 rounded p-2 hover:bg-slate-300"
              href={`/edit/${id}`}
            >
              Edit
            </Link>
            <Delete id={id} handleDelete={handleDelete} />
          </div>
        </div>
        <h3 className="text-1xl flex">{content}</h3>
      </div>
    </>
  );
}
