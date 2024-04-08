import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginButton = () => (
  <Link to="/login">
    <button >로그인</button>
  </Link>
);

const LoginHome = () => {
  const [user, setUser] = useState(null);

  // 로그인 세션 유지
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



  return (
    <container>
      <h2>Home</h2>
        <div>
          <h3>로그인 해 주세요</h3>
          <LoginButton />

          <Link to="/signup">
            <button >회원가입</button>
          </Link>
        </div>
   </container>

  );
};

export default LoginHome;