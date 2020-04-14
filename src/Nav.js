import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import './sass/style.scss';

const count=1;

const navStyle = {
	marginTop: '210px'
}

class Nav extends React.Component {
 
  constructor(props) {
      super(props);
      this.state = {opacity: 1.0,articles:[]};
  }
 
 componentWillUnmount(){
	clearInterval(this.timer);
 }
 componentDidMount() {
    this.timer = setInterval(function () {
	/*axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=9bf373d2eac140fc936c25212ebeb945')*/
	axios.get('http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=9bf373d2eac140fc936c25212ebeb945')
    .then(function (response) {
		console.log(response);
		
		this.setState({
			articles: response.data.articles
		});
	}.bind(this));
	
	/*
	  var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    */
	}.bind(this), 5000);
  }
  
  
  render () {
    return (
      <div style={{opacity: this.state.opacity}}>
	    <div>
			<ul>
				<li key="Home" className="licolor"><Link to="/"><h4>Home</h4></Link></li>
			</ul>
		</div>
		<hr/>
		<div>
			<div className="smallfont">Hello,google news!</div>
			<ul>
				{this.state.articles.slice(0, 5).map((article) =>
				<li key={article.title}  className="licolor"><a href={article.url}><div className="smallfont">{article.title}</div></a></li>
			  )}
			</ul>
		</div>
      </div>
    );
  }
}
 
export default Nav;