import React from "react";
import LoginForm from "../../Components/Login/LoginForm";
import Slider from "../../Components/Slider";

export default function LoginPage() {
  return (
    <section className="h-screen custom-blue">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <LoginForm/>
          <Slider img="login-bg.png"/>
        </div>
      </div>
    </section>
  );
}