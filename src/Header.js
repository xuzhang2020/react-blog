import React from "react";
import ReactDOM from "react-dom";
import img from "./images/header.jpg";
import './sass/style.scss';

var sectionStyle = {
  color: '#FFFFFF',
  display: 'inline-block',
  width: "100%",
  height: "200px",
  backgroundImage: `url(${img})` ,
  fontSize: "50px"
};

var sectionStyle2 = {
  color: '#FFFFFF',
  marginLeft: "40px",
};

class Header extends React.Component {
  render() {
    return (
      <div className="header" style={sectionStyle}>
		<div style={sectionStyle2}> Blog Posts</div>
	  </div>
    );
  }
}
 
export default Header
