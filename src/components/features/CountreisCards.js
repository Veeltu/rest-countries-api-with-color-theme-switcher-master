const CountriesCard = ({ data, setNameFilter }) => {
  const handleDetailsClick = (e) => {
    const a = e.currentTarget.dataset.id;
    setNameFilter(a);
  };

  return (
    <>
      <ul className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((e) => (
          <div
            onClick={(e) => handleDetailsClick(e)}
            key={e.name.common}
            data-id={e.name.common}
            className="my-8 duration-300 rounded shadow-xl bg-White dark:bg-DarkBlue dark:text-White hover:-translate-y-1"
          >
            <img
              className="object-cover object-center w-full h-3/6 "
              alt="flag"
              src={e.flags.png}
            ></img>
            <div className="p-6">
              <div className="mb-4 text-lg font-bold leading-relaxed ">
                <h2>{e.name.common}</h2>
              </div>
              <div className="leading-5">
                <div className="population">
                  <span className="font-semibold">Population:</span>
                  <span className="ml-1 font-light">{e.population}</span>
                </div>
                <div className="region">
                  <span className="font-semibold">Region:</span>
                  <span className="ml-1 font-light">{e.region}</span>
                </div>
                <div className="capital">
                  <span className="font-semibold">Capital:</span>
                  <span className="ml-1 font-light">{e.capital}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default CountriesCard;
