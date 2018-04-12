import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/animations.css';
import './css/hover_pack.css';

class Headerwrap extends Component {
  render() {
    return (
      <div className="container">
        <div className="row centered">
            <div className="col-lg-8 col-lg-offset-2 mt">
                <h1 className="animation slideDown">河北德雄吊索具有限公司</h1>
                <p className="mt"><button type="button" className="btn btn-cta btn-lg">了解详情</button></p>
            </div>
        </div>
      </div>
    );
  }
}

export default Headerwrap;


// class Production extends Component {
//   render() {
//     var imgs = ["img1.jpg", "img2.jpg", "img3.jpg"];
//     for (var i = imgs.length - 1; i >= 0; i--) {
//     }
//   }
// }

// export default Production;
