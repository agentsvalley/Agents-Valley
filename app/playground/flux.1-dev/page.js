"use client";

import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import Link from "next/link";

export default function FluxDev() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f3f4f6" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#5975fa",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Container className="flex justify-between items-center">
            <Link href="/" passHref>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: "white",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-6 w-6 sm:h-8 sm:w-8 mr-2"
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "800",
                    background:
                      "linear-gradient(to right, #D3A8FF, #4A90E2, #4DE0D1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="text-base sm:text-xl"
                >
                  AgentsValley
                </Typography>
              </Box>
            </Link>
          </Container>
        </Toolbar>
      </AppBar>

      <iframe
        src="https://agentsvalley-flux-1-dev-agents-valley.hf.space"
        className="h-screen w-screen pt-14 lg:pt-16"
      ></iframe>
    </div>
  );
}
