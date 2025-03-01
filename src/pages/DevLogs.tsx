import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";

/**
 * Minimal interface for GitHub events.
 * You can expand these fields as needed.
 */
interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: {
    name: string;
  };
}

const DevLog: React.FC = () => {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace "shreyaskhamkar" with any GitHub username you want
    fetch("https://api.github.com/users/shreyaskhamkar/events/public")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching GitHub events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Dev Log
      </Typography>
      {events.length === 0 ? (
        <Typography>No public events found.</Typography>
      ) : (
        <List>
          {events.map((event) => (
            <ListItem key={event.id} divider>
              <ListItemText
                primary={`${event.type} - ${event.repo.name}`}
                secondary={`Date: ${new Date(
                  event.created_at
                ).toLocaleString()}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default DevLog;
