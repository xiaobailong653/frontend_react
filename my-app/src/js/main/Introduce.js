import React, {Component} from 'react';
import '../../css/animations.css';
import '../../css/hover_pack.css';


class Introduce extends Component {
    render () {
        var json = require('../../json/introduce.json');
        var res = [];
        json.introduces.map((item, index) =>  {
            res.push(
                <div className="col-lg-4 col-md-4 col-xs-12 desc">
                    <p>{item.title}</p>
                    <a className="b-link-fade b-animate-go" href="#"><img width="350" src={require("../../" + item.image)} alt="" className="img-circle"/>
                    </a>
                    <p>{item.desc}</p>
                  </div>
            )
        })
        return res
    }
}

export default Introduce
