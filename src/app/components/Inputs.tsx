"use client";
import { useState } from "react";

type Input = {
  id: string;
  title: string;
  content: string;
  editPost: (data: FormData) => Promise<void>;
};

export default function Input({ id, title, content, editPost }: Input) {
  const [titleText, setTitleText] = useState(title);
  const [contentText, setContentText] = useState(content);

  console.log("id here", id);

  return (
    // <>
    //   <label className="text-slate-100 mr-2 text-2xl my-2" htmlFor="title">
    //     Title
    //   </label>
    //   <input
    //     className="p-3 text-2xl"
    //     id="title"
    //     name="title"
    //     type="text"
    //     value={titleText}
    //     onChange={(e) => setTitleText(e.target.value)}
    //   />

    //   <label className="text-slate-100 mr-2 text-2xl my-2" htmlFor="content">
    //     Content
    //   </label>
    //   <textarea
    //     className="p-4 text-2xl"
    //     rows={8}
    //     cols={24}
    //     id="content"
    //     name="content"
    //     value={contentText}
    //     onChange={(e) => setContentText(e.target.value)}
    //   ></textarea>
    //   <button
    //     className="mt-4 text-slate-100 border border-slate-100 rounded p-2 hover:bg-slate-700"
    //     onClick={() => editPost(id, titleText, contentText)}
    //     type="submit"
    //   >
    //     Submit
    //   </button>
    // </>
    <form className="flex flex-col items-center" action={editPost}>
      <input type="hidden" value={id} name="id" />
      <label className="text-slate-100 mr-2 text-2xl my-2" htmlFor="title">
        Title
      </label>
      <input
        className="p-3 text-2xl"
        id="title"
        name="title"
        type="text"
        value={titleText}
        onChange={(e) => setTitleText(e.target.value)}
      />

      <label className="text-slate-100 mr-2 text-2xl my-2" htmlFor="content">
        Content
      </label>
      <textarea
        className="p-4 text-2xl"
        rows={8}
        cols={24}
        id="content"
        name="content"
        value={contentText}
        onChange={(e) => setContentText(e.target.value)}
      ></textarea>
      <button
        className="mt-4 text-slate-100 border border-slate-100 rounded p-2 hover:bg-slate-700"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
