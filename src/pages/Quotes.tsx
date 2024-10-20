import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Quotes: React.FC = () => {
  const quotes = [
    {
      src: "src/assets/images/quote1.jpg",
      alt: "Quote 1",
      text: "This is the first quote.",
    },
    {
      src: "src/assets/images/quote2.jpg",
      alt: "Quote 2",
      text: "This is the second quote.",
    },
    {
      src: "src/assets/images/quote3.jpg",
      alt: "Quote 3",
      text: "This is the third quote.",
    },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Quotes
      </Typography>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {quotes.map((quote, index) => (
          <Box key={index} textAlign="center" flexBasis="30%" my={2}>
            <img
              src={quote.src}
              alt={quote.alt}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography variant="body1" mt={2}>
              {quote.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Quotes;
