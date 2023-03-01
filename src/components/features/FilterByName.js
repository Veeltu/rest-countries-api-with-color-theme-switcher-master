function FilterByName({ setInputTextToFilter }) {
  return (
    <div>
      <div className="relative block ">
        <input
          className="block w-full py-2 pr-3 bg-white border-none rounded-md shadow-xl placeholder:italic placeholder:text-slate-400 pl-9 focus:outline-none sm:text-sm"
          placeholder="Search for a country..."
          name="search"
          id="id"
          type="text"
          onChange={(e) => setInputTextToFilter(e.target.value.toLowerCase())}
        />
      </div>
    </div>
  );
}

export default FilterByName;
