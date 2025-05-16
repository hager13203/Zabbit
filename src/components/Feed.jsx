import { Box } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Posts from "./Posts";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: uuid(),
      userName: "Menna Amr",
      userImage:
        "https://i.pinimg.com/736x/33/9c/01/339c01bb766c016892791baf3e8eebc2.jpg",
      date: "May 9, 2025",
      content: " :💜صباح الخير",
      postImage:
        "https://i.pinimg.com/736x/e0/4a/fb/e04afbbb95426d86cb34b31bcf9f1571.jpg",
      likes: 124,
      isLiked: false,
    },
    {
      id: uuid(),
      userName: "Ghada Ahmed",
      userImage:
        "https://i.pinimg.com/736x/f1/92/d6/f192d66e9dad3f99dcd07b47345b25be.jpg",
      date: "May 8, 2025",
      content: "Prrety Little Baby Iam So in love With You 💕💕💕",
      postImage:
        "https://i.pinimg.com/736x/48/1e/59/481e59cf87a367857dfcb3a73c948fa3.jpg",
      likes: 87,
      isLiked: true,
    },
    {
      id: uuid(),
      userName: "Menna Salem",
      userImage:
        "https://i.pinimg.com/736x/7c/a1/b8/7ca1b819118d765889f4e12b22e01640.jpg",
      date: "May 8, 2025",
      content: "Trying out a new pasta recipe 🍝 Anyone wants some?",
      postImage:
        "https://i.pinimg.com/736x/13/21/7a/13217abce651e33dc2c72a22554de8c9.jpg",
      likes: 87,
      isLiked: true,
    },
    {
      id: uuid(),
      userName: "Doaa Mohamed",
      userImage:
        "https://i.pinimg.com/736x/10/17/20/10172063881a9c3f0a957e019f5fd26d.jpg",
      date: "May 8, 2025",
      content: "No Risk No Fun",
      postImage:
        "https://i.pinimg.com/736x/3e/92/ce/3e92cef6fe03a8b7042fb1293434cacc.jpg",
      likes: 87,
      isLiked: true,
    },
    {
      id: uuid(),
      userName: "Doaa Mohamed",
      userImage:
        "https://i.pinimg.com/736x/10/17/20/10172063881a9c3f0a957e019f5fd26d.jpg",
      date: "May 8, 2025",
      content: "Any Review?",
      postImage:
        "https://i.pinimg.com/736x/b6/b7/7c/b6b77c85fe41b876249bed2da82cbb04.jpg",
      likes: 87,
      isLiked: true,
    },
    {
      id: uuid(),

      userName: "Khaled Mohamed",
      userImage:
        "https://i.pinimg.com/736x/45/34/6d/45346dbc94aa983975144eb174f7318e.jpg",
      date: "May 7, 2025",
      content: "Nature walks are the best therapy 🌿",
      postImage:
        "https://i.pinimg.com/736x/f5/32/dd/f532dd7661220588b9b07ec0ba6d192b.jpg",
      likes: 142,
      isLiked: false,
    },
    {
      id: uuid(),

      userName: "Mona Khaled",
      userImage:
        "https://i.pinimg.com/736x/5c/cb/ea/5ccbea70396f0267b15943adfb5ba406.jpg",
      date: "May 7, 2025",
      content: "Nature walks are the best therapy 🌿",
      postImage:
        "https://i.pinimg.com/736x/97/78/d6/9778d68bcf263beee97551793e93745d.jpg",
      likes: 142,
      isLiked: false,
    },
  ]);

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <>
      <Box flex={4} p={2}>
        <Posts posts={posts} onLike={handleLike}></Posts>
      </Box>
    </>
  );
};

export default Feed;
