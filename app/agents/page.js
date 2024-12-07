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
  ]);

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
    <div className="min-h-screen" style={{ backgroundColor: "white" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #333",
        }}
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
                  sx={{ fontWeight: "800" }}
                  className="text-[#5975fa] text-base sm:text-xl"
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
                    mt: 1,
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
            <Link href={model.link} passHref key={index}>
              <Card
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
                      objectFit: "contain",
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
            No agents found matching your search result
          </Typography>
        )}
      </Container>
    </div>
  );
}
