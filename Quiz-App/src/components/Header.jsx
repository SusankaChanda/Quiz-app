import React from "react";
import quizLogo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={quizLogo} alt="QUIZ LOGO" />
      <h1>React Quiz</h1>
    </header>
  );
};

export default Header;