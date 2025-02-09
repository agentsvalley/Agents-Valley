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

export default function Playground() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [anchorEl, setAnchorEl] = useState(null);
  const [models, setModels] = useState([
    {
      name: "FLUX.1 Dev",
      category: "Text-to-Image",
      bgColor: "linear-gradient(to right, #ff7e5f, #feb47b)",
      link: "/flux.1-dev",
      image: "/image.svg",
      description: "Generate high quality images with FLUX.1 Dev."
    },
    {
      name: "Sldr Flux NSFW v2 Studio",
      category: "Text-to-Image",
      bgColor: "linear-gradient(to right, #6a11cb, #2575fc)",
      link: "/sldr-flux-nsfw-v2-studio",
      image: "/image.svg",
      description: "Generate high quality images with Sldr Flux NSFW v2 studio."
    },
    {
      name: "Flux Realism Lora",
      category: "Text-to-Image",
      bgColor: "linear-gradient(to right, #00c6ff, #0072ff)",
      link: "/flux-realism-lora",
      image: "/image.svg",
      description: "Generate high quality images with Flux Realism Lora."
    },
    {
      name: "Stable Diffusion 3.5 Large",
      category: "Text-to-Image",
      bgColor: "linear-gradient(to right, #ff9a9e, #fad0c4)",
      link: "/stable-diffusion-3.5-large",
      image: "/image.svg",
      description: "Generate high quality images with Stable Diffusion 3.5 Large."
    }
    
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

  const handleCardClick = (model) => {
    setSelectedModel(model);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedModel(null);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "white" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#5975fa",
          color: "black",
          boxShadow: "none",
        }}
        className="border-b"
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
                  All Models
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
                      onClick={() => setActiveCategory("Text-to-Image")}
                    >
                      Text-to-Image
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
          placeholder="Search by Model name or Category"
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
            No models found matching your search result
          </Typography>
        )}
      </Container>

      {selectedModel && (
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{selectedModel.name}</DialogTitle>
          <DialogContent>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
              {selectedModel.details}
            </Typography>
          </DialogContent>
          <DialogActions>
            <MuiButton onClick={handleCloseDialog} color="primary">
              Close
            </MuiButton>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
