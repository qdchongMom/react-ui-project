import React from "react";
import useSWR from "swr";
import moment from "moment";
import DisplayWeather from "./DisplayWeather";

const Weather = ({ weather }) => {
  const current_time = moment(new Date()).format("YYYY-MM-DDTHH:mm:ss");
  const url = `https://api.data.gov.sg/v1/environment/24-hour-weather-forecast?date_time=${current_time}`;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading....</div>;

  return <DisplayWeather data={data} />;
};

export default Weather;
