import axios from "axios";
import { useState, useEffect } from "react";
import CountriesCards from "./CountreisCards";
import FilterByName from "./FilterByName";
import FilterByContinent from "./FilterByContinent";
import CountriesDetails from "./CountriesDetails";

const url = "https://restcountries.com/v3.1/";

function CountriesGrid() {
  const [jsonData, setJsonData] = useState([]);
  const [filterByContinent, setFilterByContinent] = useState("All");
  const [inputTextToFilter, setInputTextToFilter] = useState("");
  const [finalFilerToCardsGrid, setFilterToCardsGrid] = useState([]);

  // This value stores data from filter name for detail page
  const [nameFilter, setNameFilter] = useState();

  const [dataForDetailPage, setDataForDetailPage] = useState([]);
  const [detailPageView, setDetailPageView] = useState(false);

  //fetch data
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(url + "all");
        setJsonData(resp.data);
        setFilterToCardsGrid(resp.data);
      } catch (error) {
        console.log(error.data);
      }
    };
    getData();
  }, []);

  //filter for one country match with "nameFilter"
  useEffect(() => {
    let detailData = [];
    if (nameFilter !== [])
      // ???
      detailData = jsonData.filter((e) => e.name.common === nameFilter);
    setDataForDetailPage(detailData);
    toggle();
  }, [nameFilter]);

  const changeCountry = (e) => {
    // console.log(e)
    const a = e.currentTarget.textContent;
    const detailData = jsonData.filter((e) => e.name.common === a);
    setDataForDetailPage(detailData);
  };

  //filterByContinent
  useEffect(() => {
    let result = jsonData;
    if (filterByContinent !== "All")
      result = result.filter((e) => e.region === filterByContinent);
    setFilterToCardsGrid(result);
  }, [filterByContinent]);

  //name filter
  useEffect(() => {
    const filteredData = jsonData.filter((e) => {
      return e.name.common.toLowerCase().includes(inputTextToFilter);
    });
    setFilterToCardsGrid(filteredData);
  }, [inputTextToFilter]);

  const toggle = () => setDetailPageView((wasOpened) => !wasOpened);
  const resetDetailState = () => setNameFilter(undefined);

  return (
    <>
      <div className="h-screen px-12 py-10 bg-gray-100 dark:bg-BackgroundDarkBlue">
        {detailPageView ? (
          <>
            <div className="flex flex-col justify-between sm:flex-row">
              <FilterByName
                setInputTextToFilter={setInputTextToFilter}
                inputTextToFilter={inputTextToFilter}
              />
              <FilterByContinent
                setFilterByContinent={setFilterByContinent}
                filterByContinent={filterByContinent}
              />
            </div>
            <div className="cursor-pointer">
              <CountriesCards
                data={finalFilerToCardsGrid}
                setNameFilter={setNameFilter}
              />
            </div>
          </>
        ) : (
          <>
            <CountriesDetails
              data={dataForDetailPage}
              jsonData={jsonData}
              button={resetDetailState}
              setNameFilter={changeCountry}
            />
          </>
        )}
      </div>
    </>
  );
}

export default CountriesGrid;
