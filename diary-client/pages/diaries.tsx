import apiClient from "@/lib/apiClient";
import React, { useEffect, useState } from "react";
import { PostType } from "@/types";

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
        <li className="text-2xl bg-gray-400 mt-8">
          <a href="/diary">4/19</a>
        </li>
        <li className="text-2xl bg-gray-400 mt-8">
          <a href="/diary">4/18</a>
        </li>
        <li className="text-2xl bg-gray-400 mt-8">
          <a href="/diary">4/17</a>
        </li>
      </ul>

      <button className="absolute bottom-40 right-40 px-4 py-4 rounded-2xl text-white bg-blue-500 hover:bg-blue-600 border  border-spacing-2 border-blue-500">
        日記を書く＋
      </button>
    </div>
  );
}
