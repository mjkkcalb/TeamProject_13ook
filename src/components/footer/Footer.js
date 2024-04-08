import React from "react";
import {
  BiPencil,
  BiHomeAlt,
  BiSearch,
  BiSignal4,
  BiBookOpen,
} from "react-icons/bi";
import FooterStyle from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={FooterStyle.globalMenu}>
      <ul className={FooterStyle.globalMenuItem}>
        <li>
          <Link to="/main">
            <BiHomeAlt />
            <span>홈</span>
          </Link>
        </li>
        <li>
          <Link to="/library">
            <BiHomeAlt />
            <span>책방</span>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <BiSearch />
            <span>검색</span>
          </Link>
        </li>
        <li>
          <Link to="/feed">
            <BiPencil />
            <span>피드</span>
          </Link>
        </li>
        <li>
          <Link to="/mybook">
            <BiSignal4 />
            <span>내서재</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
