import React, { useEffect, useState } from "react";
import DataTable from "../DataTable";
import FoodDataRain from "./FoodDataRain";
import FoodDataSunny from "./FoodDataSunny";
import "./Food.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Food = ({ data }) => {
  const { general } = data.items[0];
  const [filterOption, setFilterOption] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [dataSets, setDataSets] = useState([]);

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

  const renderCarouselData = (FoodData) => {
    return FoodData.map((i, index) => (
      <img
        src={`${process.env.PUBLIC_URL}/image/${i.img}`}
        key={index}
        alt="food"
      />
    ));
  };
  const renderFilterOptions = (filterOption) => {
    if (filterOption) {
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
    console.log(value);
    if (value) {
      let filteredData = dataSets.filter(
        (element) => element[filterOption] === value
      );

      setFilteredData(filteredData);
    } else {
      setFilteredData(dataSets);
    }
  };

  useEffect(() => {
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
    if (clearForecast.includes(general.forecast)) {
      setDataSets(FoodDataSunny);
    } else if (rainForecast.includes(general.forecast)) {
      setDataSets(FoodDataRain);
    }
  }, [general.forecast]);

  return (
    <div>
      <div className="food__filter">
        <label className="food__label"> Filter By </label>
        <select onChange={optionSelected.bind(this)}>
          <option value="">All</option>
          <option value="spiciness"> Spiciness </option>
          <option value="type"> Type </option>
        </select>

        <select onChange={filterOptionSelected.bind(this)}>
          <option value="">All</option>
          {renderFilterOptions(filterOption)}
        </select>
      </div>
      <div className="food__table">
        {filteredData.length
          ? renderTableData(filteredData)
          : renderTableData(dataSets)}
      </div>
      <AliceCarousel
        autoPlay={true}
        autoPlayInterval="800"
        disableButtonsControls={true}
        animationType="fadeout"
        infinite={true}
      >
        {/* {filteredData.map((i, index) => (
          <img
            src={`${process.env.PUBLIC_URL}/image/${i.img}`}
            key={index}
            alt="food"
          />
        ))} */}
        {filteredData.length
          ? renderCarouselData(filteredData)
          : renderCarouselData(dataSets)}
      </AliceCarousel>
    </div>
  );
};

export default Food;
