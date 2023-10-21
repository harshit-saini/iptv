import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".01rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Harshit Tv
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
