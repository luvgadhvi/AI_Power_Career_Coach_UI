import React from "react";
import { Box, Typography, CircularProgress, List, ListItem, ListItemText, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const AnalysisPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { skillMatch, missingSkills, suggestions } = location.state; // Get data from the navigate state

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
        Based on Your Resume & Job Description
      </Typography>

      {/* Skill Match Visualization */}
      <Box sx={{ position: "relative", display: "inline-flex", marginBottom: "40px" }}>
        <CircularProgress
          variant="determinate"
          value={skillMatch}
          size={150}
          thickness={4}
          sx={{ color: skillMatch >= 75 ? "green" : skillMatch >= 50 ? "orange" : "red" }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            {skillMatch}%
          </Typography>
        </Box>
      </Box>

      {/* Feedback Section */}
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Missing Skills:
      </Typography>
      <List>
        {missingSkills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h5" sx={{ marginTop: "20px", marginBottom: "20px" }}>
        Suggestions:
      </Typography>
      <List>
        {suggestions.map((suggestion, index) => (
          <ListItem key={index}>
            <ListItemText primary={suggestion} />
          </ListItem>
        ))}
      </List>

      {/* Back Button */}
      <Box sx={{ marginTop: "30px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            padding: "10px 20px",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/career-coach")} // Navigate back to Career Coach page
        >
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default AnalysisPage;
