import React from "react";

const Footer = () => {
  let cpStyle = {
    "font-size": "0.7rem",
  };
  return (
    <footer className="bg-dark text-light py-3">
      <p className="text-center" style={cpStyle}>
        Copyright &copy; MyTodoList.com
      </p>
    </footer>
  );
};

export default Footer;
