import { redirect } from "next/navigation";
import { prisma } from "../db";

async function createPost(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  const content = data.get("content")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }
  if (typeof content !== "string" || content.length === 0) {
    throw new Error("Invalid content");
  }
  await prisma.posts.create({ data: { title: title, content: content } });
  redirect("/");
}

export default function New() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-slate-100 text-4xl my-4">Create a Post</h1>
      <form className="flex flex-col items-center" action={createPost}>
        <label className="text-slate-100 mr-2 text-2xl my-2" htmlFor="title">
          Title
        </label>
        <input className="p-3 text-2xl" id="title" name="title" type="text" />

        <label className="text-slate-100 mr-2 text-2xl my-2" htmlFor="content">
          Content
        </label>
        <textarea
          className="p-4 text-2xl"
          rows={8}
          cols={24}
          id="content"
          name="content"
        ></textarea>
        <button
          className="mt-4 text-slate-100 border border-slate-100 rounded p-2 hover:bg-slate-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
