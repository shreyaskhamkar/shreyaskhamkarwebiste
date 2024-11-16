import React from "react";
import { Container, Typography, Box, Avatar, Link } from "@mui/material";
import avatarImage from "../assets/Marathons/SangliMarathon/SNGL01949.jpg";
const Home: React.FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Avatar
        alt="Shreyas Khamkar"
        src={avatarImage}
        sx={{
          width: { xs: 150, sm: 200, md: 250 }, // Responsive avatar size
          height: { xs: 150, sm: 200, md: 250 },
          marginBottom: 2,
        }}
      />
      <Typography variant="h4" component="h1" gutterBottom>
        Hello! I’m Shreyas.
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to my website! I’m currently working as a software developer. I
        have a passion for building scalable and efficient software solutions.
      </Typography>
      <Typography variant="body1" paragraph>
        In my role as a software developer, I specialize in full-stack
        development, working with technologies like React, Node.js, C#,
        PostgreSQL, Windows, and web-based technologies. I enjoy solving complex
        problems and continuously learning new skills to improve my craft.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Link
          href="mailto:shreyaskhamkar96@gmail.com"
          color="inherit"
          sx={{ mx: 1, textDecoration: "none", fontWeight: "bold" }}
        >
          Email
        </Link>
        <Link
          href="https://github.com/shreyaskhamkar"
          color="inherit"
          sx={{ mx: 1, textDecoration: "none", fontWeight: "bold" }}
        >
          GitHub
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
