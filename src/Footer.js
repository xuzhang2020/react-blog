import React from "react";
import ReactDOM from "react-dom";
import img from "./images/header.jpg";
import './sass/style.scss';

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
		<h4>© 2020 Blog Posts</h4>
    );
  }
}
 
export default Footer
