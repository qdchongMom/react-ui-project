import React from "react";
import "./App.css";
import Weather from "./components/Weather";
import { Grid } from "@material-ui/core";

const myStyle = {
  backgroundImage: "url('/italian.jpg')",
  height: "1000px",
};
function App() {
  return (
    <div className="App" style={myStyle}>
      <Grid container direction="column" justifyContent="center">
        <Grid item md={12}>
          <h1 className="title">Jiak Simi Weather App</h1>
        </Grid>
        <Grid item md={12} sm={12}>
          <Weather />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
