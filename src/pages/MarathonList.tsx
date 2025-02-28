import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const marathons = [
  {
    id: "SangliMarathon2024",
    title: "Sangli Marathon 2024",
    imageUrl: "/src/assets/Marathons/SangliMarathon/SNGL00202.jpg", // Representative image
  },
  {
    id: "kolhapurLokmatMarathon2024",
    title: "Kolhapur Marathon 2024",
    imageUrl: "/src/assets/Marathons/KolhapurMarathon/KLP001.jpg",
  },
  // Add more marathons
];

const MarathonList: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Marathon Events
      </Typography>
      <Grid container spacing={3}>
        {marathons.map((marathon) => (
          <Grid item xs={12} sm={6} md={4} key={marathon.id}>
            <Link
              to={`/marathon/${marathon.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={marathon.imageUrl}
                  alt={marathon.title}
                />
                <CardContent>
                  <Typography variant="h6">{marathon.title}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MarathonList;
