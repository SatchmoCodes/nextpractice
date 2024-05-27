import Inputs from "@/app/components/Inputs";
import { prisma } from "@/app/db";
import { redirect } from "next/navigation";

async function getPost(id: string) {
  return prisma.posts.findUnique({ where: { id } });
}

async function editPost(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  const content = data.get("content")?.valueOf();
  console.log("content", content);
  const id = data.get("id")?.valueOf();
  console.log("id", id);
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }
  if (typeof content !== "string" || content.length === 0) {
    console.log("content", content);
    throw new Error("Invalid Content");
  }
  if (typeof id !== "string" || id.length === 0) {
    throw new Error("Invalid id");
  }
  await prisma.posts.update({
    where: { id },
    data: { title: title, content: content },
  });
  redirect("/");
}

export default async function Edit({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  if (!post) {
    return <h2>no posts</h2>;
  }
  console.log(post);

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-slate-100 text-4xl my-4">Create a Post</h1>

      <Inputs
        id={params.id}
        title={post.title}
        content={post.content}
        editPost={editPost}
      />
    </div>
  );
}
