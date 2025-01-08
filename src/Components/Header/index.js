import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import CountryDropDown from "../CountryDropDown";
import { FaSearch } from "react-icons/fa";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import SearchBox from "./SearchBox";
import Navigation from "./NavBar";

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
                 <CountryDropDown />
                <SearchBox />
                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle mr-3">
                    <FaRegUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">LKR 250</span>
                    <div className="position-relative ml-2">
                      <Button className="circle">
                        <MdOutlineShoppingCart />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        2
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navigation />
      </div>
    </>
  );
};

export default Header;
