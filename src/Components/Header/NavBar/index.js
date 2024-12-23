import { Button } from "@mui/material";
import { FaList } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { GiClothes } from "react-icons/gi";
import { LuCircuitBoard } from "react-icons/lu";
import { PiHamburger } from "react-icons/pi";
import { GiFruitBowl } from "react-icons/gi";
import { SiBloglovin } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";


const Navigation = () => {
  return (
    <nav>
          <div className="container">
            <div className="row">
              <div className="col-sm-3 navPart1">
                <Button className="allCategories align-items-center">
                    <span className="iconList mr-2"><FaList /></span>
                    <span className="text">All Categories</span>
                    <span className="iconDrop ml-2"><MdOutlineArrowDropDown /></span>
                    </Button>
              </div>

              <div className="col-sm-9 navPart2 d-flex align-items-center">
                <ul className="list list-inline ml-auto">
                    <li className="list-inline-item"><Link to="/"><TiHomeOutline />&nbsp;Home</Link></li>
                    <li className="list-inline-item"><Link to="/"><GiClothes />&nbsp;Fashion</Link></li>
                    <li className="list-inline-item"><Link to="/"><LuCircuitBoard />&nbsp;Electronic</Link></li>
                    <li className="list-inline-item"><Link to="/"><PiHamburger />&nbsp;Bakery</Link></li>
                    <li className="list-inline-item"><Link to="/"><GiFruitBowl />&nbsp;Grocery</Link></li>
                    <li className="list-inline-item"><Link to="/"><SiBloglovin />&nbsp;Blog</Link></li>
                    <li className="list-inline-item"><Link to="/"><FaPhoneVolume />&nbsp;Contact</Link></li>

                </ul>
              </div>
            </div>
          </div>
        </nav>
  )
};

export default Navigation;
