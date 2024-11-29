import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  Avatar,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";

export default function Home() {
  const teamMembers = [
    {
      name: "Hamza Rehman",
      position: "Founder",
      imageUrl: "/hamza.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/hamzarehman4",
    },
    {
      name: "Abdullah Bin Altaf",
      position: "Co-Founder",
      imageUrl: "/abdullah.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/abdullah-k18",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <AppBar
        sx={{
          backgroundColor: "black",
          color: "black",
          boxShadow: "none",
          position: "relative",
        }}
        className="border-b "
      >
        <Container>
          <Toolbar disableGutters className="flex justify-between">
            <Link href="/" passHref>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "800", fontSize: "1.5rem" }}
                className="text-[#5975fa] cursor-pointer"
              >
                Agent Valley
              </Typography>
            </Link>

            <Link href="/agents" passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#5975fa",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Browse Agents
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>

      <section
        id="home"
        className="flex justify-center items-center py-12 mt-12 h-auto lg:h-screen lg:mt-0"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Typography
                variant="h3"
                className="text-[#5975fa] font-bold"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.5rem", lg: "3rem" },
                  fontWeight: "bolder",
                  marginBottom: "1rem",
                }}
              >
                Revolutionize Your Workflow with AI Agents
              </Typography>

              <Typography
                variant="body1"
                className="text-[#caddfe]"
                sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
              >
                Discover a marketplace where businesses and individuals unlock
                the power of cutting-edge AI agents. Streamline operations,
                reduce costs, and amplify productivity like never before.
              </Typography>
            </div>

            <div className="relative w-full h-80 lg:h-96 ">
              <Image
                src="/agent.png"
                alt="AI Job Search"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="team" className="py-16 bg-[#1a1a1a] text-white">
        <Container>
          <Typography
            variant="h4"
            className="text-center text-[#5975fa]"
            sx={{
              fontSize: {
                xs: "2rem",
                md: "2.5rem",
                marginBottom: 30,
                fontWeight: "bolder",
              },
            }}
          >
            Meet Our Team
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="shadow-lg"
                sx={{
                  padding: "1.5rem",
                  borderRadius: "0.75rem",
                  textAlign: "center",
                  color: "#caddfe",
                  backgroundColor: "#292929",
                }}
              >
                <Avatar
                  src={member.imageUrl}
                  alt={member.name}
                  sx={{
                    width: "100px",
                    height: "100px",
                    margin: "0 auto",
                    marginBottom: "1rem",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#97b1dd", marginBottom: "1rem" }}
                  >
                    {member.position}
                  </Typography>
                  <MuiLink
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#5975fa",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <LinkedInIcon />
                  </MuiLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <footer className="bg-black pt-4">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Typography
              variant="body2"
              className="text-[#caddfe] text-center sm:text-left"
              sx={{ marginBottom: "1rem" }}
            >
              &copy; 2024 Agents Valley. All rights reserved.
            </Typography>

            <div className="flex items-center space-x-2 mb-4">
              <Link
                href="https://www.linkedin.com/company/agentsvalley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#caddfe]"
              >
                <LinkedInIcon size={20} />
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
