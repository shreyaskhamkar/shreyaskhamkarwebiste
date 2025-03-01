import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link as MuiLink,
  Container,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";
const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blogs" },
    { name: "Dev Log", href: "/logs" },
    { name: "Collection", href: "/collection" },
    { name: "Marathon", href: "/marathons" },
    { name: "About", href: "/about" },
  ];

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
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navLinks.map((link) => (
              <MuiLink
                key={link.name}
                component={RouterLink}
                to={link.href}
                color="inherit"
                sx={{
                  margin: 2,
                  textDecoration:
                    location.pathname === link.href ? "underline" : "none",
                }}
              >
                {link.name}
              </MuiLink>
            ))}
          </Box>
          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <List>
                {navLinks.map((link) => (
                  <ListItem
                    button
                    key={link.name}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={link.name} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
