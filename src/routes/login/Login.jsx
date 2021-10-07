import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <section className="login">
      <h2>Login</h2>

      <form>
        <div className="form-wrap">
          <input
            type="email"
            className="login-email"
            placeholder="이메일을 입력해주세요"
          />
          <input
            type="password"
            className="login-password"
            placeholder="패스워드를 입력해주세요"
          />
          <button className="login-button">로그인</button>
        </div>
      </form>

      <ul>
        <Link>
          <li>회원가입</li>
        </Link>
        <Link to="/">
          <li>돌아가기</li>
        </Link>
      </ul>
    </section>
  );
};
export default Login;
