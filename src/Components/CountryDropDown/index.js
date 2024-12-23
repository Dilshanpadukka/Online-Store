import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { FaSearch } from "react-icons/fa";


const CountryDropDown = () => {
  return (
    <>
      <Button className="countryDropdown">
        <div className="info d-flex flex-column">
          <span className="label">Your Country</span>
          <span className="countryName">Sri Lanka</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog open={true} className="locationModal">
        <h4>Set Your Country</h4>
        <p>Enter your address and we will specify the offer for your location</p>

        <div className="headerSearchBar w-100">
        <input type="text" placeholder="Search for products" />
        <Button><FaSearch /></Button>
      </div>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
