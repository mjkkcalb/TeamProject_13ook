import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignUp = (props) => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("가입 확인");
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
    userGroup: "",
    userEmail: "",
  });
  const { userId, userPw, userGroup, userEmail } = formData;

    // 사용자 입력 값을 폼 데이터에 업데이트
    const handleChange = useCallback((e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }, []);


    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await axios.post("/signup", formData);
        if (res.status !== 200) {
          // 회원가입 실패가 throw를 사용해 setMsg로 넘어간다
          throw new Error("회원가입 실패");
        }
        alert("회원가입 성공");
        navigate("/");
      } catch (err) {
        setMsg(err.message);
      }
      console.log("formData :", formData);
    };
  return (
    <container>
<form onSubmit={handleSubmit}>
  <label>
    아이디
    <input
      type="text"
      placeholder="아이디를 입력하세요"
      name="userId"
      value={userId}
      onChange={handleChange}
    />
  </label>

  <label>
    비밀번호
    <input
      type="password"
      placeholder="비밀번호를 입력하세요"
      name="userPw"
      value={userPw}
      onChange={handleChange}
    />
  </label>

  <label>
    소속
    <input
      type="text"
      placeholder="소속을 입력하세요"
      name="userGroup"
      value={userGroup}
      onChange={handleChange}
    />
  </label>

  <label>
    이메일
    <input
      type="email"
      placeholder="이메일을 입력하세요"
      name="userEmail"
      value={userEmail}
      onChange={handleChange}
    />
  </label>

  {msg && <div style={{ color: 'red' }}>{msg}</div>}

  <button type="submit">
    회원가입
  </button>
</form>
    </container>
  );
};

export default SignUp;