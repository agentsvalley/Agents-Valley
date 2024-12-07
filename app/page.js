import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
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
    <div className="bg-white min-h-screen">
      <AppBar
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          position: "relative",
        }}
        className="border-b"
      >
        <Container>
          <Toolbar
            disableGutters
            className="flex justify-between flex-wrap sm:flex-nowrap"
          >
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

            <Link href="/agents" passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#5975fa",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "0.75rem",
                  padding: "0.5rem 1rem",
                }}
                className="text-sm sm:text-base"
              >
                Get Started
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
                className="text-black"
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

      <section id="team" className="py-16 bg-white">
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
                className="shadow-lg bg-gray-100 transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                sx={{
                  padding: "1.5rem",
                  borderRadius: "0.75rem",
                  textAlign: "center",
                  color: "#caddfe",
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
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#5975fa",
                      marginBottom: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <MuiLink
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "black",
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

      <footer className="bg-[#5975fa] pt-8 pb-4">
        <Container>
          <div className="flex flex-col items-center">
            <div className="mb-4 w-full max-w-md">
              <Typography
                variant="h6"
                className="text-white text-center"
                sx={{ fontWeight: "bold", marginBottom: 4 }}
              >
                Contact Us
              </Typography>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    rows="4"
                    className="w-full border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-white text-[#5975fa] font-bold py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110"
                >
                  Submit
                </button>
              </form>
            </div>

            <Typography
              variant="body2"
              className="text-white text-center"
              sx={{ marginBottom: 2 }}
            >
              &copy; 2024 Agents Valley. All rights reserved.
            </Typography>

            <div className="flex items-center space-x-4">
              <Link
                href="https://agentsvalley.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform transition-transform duration-300 hover:scale-110"
              >
                <LanguageIcon />
              </Link>
              <Link
                href="mailto:contact@agentsvalley.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform transition-transform duration-300 hover:scale-110"
              >
                <EmailIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/company/agentsvalley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform transition-transform duration-300 hover:scale-110"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com/agentsvalley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform transition-transform duration-300 hover:scale-110"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://www.youtube.com/agentsvalley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform transition-transform duration-300 hover:scale-110"
              >
                <YouTubeIcon />
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
