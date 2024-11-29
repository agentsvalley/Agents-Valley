"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Agents() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [models, setModels] = useState([
    {
      name: "Ubuntu Terminal Agent",
      category: "linux",
      bgColor: "linear-gradient(to right, #4facfe, #00f2fe)",
      link: "/ubuntu-terminal-agent",
    },
    {
      name: "AI Assistant",
      category: "general",
      bgColor: "linear-gradient(to right, #ff7e5f, #feb47b)",
      link: "/ai-assistant",
    },
    {
      name: "Docker Helper",
      category: "linux",
      bgColor: "linear-gradient(to right, #42e695, #3bb2b8)",
      link: "/docker-helper",
    },
  ]);

  const filteredModels = models.filter(
    (model) =>
      (activeCategory === "all" || model.category === activeCategory) &&
      (model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1a1a1a" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1a1a1a",
          boxShadow: "none",
          borderBottom: "1px solid #333",
        }}
      >
        <Toolbar>
          <Container className="flex justify-between items-center">
            <Link href="/" passHref>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Agent Valley
              </Typography>
            </Link>

            <div className="flex space-x-4">
              <Button
                onClick={() => setActiveCategory("all")}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Agents
              </Button>
              <Button
                onClick={() => setActiveCategory("linux")}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Linux
              </Button>
            </div>
          </Container>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          paddingY: "3rem",
          textAlign: "center",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search by name or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            input: {
              color: "#000",
            },
          }}
        />
      </Container>

      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: "1.5rem",
          paddingBottom: "3rem",
        }}
      >
        {filteredModels.map((model, index) => (
          <Link href={model.link} passHref key={index}>
            <Card
              sx={{
                background: model.bgColor,
                borderRadius: "10px",
                padding: "1rem",
                color: "#fff",
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  {model.name}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Container>
    </div>
  );
}
