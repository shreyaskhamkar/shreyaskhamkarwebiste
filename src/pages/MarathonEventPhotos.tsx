import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  CardMedia,
  Card,
  CardContent,
} from "@mui/material";

import KM001 from "../assets/Marathons/KolhapurLokmat2024/KL001.jpg";
import KM002 from "../assets/Marathons/KolhapurLokmat2024/KL002.jpg";
import KM003 from "../assets/Marathons/KolhapurLokmat2024/KL003.jpg";
import KM004 from "../assets/Marathons/KolhapurLokmat2024/KL004.jpg";
import KM005 from "../assets/Marathons/KolhapurLokmat2024/KL005.jpg";
import KM006 from "../assets/Marathons/KolhapurLokmat2024/KL006.jpg";
import KM007 from "../assets/Marathons/KolhapurLokmat2024/KL007.jpg";
import KM008 from "../assets/Marathons/KolhapurLokmat2024/KL008.jpg";
import KM009 from "../assets/Marathons/KolhapurLokmat2024/KL009.jpg";
import KM010 from "../assets/Marathons/KolhapurLokmat2024/KL0010.jpg";
import KM011 from "../assets/Marathons/KolhapurLokmat2024/KL0011.jpg";
import KM012 from "../assets/Marathons/KolhapurLokmat2024/KL0012.jpg";
import KM013 from "../assets/Marathons/KolhapurLokmat2024/KL0013.jpg";
import KM014 from "../assets/Marathons/KolhapurLokmat2024/KL0014.jpg";
import KM015 from "../assets/Marathons/KolhapurLokmat2024/KL0015.jpg";
import KM016 from "../assets/Marathons/KolhapurLokmat2024/KL0016.jpg";
import KM017 from "../assets/Marathons/KolhapurLokmat2024/KL0017.jpg";
import KM018 from "../assets/Marathons/KolhapurLokmat2024/KL0018.jpg";
import KM019 from "../assets/Marathons/KolhapurLokmat2024/KL0019.jpg";
import KM020 from "../assets/Marathons/KolhapurLokmat2024/KL0020.jpg";
import KM021 from "../assets/Marathons/KolhapurLokmat2024/KL0021.jpg";
import KM022 from "../assets/Marathons/KolhapurLokmat2024/KL0022.jpg";

import SM001 from "../assets/Marathons/SangliMarathon2024/SNGL001.jpg";
import SM002 from "../assets/Marathons/SangliMarathon2024/SNGL002.jpg";
import SM003 from "../assets/Marathons/SangliMarathon2024/SNGL003.jpg";
import SM004 from "../assets/Marathons/SangliMarathon2024/SNGL004.jpg";

import RM001 from "../assets/Marathons/KolhapurRuggdianMarathon2024/KRM001.jpeg";
import RM002 from "../assets/Marathons/KolhapurRuggdianMarathon2024/KRM002.jpeg";
import RM003 from "../assets/Marathons/KolhapurRuggdianMarathon2024/KRM003.jpeg";
import RM004 from "../assets/Marathons/KolhapurRuggdianMarathon2024/KRM004.jpeg";

import SHM001 from "../assets/Marathons/SataraHIllMarathon/image-1.jpg";
import SHM002 from "../assets/Marathons/SataraHIllMarathon/image-1.jpg";
import SHM003 from "../assets/Marathons/SataraHIllMarathon/image-12.jpg";
import SHM004 from "../assets/Marathons/SataraHIllMarathon/image-13.jpg";
import SHM005 from "../assets/Marathons/SataraHIllMarathon/image-13.jpg";
import SHM006 from "../assets/Marathons/SataraHIllMarathon/image-15.jpg";
import SHM007 from "../assets/Marathons/SataraHIllMarathon/image-18.jpg";
import SHM008 from "../assets/Marathons/SataraHIllMarathon/image-19.jpg";
import SHM009 from "../assets/Marathons/SataraHIllMarathon/image-21.jpg";

const marathons = [
  {
    id: "SangliMarathon2024",
    title: "Sangli Marathon 2024",
    photos: [SM001, SM002, SM003, SM004],
  },
  {
    id: "KolhapurRuggdianMarathon2024",
    title: "Kolhapur Ruggdian Marathon 2024",
    photos: [RM001, RM002, RM003, RM004],
  },

  {
    id: "KolhapurRuggdianMarathon2024",
    title: "Kolhapur Ruggdian Marathon 2024",
    photos: [RM001, RM002, RM003, RM004],
  },
  {
    id: "kolhapurLokmatMarathon2024",
    title: "Kolhapur Lokmat Marathon 2024",
    photos: [
      KM001,
      KM002,
      KM003,
      KM004,
      KM005,
      KM006,
      KM007,
      KM008,
      KM009,
      KM010,
      KM011,
      KM012,
      KM013,
      KM014,
      KM015,
      KM016,
      KM017,
      KM018,
      KM019,
      KM020,
      KM021,
      KM022,
    ],
  },
  {
    id: "SataraHillMarathon2024",
    title: "Satara Hill Marathon 2024",
    photos: [
      SHM001,
      SHM002,
      SHM003,
      SHM004,
      SHM004,
      SHM005,
      SHM006,
      SHM007,
      SHM008,
      SHM008,
      SHM009,
    ],
  },
];

const MarathonEventPhotos: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const marathon = marathons.find((m) => m.id === eventId);

  if (!marathon) {
    return (
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Marathon Event Not Found
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {marathon.title}
      </Typography>
      <Grid container spacing={3}>
        {marathon.photos.map((photo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", height: 400, objectFit: "cover" }}
                image={photo}
                alt={`${marathon.title} photo ${index + 1}`}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {`Photo ${index + 1}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MarathonEventPhotos;
