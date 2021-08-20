import React from "react";
import useSWR, { mutate } from "swr";
import moment from "moment";
import DisplayWeather from "./DisplayWeather";
import CirularLoader from "../components/CircularLoader";
import "./DisplayWeather.css";
import Food from "./Food/Food";
import { WEATHERURL } from "../constants/index";
import Button from "@material-ui/core/Button";

const Weather = ({ weather }) => {
  const current_time = moment(new Date()).format("YYYY-MM-DDTHH:mm:ss");
  const url = WEATHERURL + current_time;
  //const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url);
  if (error) return <div>Error...</div>;
  if (!data)
    return (
      <div className="loader">
        <CirularLoader />
      </div>
    );

  return (
    <dir>
      <DisplayWeather data={data} url={url} />
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          // tell all SWRs with this key to revalidate
          mutate(url);
        }}
      >
        Mutate Me. Ahhhhh!!!!!!
      </Button>
      <Food data={data} />
    </dir>
  );
};

export default Weather;
