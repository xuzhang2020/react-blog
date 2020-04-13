import React, { Component } from "react";
import {Link} from 'react-router-dom';

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
		  <div>
			  <img className="card-img" src={post.pic}></img>
		  </div>
		  <div className="card-body">
			  <a href={post.href}><h4>{post.title}</h4></a>
			  <Link to={{pathname: '/Contact',state:{name:'xxxxx'}}}>xxxxx</Link>
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
  {id: 1, title: 'Japan Climate Initative', content: 'Welcome to learning React!', pic: 'iStock-517126822_0.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?1'},
  {id: 2, title: 'Perspectives from a minnesota Delegate:The Many Faces of U.S. Climate Action at COP23', content: 'You can install React from npm.', pic: 'iStock-547404578_0.jpg',postdate: 'SEPTEMBER 12, 2017',href:'article.html?2'},
  {id: 3, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'iStock-627281636.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3'},
  {id: 4, title: 'Japan Climate Initative', content: 'Welcome to learning React!', pic: 'iStock-517126822_0.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?1'},
  {id: 5, title: 'Perspectives from a minnesota Delegate:The Many Faces of U.S. Climate Action at COP23', content: 'You can install React from npm.', pic: 'iStock-547404578_0.jpg',postdate: 'SEPTEMBER 12, 2017',href:'article.html?2'},
  {id: 6, title: 'Microgrids improve resilience, efficiency', content: 'Welcome to learning React!', pic: 'iStock-627281636.jpg',postdate: 'SEPTEMBER 12, 2017', href:'article.html?3'}
];

class Stuff extends React.Component {
  render() {
    return (
      <Blog posts={posts} />
    );
  }
}
 
export default Stuff
