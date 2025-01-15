import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab,setselectedTab] = useState(null);

  const context = useContext(MyContext);

  const selectCountry = (index) => {
    setselectedTab(index);
    setisOpenModal(false);
  }

  return (
    <>
      <Button className="countryDropdown" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Country</span>
          <span className="countryName">Sri Lanka</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className="locationModal"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Set Your Country</h4>
        <p>
          Enter your address and we will specify the offer for your location
        </p>
        <Button className="closeBtn" onClick={() => setisOpenModal(false)}>
          <MdClose />
        </Button>

        <div className="headerSearchBar w-100">
          <input type="text" placeholder="Search your arera" />
          <Button>
            <FaSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {context.countryList?.length !== 0 &&
            context.countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button onClick={() => selectCountry(index)}
                    className={`${selectedTab === index ? "active" : ""}`}>
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
