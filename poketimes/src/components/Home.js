import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'
import { getPosts } from '../actions/getActions'

class Home extends Component {
    handleClick = () => {
        this.props.deletePost(1)
        // this.props.history.push('/about')
    }

    render(){

        this.props.getPosts();
        console.log(this.props);
        const {logs} = this.props.logs;

        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto quisquam, excepturi, vel sint itaque tempore laborum obcaecati recusandae aspernatur, vitae a perspiciatis labore. Temporibus hic numquam nostrum magni ipsa.</p>
                
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logs: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) },
        getPosts: () => { dispatch(getPosts())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)