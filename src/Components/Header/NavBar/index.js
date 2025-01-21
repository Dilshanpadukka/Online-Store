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
import { useState } from "react";

const Navigation = () => {
  const [isopenSidebarVal,setisopenSidebarVal] = useState(true);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button className="allCategories align-items-center" onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                <span className="icon1 mr-2">
                  <FaList />
                </span>
                <span className="text">All Categories</span>
                <span className="icon2 ml-2">
                  <MdOutlineArrowDropDown />
                </span>
              </Button>
              <div className={`sidebarNav ${isopenSidebarVal===true ? 'open' : ''}`}>
                <ul>
                  <li><Link to="/"><Button>Clothing</Button></Link></li>
                  <li><Link to="/"><Button>Clothing</Button></Link></li>
                  <li><Link to="/"><Button>Clothing</Button></Link></li>
                  <li><Link to="/"><Button>Clothing</Button></Link></li>
                  <li><Link to="/"><Button>Clothing</Button></Link></li>
                  <li><Link to="/"><Button>Clothing</Button></Link></li> 
                </ul>
                </div>  
            </div>
          </div>

          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <TiHomeOutline />
                    &nbsp;Home
                  </Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <GiClothes />
                    &nbsp;Fashion
                  </Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <LuCircuitBoard />
                    &nbsp;Electronic
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <PiHamburger />
                    &nbsp;Bakery
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <GiFruitBowl />
                    &nbsp;Grocery
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <SiBloglovin />
                    &nbsp;Blog
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaPhoneVolume />
                    &nbsp;Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
