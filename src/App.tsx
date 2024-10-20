import React from "react";
import { CssBaseline, Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Collection from "./pages/Collections";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import Quotes from "./pages/Quotes";
import Marathons from "./pages/Marathons";
import MarathonEventPhotos from "./pages/MarathonEventPhotos";

const App: React.FC = () => (
  <Router>
    <CssBaseline />
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/books" element={<Books />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/marathons/:eventId" element={<MarathonEventPhotos />} />
          <Route path="/marathons" element={<Marathons />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  </Router>
);

export default App;
