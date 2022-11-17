import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import classes from "../home.module.css";

const MenuCard = (props) => {
  return (
    <Grid item sm={12} md={6}>
      <a
        href={props.project.localhost}
        className={classes.link}
        target="_blank"
        rel="noreferrer"
      >
        <Paper elevation={3} className={classes.paper}>
          <img src={props.project.image} alt="" width="100%" height="300px" />
          <Box paddingX={3} paddingY={3}>
            <Typography variant="subtitle" component="h1">
              {props.project.name}
            </Typography>
            <Box
              marginTop={1}
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <BuildCircleIcon color="primary" />
              <Typography variant="body2" component="p">
                {props.project.tech}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </a>
    </Grid>
  );
};

export default MenuCard;
