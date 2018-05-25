import React from 'react'

import BlogEntry from '../components/BlogEntry'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

import BlogPosts from '../posts.json'

export default class Home extends React.Component {
    constructor() {
        super()
        this.blogPosts = BlogPosts;
    }

    posts() {
        return this.blogPosts.map( (item, index) => {
            return (
                <BlogEntry key={index} image={item.image} title={item.title} link={item.link} content={item.content}></BlogEntry>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Simple Blog v2</h1>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-2">
                            <Sidebar></Sidebar>
                        </div>
                        <div className="col-12 col-md-10">
                            { this.posts() }
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}