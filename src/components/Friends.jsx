import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {  Typography } from "@mui/material";
import React from "react";


const Friends = ({ friends }) => {
  return (
    <>
      {Array.isArray(friends) &&
        friends.map((friend) => (
          <List
            key={friend.id}
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={friend.userName} src={friend.userImage} />
              </ListItemAvatar>
              <ListItemText
                primary={friend.userName}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      {friend.date}
                    </Typography>
                    — {friend.content}
                  </React.Fragment>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />
          </List>
        ))}
    </>
  );
};

export default Friends;
