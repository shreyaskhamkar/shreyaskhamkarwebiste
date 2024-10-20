import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: "center" }}>
      <Container>
        <Typography variant="body2" color="textSecondary">
          © 2024 Shreyas Khamkar
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
