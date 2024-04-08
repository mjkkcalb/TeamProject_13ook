import React, { useEffect, useCallback,  useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import MyBookStyle from "./mybook.module.css";

import MybookSave1 from "./MybookSave1";
import MybookSave3 from "./MybookSave3";
import MybookSave2 from "./MybookSave2";
import Logout from "../library/Logout";
import FeedFooter from "../footer/FeedFooter";
// import DetailCalendar from "./DetailCalender";

import axios from "axios";

const MyBookMain = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const publicUrl = process.env.PUBLIC_URL;

  useEffect(() => {
    const getUserSession = async () => {
      try {
        const res = await axios.get("/login");
        setUser(res.data.user);
      } catch (err) {
        console.log("세션 오류:", err);
      }
    };
    getUserSession();
  }, []);


      // 로그아웃
      const handleLogout = useCallback(async () => {
        try {
          const res = await axios.get("/logout");
          if (res.data.user === null) {
            setUser(null);
            navigate("/");
          }
        } catch (err) {
          console.log("로그아웃 오류:", err);
        }
      }, [navigate]);
  

  return (
    <div className={MyBookStyle.myBook}>
      <h2 className={MyBookStyle.MybookLogo}>
        <img src={`${publicUrl}/images/logo.svg`} alt="로고" />
      </h2>
      <div className={MyBookStyle.myBookPage}>
        <div className={MyBookStyle.myBookPageTop}>
        <div>
         {user && (
          <>
            <h1>{user.userId},님</h1>
            <h2>독서를 통해 마음을 정리해보세요 :) </h2>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        )}
      </div>
        </div>
        {/* <Link to="/main">
          <BiChevronLeft style={{ fontSize: "4rem" }} />
        </Link> */}
        <div>
          <MybookSave2 />
          <MybookSave3 />
          <MybookSave1 />
          <div className={MyBookStyle.myBookShalf}></div>
          {/* <DetailCalendar /> */}
        </div>
      </div>
      <FeedFooter />
    </div>
  );
};

export default MyBookMain;
