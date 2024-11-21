import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

const CareerCoach = () => {
  const [files, setFiles] = useState([]);
  const [jobDescription, setJobDescription] = useState(""); // Text for job description
  const navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => setFiles(acceptedFiles),
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
  });

  const handleAnalyze = () => {
    if (files.length === 0 || !jobDescription) {
      alert("Please upload a resume and provide a job description.");
      return;
    }

    // Simulated API Response
    const staticData = {
      skillMatch: 80,
      missingSkills: ["Python", "Data Analysis", "Leadership"],
      suggestions: [
        "Add Python to your resume as it's required in the job description.",
        "Consider taking a data analysis course.",
        "Highlight leadership examples in your resume.",
      ],
    };

    // Navigate to the AnalysisPage with static data
    navigate("/analysis", { state: staticData });
  };

  return (
    <Box sx={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Resume Upload Section */}
      <Box sx={{ margin: "40px auto", maxWidth: "500px" }}>
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed #1976d2",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#e3f2fd",
          }}
        >
          {/* Input for file upload */}
          <input {...getInputProps()} />
          <Typography variant="h6">Click or Drag & Drop Your Resume Here</Typography>
          <Typography variant="body2">(Supported formats: .pdf, .docx)</Typography>
        </div>

        {/* Display Uploaded Files */}
        {files.length > 0 && (
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Uploaded Files:
            </Typography>
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </li>
              ))}
            </ul>
          </Box>
        )}
      </Box>

      {/* Job Description Textarea */}
      <Box sx={{ margin: "20px auto", maxWidth: "500px" }}>
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Paste Job Description
        </Typography>
        <textarea
          rows={5}
          style={{ width: "100%", padding: "10px", borderRadius: "8px", borderColor: "#1976d2" }}
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </Box>

      {/* Analyze Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          marginTop: "20px",
          padding: "10px 20px",
          fontWeight: "bold",
        }}
        onClick={handleAnalyze}
      >
        Analyze
      </Button>
    </Box>
  );
};

export default CareerCoach;
