/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Router from "next/router";
import imgHeader from "./assets/header-login.png";
import imgLogo from "./assets/logo.png";
import FormInput from "./components/form-input/form-input.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "./components/button/button.component";
import Swal from "sweetalert2";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data.users);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = data.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successful login",
        showConfirmButton: false,
        timer: 1500,
        width: "350px",
      });
      Router.push("/dashboard");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Incorrect User ID or Password!",
        showConfirmButton: false,
        timer: 1500,
        width: "350px",
      });
    }
  };

  const handleSignUp = () => {
    Swal.fire({
      position: "center",
      icon: "info",
      text: "Development Stage!",
      showConfirmButton: false,
      timer: 1500,
      width: "350px",
    });
  };

  return (
    <div className="container-fluid bg-white">
      <div className="mx-auto sm:w-2/5 bg-white h-screen">
        <div className="flex">
          <div className="header-login-img">
            <Image
              src={imgHeader} // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={130} // Desired size with correct aspect ratio
              alt="Your Name"
            />
          </div>
          <div className="flex justify-center m-10 ">
            <Image
              src={imgLogo} // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold ml-5 mt-20 text-slate-700">Login</h2>
        <span className="ml-5 text-slate-700">Please sign to continue.</span>
        <form onSubmit={handleSubmit} className="m-5">
          <FormInput
            label="Username"
            type="text"
            required
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormInput
            label="Password"
            type="password"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-end">
            <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.login}>
              Login
            </Button>
          </div>
        </form>
        <div className="flex justify-center mt-14">
          <span className="text-slate-700">
            Don't have an account?
            <span className="text-red-500" onClick={handleSignUp}>
              {" "}
              SignUp
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
