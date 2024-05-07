const express = require("express");
const router = require("express").Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//投稿API
router.post("/post", async (req, res) => {
  const { content } = req.body;

  console.log(content);
  if (!content) {
    return res.status(400).json({ message: "投稿内容がありません" });
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        content,
        authorId: 29,
      },
    });

    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "サーバーエラーエラーです。",
    });
  }
});

//最新投稿用API
router.get("", async (req, res) => {
  try {
    const diaries = await prisma.post.findMany({});
    res.status(200).json({ diaries });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "サーバーエラーです。" });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
