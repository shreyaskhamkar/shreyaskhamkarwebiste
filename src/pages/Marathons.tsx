import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import tu35Image from "../assets/Marathons/TataUltra35Challenge/TU35-8.jpg";
import sangliImage from "../assets/Marathons/SangliMarathon/SNGL00202.jpg";
import kolhapurLokmatImg from "../assets/Marathons/KolhapurLokmat2024/KL0021.jpg";
// import KolhapurRaggudian from "../assets/Marathons/KolhapurRuggdianMarathon2024/KRM001.jpeg";

const marathonEvents = [
  {
    id: "kolhapurLokmatMarathon2024",
    title: "Kolhapur Lokmat Marathon 2024",
    image: kolhapurLokmatImg,
  },
  {
    id: "KolhapurRuggdianMarathon2024",
    title: "Kolhapur Ruggdian Marathon 2024",
    image: kolhapurLokmatImg,
  },
  {
    id: "SangliMarathon2024",
    title: "Sangli Marathon 2024",
    image: sangliImage,
  },
  {
    id: "SataraHillMarathon2024",
    title: "Satara Hill Marathon 2024",
    image: sangliImage,
  },
  {
    id: "TataUltraMarathon2025",
    title: "Tata Ultra Marathon 2025",
    image: tu35Image,
  },
];

const Marathons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} padding={2}>
      {marathonEvents.map((event) => (
        <Grid item xs={12} sm={6} md={4} key={event.id}>
          <Card>
            <CardActionArea onClick={() => navigate(`/marathons/${event.id}`)}>
              <CardMedia
                component="img"
                height="200"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Marathons;
