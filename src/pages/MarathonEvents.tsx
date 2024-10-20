import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";

const marathons = [
  {
    id: "city-marathon-2024",
    title: "City Marathon 2024",
    date: "July 21, 2024",
    location: "Central Park, New York City, NY",
    story:
      "The City Marathon 2024 is an annual marathon held in Central Park, New York City. This event brings together thousands of runners from around the world to compete in a scenic and challenging race. The marathon is known for its vibrant atmosphere, enthusiastic spectators, and the stunning backdrop of New York City. Whether you are a seasoned marathoner or a first-time participant, the City Marathon offers an unforgettable experience.",
    imageUrl: "/path/to/marathon1.jpg",
  },
  {
    id: "another-marathon-2024",
    title: "Another Marathon 2024",
    date: "August 15, 2024",
    location: "Golden Gate Park, San Francisco, CA",
    story:
      "Another Marathon 2024 is a spectacular marathon event held in the beautiful Golden Gate Park in San Francisco. Participants will enjoy a challenging course with stunning views of the Golden Gate Bridge and the Pacific Ocean. This event is perfect for both competitive runners and casual participants looking for a memorable experience.",
    imageUrl: "/path/to/marathon2.jpg",
  },
  // Add more marathon events here
];

const MarathonEvent: React.FC = () => {
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
      <Box textAlign="center" my={4}>
        <img
          src={marathon.imageUrl}
          alt={marathon.title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Typography variant="h6" component="h2" mt={2}>
          Date: {marathon.date}
        </Typography>
        <Typography variant="body1" mt={2}>
          Location: {marathon.location}
        </Typography>
        <Typography variant="body1" mt={4}>
          {marathon.story}
        </Typography>
      </Box>
    </Container>
  );
};

export default MarathonEvent;
