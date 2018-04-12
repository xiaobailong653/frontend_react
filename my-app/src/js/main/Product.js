import React, { Component } from 'react';
import '../../css/animations.css';
import '../../css/hover_pack.css';


class Production extends Component {
  render() {
    var production = require('../../json/product.json');
    var res = [];

    production.heads.map((item, index) => {
      res.push(
          <div className="col-lg-4 col-md-4 col-xs-12 desc">
            <a className="b-link-fade b-animate-go" href="#"><img width="350" src={require("../../" + item.image)} alt="" />
              <div className="b-wrapper">
                  <h4 className="b-from-left b-animate b-delay03" style={{marginTop: 83 + 'px'}}>Post {index + 1}</h4>
                  <p className="b-from-right b-animate b-delay03">了解详情</p>
              </div>
            </a>
            <p>{item.title}</p>
            <p className="lead">{item.desc}</p>
            <p className="time"><i className="fa fa-comment-o"></i> 3 | <i className="fa fa-calendar"></i> 14 Nov.</p>
          </div>
        );
    });
    return res;
  }
}

export default Production;
