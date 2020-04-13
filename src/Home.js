import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

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
    <div key={post.id}  className="card">
		
			  <img className="card-img" src={require('./images/' + post.pic)}></img>
		
		  <div className="card-body" style={styles[post.id%3]}>
			  <Link to={{pathname: '/Detail',state:{title:post.title,img:post.pic,content:post.content}}}><h4>{post.title}</h4></Link>
			  <h3>{post.postdate}</h3>
		  </div>
    </div>
  );
  return (
		<div>
		  {content}
		</div>
  );
}

const posts = [
  {id: 1, title: 'Japan Climate Initative', content: 'Welcome to learning React!', pic: 'p1.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?1',color:'background: #cb5053'},
  {id: 2, title: 'Perspectives from a minnesota Delegate:The Many Faces of U.S. Climate Action at COP23', content: 'You can install React from npm.', pic: 'p2.jpg',postdate: 'SEPTEMBER 12, 2017',href:'article.html?2',color:'#0184a4'},
  {id: 3, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3',color:'#266098'},
  {id: 4, title: 'Japan Climate Initative', content: 'Welcome to learning React!', pic: 'p1.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?1',color:'#cb5053'},
  {id: 5, title: 'Perspectives from a minnesota Delegate:The Many Faces of U.S. Climate Action at COP23', content: 'You can install React from npm.', pic: 'p2.jpg',postdate: 'SEPTEMBER 12, 2017',href:'article.html?2',color:'#266098'},
  {id: 6, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3',color:'#0184a4'},
  {id: 7, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3',color:'#0184a4'},
  {id: 8, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3',color:'#0184a4'},
  {id: 9, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3',color:'#0184a4'},
  {id: 10, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'p3.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3',color:'#0184a4'}
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
			<main className="main">
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
