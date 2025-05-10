import React from "react";
import Container from "@mui/material/Container";
import { Box, Stack } from "@mui/material";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import Posts from "../components/Posts";
import Friends from "../components/Friends";

const HomePage = () => {
  return (
    <>
        <Box>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar></SideBar>
            <Feed></Feed>
            <RightBar></RightBar>
          </Stack>
        </Box>
    </>
  );
};

export default HomePage;
