import React, { useEffect, useState } from "react";
import DataTable from "../DataTable";
import FoodDataRain from "./FoodDataRain";
import FoodDataSunny from "./FoodDataSunny";
import "./Food.css";

const Food = ({ data }) => {
  const { general } = data.items[0];
  const [filterOption, setFilterOption] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [dataSets, setDataSets] = useState([]);
  const rainForecast = [
    "Thundery Showers",
    "Moderate Rain",
    "Light Rain",
    "Showers",
    "Light Showers",
  ];

  const clearForecast = [
    "Fair",
    "Cloudy",
    "Sunny",
    "Partly Cloudy (Day)",
    "Partly Cloudy (Night)",
    "Windy",
  ];

  const optionSelected = (event) => {
    setFilterOption(event.target.value);
  };

  const renderTableData = (FoodData) => {
    // return FoodData.map((element, i) => (
    //   <tr key={i}>
    //     <td>{element.Name}</td>
    //     <td>{element.Spiciness}</td>
    //     <td>{element.Type}</td>
    //     <td>{element.Stores}</td>
    //     <td>{element.Fat}</td>
    //   </tr>
    // ));
    return <DataTable rows={FoodData} />;
  };

  const renderFilterOptions = (filterOption) => {
    console.log(filterOption);
    if (filterOption) {
      console.log(dataSets);
      let options = Array.from(
        new Set(dataSets.map((element) => element[filterOption]))
      );

      return options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ));
    }
    return [];
  };

  const filterOptionSelected = (event) => {
    let { value } = event.target;
    if (value) {
      let filteredData = dataSets.filter(
        (element) => element[filterOption] === value
      );

      setFilteredData(filteredData);
    }
  };

  useEffect(() => {
    if (clearForecast.includes(general.forecast)) {
      setDataSets(FoodDataSunny);
    } else if (rainForecast.includes(general.forecast)) {
      setDataSets(FoodDataRain);
    }
  }, [clearForecast, rainForecast, general.forecast]);
  return (
    <div>
      <div className="food__filter">
        <label className="food__label"> Filter By </label>
        <select onChange={optionSelected.bind(this)}>
          <option value=""></option>
          <option value="spiciness"> Spiciness </option>
          <option value="type"> Type </option>
        </select>

        <select onChange={filterOptionSelected.bind(this)}>
          <option value=""> </option>
          {renderFilterOptions(filterOption)}
        </select>
      </div>
      <div className="food__table">
        {filteredData.length
          ? renderTableData(filteredData)
          : renderTableData(dataSets)}
      </div>
    </div>
  );
};

export default Food;
