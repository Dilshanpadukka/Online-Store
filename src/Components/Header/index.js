import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import CountryDropDown from "../CountryDropDown";
import { FaSearch } from "react-icons/fa";
import { Button } from "@mui/material";



const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              <b>Hello December get 50% off on all products</b>** Terms and
              conditions apply.
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
             <CountryDropDown/>
             {/*Header Search Bar Start Here */}
             <div className="headerSearchBar ml-3 mr-3">
                <input type="text" placeholder="Search for products" />
                <Button><FaSearch /></Button>
              </div>
              {/*Header Search Bar End Here */}
            </div>
          </div>
        </div>
      </header>
      </div>
    </>
  );
};

export default Header;
