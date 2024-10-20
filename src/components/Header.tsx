import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Container,
  Avatar,
} from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container>
        <Toolbar disableGutters>
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Avatar sx={{ bgcolor: "primary.main", marginRight: 1 }}>SK</Avatar>
            <Typography variant="h6" component="div">
              Shreyas Khamkar
            </Typography>
          </Box>
          <Box>
            <Link href="/" color="inherit" sx={{ margin: 2 }}>
              Home
            </Link>
            <Link href="/blogs" color="inherit" sx={{ margin: 2 }}>
              Blog
            </Link>
            <Link href="/devlog" color="inherit" sx={{ margin: 2 }}>
              Dev Log
            </Link>
            <Link href="/collection" color="inherit" sx={{ margin: 2 }}>
              Collection
            </Link>
            <Link href="/marathons" color="inherit" sx={{ margin: 2 }}>
              Marathon
            </Link>
            <Link href="/about" color="inherit" sx={{ margin: 2 }}>
              About
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
