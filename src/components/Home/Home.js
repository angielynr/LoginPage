import React from "react";
import { Container, Grid, Box } from "@mui/material";
import MenuCard from "./MenuCard/MenuCard";
import BannerImage from "../../assets/banner.png";
import classes from "./home.module.css";
import projects from "./projectdata.json";

const Home = (props) => {
  return (
    <>
      <Box>
        <img
          src={BannerImage}
          alt=""
          height="20%"
          width="100%"
          className={classes.banner}
        />
      </Box>
      <Container sx={{ marginBottom: "5rem" }}>
        <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
          {projects.map((project) => (
            <MenuCard project={project} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
