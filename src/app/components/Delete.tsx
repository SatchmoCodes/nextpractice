"use client";

type Delete = {
  id: string;
  handleDelete: (id: string) => void;
};

import React from "react";

export default function Delete({ id, handleDelete }: Delete) {
  return (
    <button
      className="border border-slate-900 rounded p-2 hover:bg-slate-300"
      onClick={() => handleDelete(id)}
    >
      Delete
    </button>
  );
}
