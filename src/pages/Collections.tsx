import React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Collection: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Collection
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        minHeight="60vh"
        py={4}
        bgcolor="#424242"
        color="white"
        sx={{ padding: 2, borderRadius: 1 }}
      >
        <List>
          <ListItem>
            <Link href="/books" color="inherit">
              <ListItemText primary="Books" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/quotes" color="inherit">
              <ListItemText primary="Quotes" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/stories" color="inherit">
              <ListItemText primary="Stories" />
            </Link>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Collection;
