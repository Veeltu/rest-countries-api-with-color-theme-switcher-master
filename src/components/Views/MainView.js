import CountriesGrid from "../features/CountriesGrid";
import UpperTab from "../features/UpperTab";

function MainView() {
  return (
    <div className="bg-VeryLightGray">
      <UpperTab /> 
      <CountriesGrid/> 
    </div>
  );
}

export default MainView;
