import React from "react";
import Weather from "./Weather";
import { Grid } from "@material-ui/core";

// const myStyle = {
//   backgroundImage: "url('/italian.jpg')",
//   height: "1000px",
// };
const Home = () => {
  return (
    <div className="Home">
      <Grid container direction="row">
        <Grid item md={12} sm={12}>
          <Weather />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
