import { AccountCircle, Article, Groups, Home, Login, Logout, Person } from "@mui/icons-material";
import { Box, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import StoreIcon from "@mui/icons-material/Store";
import React from "react";

const SideBar = () => {
  return (
    <>
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position={"fixed"}>
          <List>
            {/* Home */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { sm: "none", md: "block" } }}
                  primary="HomePage"
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            {/* Profile */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { sm: "none", md: "block" } }}
                  primary="Profile"
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            {/* Groups */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <Groups />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { sm: "none", md: "block" } }}
                  primary="Groups"
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            {/* Pages */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { sm: "none", md: "block" } }}
                  primary="Pages"
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            {/* Friends */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { sm: "none", md: "block" } }}
                  primary="Friends"
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            {/* Maretplace */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { sm: "none", md: "block" } }}
                  primary="Marketplace"
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            {/* Help */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { sm: "none", md: "block" } }}
                  primary="Help"
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            {/* Setting */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { sm: "none", md: "block" } }}
                  primary="Settings"
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            {/* Setting */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { sm: "none", md: "block" } }}
                  primary="Logout"
                ></ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
