import apiClient from "@/lib/apiClient";
import React, { useState } from "react";
import Link from "next/link";

const Diary = () => {
  const [postText, setPostText] = useState<string>("");
  // const [latestPosts, setLatestPosts] = useState<PostType[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const newPost = await apiClient.post("/posts/post", {
        content: postText,
      });
      // setLatestPosts((prevPosts) => [newPost.data, ...prevPosts]);
      setPostText("");
    } catch (err) {
      alert("ログインしてください");
    }
  };

  return (
    <div>
      <h1 className="text-center text-gray-700 text-4xl mt-16">今日の日記</h1>
      <form onSubmit={handleSubmit} className="text-center mx-20 mt-10">
        <textarea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setPostText(e.target.value)
          }
          value={postText}
          className="flex flex-col px-20 py-40 w-full rounded-lg border border-blue-500"
        ></textarea>
        <button
          type="submit"
          className="absolute bottom-40 right-40 px-4 py-4 rounded-2xl text-white bg-blue-500 hover:bg-blue-600 border  border-spacing-2 border-blue-500"
        >
          保存する
        </button>
        <Link href={"/diaries"}>
          <button className="absolute bottom-40 left-40 px-4 py-4 rounded-2xl text-white bg-blue-500 hover:bg-blue-600 border  border-spacing-2 border-blue-500">
            日記一覧へ
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Diary;
