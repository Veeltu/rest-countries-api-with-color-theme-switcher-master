import React from "react";

function CountriesDetails({ data, jsonData }) {
  // console.log(data);
  // borders country buttons ?
  // useMemo
 
    const bordersCoutries = data.map((e) => e.borders);
    const some = jsonData.filter(item => bordersCoutries[0].includes(item.cca3))
    




  return (
    <main className="w-[80%] max-w-md lg:max-w-6xl mx-auto capitalize py-14 relative">
      <button
        className="bg-White dark:bg-DarkBlue p-[.3em] px-[1.2em] rounded-sm mb-9 flex gap-2 
    items-center text-sm drop-shadow-md "
      >
        GET BACK
      </button>
      <div className="justify-center mx-auto dark:text-White ">
        {data.map((e) => (
          <div
            key={e.name.common}
            data-id={e.name.common}
            className="container grid grid-cols-2 m-auto"
          >
            <img
              className=" bg-VeryLightGray"
              alt="flag"
              src={e.flags.png}
            ></img>
            <div className="grid lg:grid-cols-2 gap-x-5">
              <div className="flex items-center gap-2 mb-4 text-lg font-bold sm:text-2xl lg:mb-5 sm:col-span-2 sm:gap-3">
                <h2>{e.name.common}</h2>
              </div>
              <div className="mb-5 column1 lg:mb-0 ">
                <div className="nativname">
                  <span className="font-semibold">Native Name: </span>
                  {e.name.nativeName[Object.keys(e.name.nativeName)[0]].common}
                </div>
                <div className="population">
                  <span className="font-semibold"> Population:</span>{" "}
                  {e.population}
                </div>
                <div className="region">
                  <span className="font-semibold"> Region:</span> {e.region}
                </div>
                <div className="subregion">
                  <span className="font-semibold"> Sub Region: </span>
                  {e.subregion}
                </div>
                <div className="capital">
                  <span className="font-semibold"> Capital: </span>
                  {e.capital}
                </div>
              </div>
              <div className="column2 ">
                <div className="topLevelDomain">
                  <span className="font-semibold">Top Level Domain: </span>
                  {e.tld ? e.tld[0] : "none"}
                </div>
                <div className="curencies">
                  <span className="font-semibold">Curencies: </span>
                  {e.currencies
                    ? e.currencies[Object.keys(e.currencies)[0]].name
                    : []}
                </div>
                <div className="languages">
                  <span className="font-semibold">Languages: </span>
                  {e.languages ? Object.values(e.languages).join(", ") : ""}
                </div>
              </div>
              <div className="flex flex-row my-10 borders">
                <span className="font-semibold"> Border countries: </span>
                {e.borders
                  ? e.borders.map((e) => (
                      <ul className="cursor-pointer bg-White dark:bg-DarkBlue p-[.3em] px-[1.3em] m-4 rounded-sm drop-shadow-lg ">
                        {e}
                      </ul>
                    ))
                  : ["none"]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CountriesDetails;
