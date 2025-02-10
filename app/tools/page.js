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
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button as MuiButton,
  Box,
} from "@mui/material";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [anchorEl, setAnchorEl] = useState(null);
  const [models, setModels] = useState([
    {
      name: "Food Recognizer",
      category: "Image-Recognition",
      bgColor: "linear-gradient(to right, #f26a3b, #ffd2b3)",
      link: "/tools/food-recognizer",
      image: "/food.svg",
      description:
        "Upload a food image, app will display food type predictions.",
    },
    {
      name: "Flower Identifier",
      category: "Image-Recognition",
      bgColor: "linear-gradient(to right, #ff6ec7, #ffd9ec)",
      link: "/tools/flower-identifier",
      image: "/flower.svg",
      description: "Identify any flower instantly with a simple snap.",
    },
    {
      name: "Plant Disease Identifier",
      category: "Image-Recognition",
      bgColor: "linear-gradient(to right, #8B5A2B, #E3C19E)",
      link: "/tools/plant-disease-identifier",
      image: "/plant.svg",
      description: "Identify plant diseases and get remedies and care tips.",
    },
    {
      name: "Animal Species Identifier",
      category: "Image-Recognition",
      bgColor: "linear-gradient(to right, #F5D76E, #FFF3C0)",
      link: "/tools/animal-species-identifier",
      image: "/animal.svg",
      description:
        "Discover animal species along with fascinating habitat info.",
    },
    {
      name: "Sensitive Data Checker",
      category: "files",
      bgColor: "linear-gradient(to right, #a8a8a8, #d6d6d6)",
      link: "https://agent.ai/agent/sensitive-data-checker",
      image: "/sensitive.png",
      description: "This tells you about sensitive data in your files."
    },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const filteredModels = models.filter(
    (model) =>
      (activeCategory === "all" || model.category === activeCategory) &&
      (model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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

            {!isSmallScreen && (
              <div className="flex space-x-4 items-center">
                <Button
                  onClick={() => setActiveCategory("all")}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  All Tools
                </Button>
                <div onClick={handleMenuOpen} style={{ position: "relative" }}>
                  <Button
                    sx={{
                      color: "white",
                      textTransform: "none",
                      fontWeight: "bold",
                    }}
                    className="cursor-pointer"
                    endIcon={<ChevronDown size={16} />}
                  >
                    Categories
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      onMouseLeave: handleMenuClose,
                    }}
                    sx={{
                      "& .MuiMenuItem-root": {
                        color: "#5975fa",
                        "&:hover": {
                          backgroundColor: "#e0e0e0",
                        },
                      },
                    }}
                  >
                    <MenuItem
                      onClick={() => setActiveCategory("Image-Recognition")}
                    >
                      Image Recognition
                    </MenuItem>
                    <MenuItem
                      onClick={() => setActiveCategory("files")}
                    >
                      Files
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          paddingY: "3rem",
          textAlign: "center",
          marginTop: 6,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search by Tool name or Category"
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
        {filteredModels.length > 0 ? (
          filteredModels.map((model, index) => (
            <Link key={index} href={model.link} passHref>
              <Card
                key={index}
                sx={{
                  background: model.bgColor,
                  borderRadius: "10px",
                  color: "#fff",
                  textAlign: "center",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    style={{
                      height: "60px",
                      marginBottom: "5px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      marginBottom: "5px",
                    }}
                  >
                    {model.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    {model.description}
                  </Typography>
                </Box>
              </Card>
            </Link>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{
              color: "#888",
              textAlign: "center",
              width: "100%",
              gridColumn: "1 / -1",
            }}
          >
            No tools found matching your search result
          </Typography>
        )}
      </Container>
    </div>
  );
}
