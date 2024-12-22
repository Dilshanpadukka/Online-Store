import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
const CountryDropDown = () => {
  return (
    <>
      <Button className="countryDropdown">
        <div className="info d-flex flex-column">
          <span className="label">Your Country</span>
          <span className="countryName">Sri Lanka</span>
        </div>
        <span className="ml-auto"><FaAngleDown /></span>
      </Button>
    </>
  );
};

export default CountryDropDown;
