import React from "react";
import "./About.css";
import { Grid } from "@material-ui/core";

const About = () => {
  return (
    <Grid container justifyContent="center" direction="column">
      <img
        className="about__image"
        src={`${process.env.PUBLIC_URL}/suit.jpg`}
        alt="food matter"
      />
      <h1 className="about__header" data-testid="about">
        ABOUT
      </h1>
      <blockquote className="about__quote">
        "When the weather is hot, drink large amounts of juice to hydrate
        yourself sufficiently. <br />
        During cold and dry weather, be sure to provide yourself an abundant
        intake of proteins."
        <cite> - tastycraze.com</cite>
      </blockquote>
    </Grid>
  );
};

export default About;
