import React, {Component} from 'react';
import axios from 'axios';

class About extends Component {

    state = {
        posts: []
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
    render() {
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto quisquam, excepturi, vel sint itaque tempore laborum obcaecati recusandae aspernatur, vitae a perspiciatis labore. Temporibus hic numquam nostrum magni ipsa.</p>
                    </div>
                )
            })
        ) : (
            <div className="center">No Posts Yet</div>
        );

        return(
            <div className="container">
                <h4 className="center">About</h4>
                {postList}
            </div>
        )
    }
}

export default About
