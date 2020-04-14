import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import './sass/style.scss';

const style1={
        background: '#cb5053',
    };
const style2={
        background: '#0184a4',
    };
const style3={
        background: '#266098',
    };
const contentStyle = {
	display: 'flex',
	height: '100%',
	paddingBottom: '40px'
}
const styles=[style1,style2,style3];

function Greeting(props) {
  
  return style2;
}
	
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
	
	
    <div key={post.id}  className="flow-card">
		<div className="flow-card-body" style={styles[post.id%3]}>
			  <Link to={{pathname: '/Detail',state:{title:post.title,img:post.pic,content:post.content}}}><h1>{post.title}</h1></Link>
			  <div className="smallfont">{post.postdate}</div>
		</div>
		<div className="flow-card-img-parent" >
			<img className="flow-card-img" src={require('./images/' + post.pic)}></img>
		</div>
		<div className="flow-card-summary"  style={styles[post.id%3]}><h3>summary:</h3><br/>{post.summary}</div>
    </div>
  );
  return (
		<div className="flow-card-parent">
		  {content}
		</div>
  );
}

const posts = [
  {id: 1, title: 'Vermont Demonstrates the Power of Subnational Integration', content: 'Welcome to learning React!', pic: 'p1.jpg',postdate: 'NOVEMBER 11, 2017',summary: 'One of the first executive orders that Republican Governor Phil Scott signed when he took office in 2017, was to establish the Vermont Climate Action Commission. '},
  {id: 2, title: 'Solutions Story: Dominion, Microsoft team up with Virginia to build solar project', content: 'You can install React from npm.', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017',summary: 'On 125 acres about an hour’s drive southwest of Washington, D.C., construction is in full swing on 260,000 photovoltaic panels. '},
  {id: 3, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p2.jpg',postdate: 'SEPTEMBER 12, 2017',summary: 'After Hurricane Irene in 2011 knocked out power to nearly 1 million Connecticut homes and businesses, state officials began examining how to better steel communities against powerful storms that could become more frequent in a changing climate.'}
  /*{id: 4, title: 'Japan Climate Initative', content: 'Welcome to learning React!', pic: 'p1.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?1',color:'#cb5053'},
  {id: 5, title: 'Perspectives from a minnesota Delegate:The Many Faces of U.S. Climate Action at COP23', content: 'You can install React from npm.', pic: 'p2.jpg',postdate: 'SEPTEMBER 12, 2017',href:'article.html?2',color:'#266098'},
  {id: 6, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3',color:'#0184a4'},
  {id: 7, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3',color:'#0184a4'},
  {id: 8, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3',color:'#0184a4'},
  {id: 9, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3',color:'#0184a4'},
  {id: 10, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3',color:'#0184a4'}*/
];




class Home extends React.Component {
  render() {
    return (
	<div className="contain">
		<div>
			<header className="header">	  
				<Header />
			</header>
		</div>
		<div className="content" style={contentStyle}>
			<main className="flow-main">
				<Blog posts={posts} />
			</main>

			<div className="nav">
				<nav >
					<Nav />
				</nav>
			</div>
		</div>
		<div className="footer">
			<footer id="footer">
				<Footer />
			</footer>
		</div>
	</div>
      
    );
  }
}
 
export default Home
