import React from "react";
import { Container, Typography, Box, Avatar, Link } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        minHeight="100vh"
        py={4}
      >
        <Avatar
          alt="shreyas khamkar"
          src="src/assets/Marathons/SangliMarathon/SNGL01949.jpg"
          sx={{ width: 250, height: 250, marginBottom: 2 }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Hello! I’m Shreyas.
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to my website! I’m currently working as a software developer.
          I have a passion for building scalable and efficient software
          solutions.
        </Typography>
        <Typography variant="body1" paragraph>
          In my role as a software developer, I specialize in full-stack
          development, working with technologies like React, Node.js, C#,
          PostgreSQL, Windows, and Web-based technologies . I enjoy solving
          complex problems and continuously learning new skills to improve my
          craft.
        </Typography>
        <Typography variant="body1">
          <Link
            href="mailto:shreyaskhamkar96@gmail.com"
            color="inherit"
            sx={{ margin: 1 }}
          >
            Email
          </Link>
          <Link
            href="https://github.com/shreyaskhamkar"
            color="inherit"
            sx={{ margin: 1 }}
          >
            Github
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
