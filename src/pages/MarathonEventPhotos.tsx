import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Grid } from "@mui/material";

const marathons = [
  {
    id: "sangli-marathon-2024",
    title: "Sangli Marathon 2024",
    photos: [
      "src/assets/Marathons/SangliMarathon/SNGL00202.jpg", // Update the image path as needed
      "src/assets/Marathons/SangliMarathon/SNGL00203.jpg", // Update the image path as needed
      "src/assets/Marathons/SangliMarathon/SNGL00802.jpg", // Update the image path as needed
      "src/assets/Marathons/SangliMarathon/SNGL001949.jpg", // Update the image path as needed

      // Update the image path as needed
      // Add more photos for this event
    ],
  },
  {
    id: "another-marathon-2024",
    title: "Another Marathon 2024",
    photos: [
      "/src/assets/Marathons/another-marathon-2024-1.jpg", // Update the image path as needed
      "/src/assets/Marathons/another-marathon-2024-2.jpg", // Update the image path as needed
      // Add more photos for this event
    ],
  },
  // Add more marathon events with their photos here
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
      <Grid container spacing={2}>
        {marathon.photos.map((photo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 1,
              }}
              src={photo}
              alt={`${marathon.title} photo ${index + 1}`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MarathonEventPhotos;
