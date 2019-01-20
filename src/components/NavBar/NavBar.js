import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
  render(){
    return(
      <div className="navBar">
        <div className="handle">
          <a href="">Yelp Clone</a>
        </div>
        <div className="links">
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Search</a></li>
            <li><a href="">Food</a></li>
            <li><a href="">Careers</a></li>
          </ul>
        </div>
      </div>
    );
  }
};

export default NavBar;
