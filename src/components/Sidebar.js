import React from 'react'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="row">
                    <div className="col-6 col-md-12">
                        <ul>
                            <li>some</li>
                            <li>important</li>
                            <li>sidebar</li>
                            <li>information</li>
                            <li>goes</li>
                            <li>here</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-12">
                        <ol>
                            <li>more</li>
                            <li>important</li>
                            <li>sidebar</li>
                            <li>information</li>
                            <li>goes</li>
                            <li>here</li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}