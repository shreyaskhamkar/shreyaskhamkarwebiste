import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

interface BlogPost {
  src: string;
  alt: string;
  title: string;
  excerpt: string;
}

const Blog: React.FC = () => {
  const blogs: BlogPost[] = [
    {
      src: "src/assets/images/blog1.jpg",
      alt: "Blog 1",
      title: "Understanding C# Basics",
      excerpt:
        "This blog post covers the basic concepts of C#, including syntax, variables, and more.",
    },
    {
      src: "src/assets/images/blog2.jpg",
      alt: "Blog 2",
      title: "Object-Oriented Programming in C#",
      excerpt:
        "Learn how to implement object-oriented principles like inheritance and encapsulation in C#.",
    },
    {
      src: "src/assets/images/blog3.jpg",
      alt: "Blog 3",
      title: "Sorting and Searching Algorithms in .NET",
      excerpt:
        "An introduction to sorting algorithms and how to apply them in .NET using C#.",
    },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Blogs
      </Typography>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {blogs.map((blog, index) => (
          <Box key={index} textAlign="center" flexBasis="30%" my={2}>
            <img
              src={blog.src}
              alt={blog.alt}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography variant="h6" mt={2}>
              {blog.title}
            </Typography>
            <Typography variant="body1" mt={1} mb={2}>
              {blog.excerpt}
            </Typography>
            <Button variant="contained" color="primary">
              Read More
            </Button>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Blog;
