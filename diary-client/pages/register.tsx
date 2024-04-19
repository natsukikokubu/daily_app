"use client";
import { useCallback, useState } from "react";
import Form from "../form";
import { useRouter } from "next/navigation";
import apiClient from "../src/lib/apiClient";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  // ログインモードの時true
  const [isLogin, setIsLogin] = useState(false);

  const toggleIsLogin = useCallback(() => {
    setIsLogin((prev) => !prev);
  }, []);

  const handleClick = async (e: any) => {
    e.preventDefault();

    try {
      await apiClient.post("/auth/register", {
        username,
        email,
        password,
      });
      router.push("/login");
    } catch (err) {
      alert("入力内容が正しくありません。");
    }
  };

  return (
    <div className="relative h-full w-ful">
      <div className="bg-slate-50 w-full h-full lg:opacity-50">
        <div className="flex justify-center">
          <div className="bg-cyan-500 bg-opacity-90 px-14 py-14 self-center lg:w-2/5 lg:max-w-md rounded-md">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {isLogin ? "ログイン" : "新規登録"}
            </h2>
            <div className="flex flex-col gap-4">
              {!isLogin && (
                <Form
                  id="name"
                  type="name"
                  label="Name"
                  value={username}
                  autocomplete="name"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setUsername(event.target.value)
                  }
                />
              )}
              <Form
                id="email"
                type="email"
                label="Email"
                value={email}
                autocomplete="email"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.target.value)
                }
              />
              <Form
                id="password"
                type="password"
                label="Password"
                value={password}
                autocomplete="off"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(event.target.value)
                }
              />
            </div>
            <button
              onClick={handleClick}
              className="bg-blue-800 py-3 text-white rounded-md w-full mt-10 hover:bg-blue-600 transition"
            >
              {isLogin ? "ログイン" : "新規登録"}
            </button>
            <p className="text-slate-950 mt-7">
              {isLogin ? "初めてご利用する方" : "すでにアカウントをお持ちの方"}
              <span
                onClick={toggleIsLogin}
                className="text-blue-800  ml-1 hover:underline cursor-pointer"
              >
                {!isLogin ? "ログイン" : "新規登録"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
