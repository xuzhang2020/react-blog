import React from "react";
import ReactDOM from "react-dom";
import img from "./images/header.jpg";

var sectionStyle = {
  color: '#FFFFFF',
  display: 'inline-block',
  width: "100%",
  height: "200px",
  backgroundImage: `url(${img})` 
};

class Footer extends React.Component {
  render() {
    return (
		<h4>copyright ?</h4>
    );
  }
}
 
export default Footer
