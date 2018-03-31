import React, {Component} from 'react'


class Card extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


class Layout extends Component {
    render () {
        return (
            <div className="two-cols-layout">
                <div className="sidebar">
                    {this.props.children[0]}
                </div>
                <div className="main">
                    {this.props.children[1]}
                </div>
            </div>
        )
    }
}


class Editor extends Component {
    constructor () {
        super()
        this.state = {
            content: '<h1>React.js 小书</h1>'
        }
    }

    render () {
        return (
            <div className="editor-wrapper" dangerouslySetInnerHTML={{__html: this.state.content}}/>
        )
    }

}

export default Editor