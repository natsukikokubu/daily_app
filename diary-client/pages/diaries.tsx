import apiClient from "@/lib/apiClient";
import React, { useEffect, useState } from "react";
import { PostType } from "@/types";
import Link from "next/link";

export default function Diaries() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = async () => {
    const response = await apiClient.get<{ diaries: PostType[] }>("/posts");
    setPosts(response.data.diaries);
  };

  console.log(posts);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="w-hull h-screen relative ">
      <h1 className="text-center text-gray-700 text-4xl mt-16">日記一覧</h1>
      <ul className="flex  flex-col text-center text-white mx-40 ">
        {posts.map((post, index) => (
          <li key={index} className="rounded-lg text-2xl bg-blue-400 mt-8">
            {post.createdAt}
          </li>
        ))}
      </ul>
      <Link href={"/diary"}>
        <button className="absolute bottom-40 right-40 px-4 py-4 rounded-2xl text-white bg-blue-500 hover:bg-blue-600 border  border-spacing-2 border-blue-500">
          日記を書く＋
        </button>
      </Link>
    </div>
  );
}
