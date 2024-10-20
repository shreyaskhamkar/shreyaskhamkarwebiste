import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";

const Books: React.FC = () => {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "A novel set in the Jazz Age that tells the story of the enigmatic Jay Gatsby and his unrequited love for Daisy Buchanan.",
      url: "https://www.goodreads.com/book/show/4671.The_Great_Gatsby",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "A novel about the serious issues of rape and racial inequality, told from the perspective of young Scout Finch in the Deep South.",
      url: "https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird",
    },
    {
      title: "1984",
      author: "George Orwell",
      description:
        "A dystopian novel set in a totalitarian society ruled by Big Brother, exploring themes of surveillance, censorship, and individuality.",
      url: "https://www.goodreads.com/book/show/40961427-1984",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "A romantic novel that also critiques the British landed gentry at the end of the 18th century, focusing on issues of marriage, money, and love.",
      url: "https://www.goodreads.com/book/show/1885.Pride_and_Prejudice",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description:
        "A novel that delves into the complex issues of identity, belonging, loss, and connection through the eyes of the rebellious Holden Caulfield.",
      url: "https://www.goodreads.com/book/show/5107.The_Catcher_in_the_Rye",
    },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Books
      </Typography>
      <List>
        {books.map((book, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={
                <Link href={book.url} target="_blank" rel="noopener noreferrer">
                  {book.title}
                </Link>
              }
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {book.author}
                  </Typography>
                  {" — " + book.description}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Books;
