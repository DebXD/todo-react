import React from "react";

const Footer = () => {
  let footerStyle = {
    "textAlign" : "center"
  }
  return (<footer className="bg-dark text-light py-3">
    <p className="text-center" style={footerStyle}>
    Copyright &copy; MyTodoList.com
    </p>
    
  </footer>)
};

export default Footer;
