import React from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from "@mui/material/Slide"; 

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
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

      <Dialog open={isOpenModal} onClose={() => setisOpenModal(false)} className="locationModal" TransitionComponent={Transition}>
        <h4 className="mb-0">Set Your Country</h4>
        <p>Enter your address and we will specify the offer for your location</p>
        <Button className="closeBtn" onClick={() => setisOpenModal(false)}><MdClose /></Button>

        <div className="headerSearchBar w-100">
        <input type="text" placeholder="Search your arera" />
        <Button><FaSearch /></Button>
      </div>
          <ul className="countryList mt-3">
            <li><Button onClick={() => setisOpenModal(false)}>India</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>USA</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>UK</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Canada</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Japan</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>China</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Germany</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>France</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Italy</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Spain</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Portugal</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Switzerland</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Denmark</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Norway</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Sweden</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Finland</Button></li>
            <li><Button onClick={() => setisOpenModal(false)}>Denmark</Button></li>
          </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
