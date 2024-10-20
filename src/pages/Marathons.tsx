import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
  Divider,
  Box,
} from "@mui/material";

const marathons = [
  {
    year: 2024,
    events: [
      {
        id: "sangli-marathon-2024",
        title: "Sangli Marathon 2024",
        date: "July 21, 2024",
        location: "Central Park, New York City, NY",
        description:
          "The City Marathon 2024 is an annual marathon held in Central Park, New York City. This event brings together thousands of runners from around the world to compete in a scenic and challenging race.",
        url: "/marathons/city-marathon-2024",
        imageUrl: "src/assets/Marathons/SangliMarathon/SNGL01949.jpg", // Update the image path as needed
      },
      {
        id: "another-marathon-2024",
        title: "Another Marathon 2024",
        date: "August 15, 2024",
        location: "Golden Gate Park, San Francisco, CA",
        description:
          "Another Marathon 2024 is a spectacular marathon event held in the beautiful Golden Gate Park in San Francisco. Participants will enjoy a challenging course with stunning views of the Golden Gate Bridge and the Pacific Ocean.",
        url: "/marathons/another-marathon-2024",
        imageUrl: "src/assets/Marathons/another-marathon-2024.jpg", // Update the image path as needed
      },
    ],
  },
  {
    year: 2023,
    events: [
      {
        id: "city-marathon-2023",
        title: "City Marathon 2023",
        date: "July 21, 2023",
        location: "Central Park, New York City, NY",
        description:
          "The City Marathon 2023 is an annual marathon held in Central Park, New York City. This event brings together thousands of runners from around the world to compete in a scenic and challenging race.",
        url: "/marathons/city-marathon-2023",
        imageUrl:
          "src/assets/Marathons/Lokmat-Maha-Marathon-K21021-5f44c2e98a2a49b58ee579b065de0c4d.jpg", // Update the image path as needed
      },
      {
        id: "another-marathon-2023",
        title: "Another Marathon 2023",
        date: "August 15, 2023",
        location: "Golden Gate Park, San Francisco, CA",
        description:
          "Another Marathon 2023 is a spectacular marathon event held in the beautiful Golden Gate Park in San Francisco. Participants will enjoy a challenging course with stunning views of the Golden Gate Bridge and the Pacific Ocean.",
        url: "/marathons/another-marathon-2023",
        imageUrl: "src/assets/Marathons/another-marathon-2023.jpg", // Update the image path as needed
      },
    ],
  },
  // Add more years and events here
];

const Marathons: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Marathon Events
      </Typography>
      {marathons.map((yearGroup, yearIndex) => (
        <div key={yearIndex}>
          <Typography variant="h5" component="h2" gutterBottom>
            {yearGroup.year}
          </Typography>
          <List>
            {yearGroup.events.map((marathon, index) => (
              <ListItem key={index} alignItems="flex-start">
                <Box display="flex" flexDirection="row" alignItems="flex-start">
                  <Box
                    component="img"
                    sx={{
                      height: 100,
                      width: 150,
                      marginRight: 2,
                      borderRadius: 1,
                    }}
                    alt={marathon.title}
                    src={marathon.imageUrl}
                  />
                  <ListItemText
                    primary={
                      <Link href={marathon.url} color="inherit">
                        {marathon.title}
                      </Link>
                    }
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Date: {marathon.date}
                        </Typography>
                        <br />
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Location: {marathon.location}
                        </Typography>
                        <br />
                        {marathon.description}
                      </>
                    }
                  />
                </Box>
              </ListItem>
            ))}
          </List>
          {yearIndex < marathons.length - 1 && <Divider />}
        </div>
      ))}
    </Container>
  );
};

export default Marathons;
