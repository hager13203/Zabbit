
import Avatar from "@mui/material/Avatar";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Circle, Message } from "@mui/icons-material";
import AvatarGroup from "@mui/material/AvatarGroup";
import Friends from "./Friends";
import { v4 as uuid } from "uuid";


const RightBar = () => {
  const [friends, setFriends] = useState([
    {
      id: uuid(),
      userName: "Eman Alaa",
      userImage:
        "https://i.pinimg.com/736x/71/fe/21/71fe211aadf562ed7360557583660370.jpg",
      date: "May 10, 2025",
      content: " 😭😭 الديدلاين الخميس الجاي مفيش وقت للتفسير",
    },
    {
      id: uuid(),
      userName: "Nourelhuda Ashraf",
      userImage:
        "https://i.pinimg.com/736x/9a/ee/89/9aee8981cea7155ba5ea34f18b51ca4b.jpg",
      date: "May 9, 2025",
      content: " Good Morning Dear , Let's Go to Primoz Pizaa 🍕🍕",
    },
    {
      id: uuid(),
      userName: "iTi Group",
      userImage:"https://desk.zoho.com/portal/api/departments/846630000000006907/logo?orgId=807638512",
      date: "May 9, 2025",
      content: "Schedule Updated ",
    },
    {
      id: uuid(),
      userName: "Nourhan Adel",
      userImage:
        "https://i.pinimg.com/736x/33/9c/01/339c01bb766c016892791baf3e8eebc2.jpg",
      date: "May 9, 2025",
      content: "تمام ظبطي وكلميني",
    },
  ]);
  return (
    <>
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position={"fixed"}>
          {/* Online Friends */}
          <Box display={"flex"} alignItems="center">
            <Circle sx={{ fontSize: 16, color: "green", mr: 1 }} />
            <Typography variant="h6" color="gray" fontWeight={200}>
              Online Friends
            </Typography>
          </Box>
          <AvatarGroup max={4}>
            <Avatar
              alt="Remy Ali"
              src="https://i.pinimg.com/736x/be/b2/b9/beb2b9667934b504724d4c5b989d9e76.jpg"
            />
            <Avatar
              alt="Nada Saeed"
              src="https://i.pinimg.com/736x/a6/ff/9b/a6ff9bc4a4986537c49538e538b99ba0.jpg"
            />
            <Avatar
              alt="Esraa Baker"
              src="https://i.pinimg.com/736x/f5/44/99/f54499154044362f1999722ad7e783d6.jpg"
            />
            <Avatar
              alt="Ali Ahmed"
              src="https://i.pinimg.com/736x/be/b2/b9/beb2b9667934b504724d4c5b989d9e76.jpg"
            />
            <Avatar
              alt="Mohmed Kareem"
              src="https://i.pinimg.com/736x/be/b2/b9/beb2b9667934b504724d4c5b989d9e76.jpg"
            />
          </AvatarGroup>

          {/* Messages */}
          <Box display={"flex"} alignItems="center">
            <Message sx={{ fontSize: 22, color: "gray", mr: 1 }} />
            <Typography variant="h6" color="gray" fontWeight={200}>
              Messages
            </Typography>
          </Box>

          <Friends friends={friends}></Friends>
        </Box>
      </Box>
    </>
  );
};

export default RightBar;
