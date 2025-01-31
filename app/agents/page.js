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
} from "@mui/material";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Agents() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [anchorEl, setAnchorEl] = useState(null);
  const [models, setModels] = useState([
    {
      name: "Ubuntu Terminal Agent",
      category: "linux",
      bgColor: "linear-gradient(to right, #f26a3b, #ffd2b3)",
      link: "/ubuntu-terminal-agent",
      image: "/ubuntu.svg",
    },
    {
      name: "Sensitive Data Checker",
      category: "files",
      bgColor: "linear-gradient(to right, #a8a8a8, #d6d6d6)",
      link: "/sensitive-data-checker",
      image: "/sensitive.png",
    },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

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
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
        }}
        className="border-b"
      >
        <Toolbar>
          <Container className="flex justify-between items-center">
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer mb-2 sm:mb-0">
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
              </div>
            </Link>

            <div className="flex space-x-4 items-center">
              <Button
                onClick={() => setActiveCategory("all")}
                sx={{
                  color: "#5975fa",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                All Agents
              </Button>
              <div
                onMouseEnter={handleMenuOpen}
                onMouseLeave={handleMenuClose}
                style={{ position: "relative" }}
              >
                <Button
                  sx={{
                    color: "#5975fa",
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
                    width: "150%",
                    "& .MuiMenuItem-root": {
                      color: "#5975fa",
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                      },
                    },
                  }}
                >
                  <MenuItem onClick={() => setActiveCategory("linux")}>
                    Ubuntu
                  </MenuItem>
                </Menu>
              </div>
            </div>
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
          placeholder="Search by Agent name or Category"
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
            <Card
              key={index}
              onClick={() => handleCardClick(model)}
              sx={{
                background: model.bgColor,
                borderRadius: "10px",
                color: "#fff",
                textAlign: "center",
                transition: "transform 0.3s",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "60%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={model.image}
                  alt={model.name}
                  style={{
                    height: "120px",
                    marginBottom: "-40px",
                  }}
                />
              </div>
              <CardContent
                sx={{
                  width: "100%",
                  textAlign: "center",
                  paddingTop: 3,
                }}
              >
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
            No agents found matching your search result
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
