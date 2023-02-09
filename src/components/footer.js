import React from "react";

const Footer = () => {
  let footerStyle = {
    "font-size": "0.7rem",
  };
  return (<footer className="bg-dark text-light py-3">
    <p className="text-center" style={footerStyle}>
    Copyright &copy; MyTodoList.com
    </p>
    
  </footer>)
};

export default Footer;
