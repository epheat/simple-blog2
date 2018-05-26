import React from 'react'

export default class Toolbar extends React.Component {
    render() {
        return (
            <div className="toolbar card text-white bg-primary">
                <div className="card-text">
                    <div className="row">
                        <div className="col-12 col-sm-6 text-center">
                            Hello world!
                        </div>
                        <div className="col-12 col-sm-6 text-center">
                            Toolbar!
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}