import { useRef } from "react";

import Form from "react-bootstrap/Form";

import { verifyUser } from "../../data/users";

import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();
  return (
    <div className="login-container">
      <div className="welcome">
        <p>Welcome</p>
      </div>
      <p className="please1">Please enter your details</p>
      <div className="data1">
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          type="text"
          id="username"
          // aria-describedby="passwordHelpBlock"
          placeholder="user"
          style={{ textAlign: "left" }}
          ref={userRef}
        />
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          id="Password"
          // aria-describedby="passwordHelpBlock"
          placeholder="pass"
          style={{ textAlign: "left" }}
          ref={passRef}
        />
        <div className="buttonlogin">
          <button
            style={{width: '420px', height: '50px', fontSize: '20px', fontWeight:'bold'}}
            className="btn btn-primary mt-3"
            onClick={() => {
              const user = userRef.current.value.trim(); //user คือ
              const pass = passRef.current.value.trim(); //pass คือ
              userRef.current.value = ""; //ดึงมาแล้วต้องเคลียร์
              passRef.current.value = "";
              const userInfo = verifyUser(user, pass);
              if (userInfo === null) {
                alert("Wrong username or password"); //ถ้าไม่เจอ ใส่รหัสผิด
                userRef.current.focus();
              } else {
                setToken(userInfo.token);
                setRole(userInfo.role);
              }
            }}
          >
            Log-in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
