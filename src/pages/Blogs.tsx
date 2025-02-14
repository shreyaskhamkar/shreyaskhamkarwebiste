import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";

interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  content: string;
  author: string;
  // Additional fields if needed
}

const MediumArticles: React.FC = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetch the RSS feed converted to JSON using rss2json
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shreyaskhamkar"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // data.items contains the list of articles
        setArticles(data.items);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch articles");
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) {
    return <Typography>Loading articles...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        My Medium Articles
      </Typography>
      {articles.map((article, index) => (
        <Box key={index} mb={4} p={2} boxShadow={1} borderRadius={2}>
          {article.thumbnail && (
            <img
              src={article.thumbnail}
              alt={article.title}
              style={{ maxWidth: "100%", borderRadius: "4px" }}
            />
          )}
          <Typography variant="h6" mt={2}>
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {new Date(article.pubDate).toLocaleDateString()}
          </Typography>
          <Typography variant="body1" mt={1}>
            {article.content.replace(/<[^>]+>/g, "").substring(0, 200)}
            ...
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 1 }}
          >
            Read More
          </Button>
        </Box>
      ))}
    </Container>
  );
};

export default MediumArticles;
