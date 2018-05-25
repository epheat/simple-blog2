import React from 'react'

import './BlogEntry.css'

// Blog Entry takes the props:
// { image, title, link, content }
export default class BlogEntry extends React.Component {
    constructor() {
        super()
        this.state = {liked: false}

        this.toggleLike = this.toggleLike.bind(this);
    }

    toggleLike() {
        this.setState({liked: !this.state.liked})
    }

    trimContent(content) {
        if (content.length > 300) {
            return content.substr(0, 300) + "..."
        } else {
            return content
        }
    }

    render() {
        return (
            <div className="sb-card col-12">
                <div>[image content]</div>
                <h3>{this.props.title}</h3>
                <p>{this.trimContent(this.props.content)}</p>
                <div className="sb-actions">
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-secondary">Secondary</button>
                    <button className="btn btn-danger">Danger</button>
                    <i onClick={this.toggleLike} className="material-icons like-button">{ this.state.liked ? 'favorite' : 'favorite_border'}</i>
                </div>
            </div>
        );
    }
}