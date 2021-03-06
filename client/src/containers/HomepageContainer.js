import React, {Component} from 'react';
import Popup from "reactjs-popup";
import City from '../components/City';
import PostForm from '../components/CreatePostForm';
import CityPosts from '../components/CityPosts';
import PostModel from '../models/PostModel';

class HomepageContainer extends Component {
    
    state = {
        currentCity: "London",
        posts: [],
        dummy: true
    }


    componentDidMount = () => {
        PostModel.all()
            .then(res => {
                console.log(res.data);
                this.setState({posts: res.data});
            })
    }

    addPost = (newPost) => {
        let posts = this.state.posts;
        posts.push(newPost)
        this.setState({posts: posts});
    }

    editPost = (newPost) => {
        let objIndex = this.state.posts.findIndex((obj => obj._id === newPost._id));
        this.state.posts[objIndex] = newPost;
        this.setState({posts: this.state.posts})
    }

    deletePost = (deletedPost) => {
        let objIndex = this.state.posts.findIndex((obj => obj._id === deletedPost._id));
        this.state.posts.splice(objIndex, 1)
        this.setState({posts: this.state.posts})
    }

    sydneyChange = () => {
        this.setState({
            currentCity: "Sydney",
        })
    }

    newYorkChange = () => {
        this.setState({
            currentCity: "New York",
        })
    }

    sanFranciscoChange = () => {
        this.setState({
            currentCity: "San Francisco",
        })
    }

    londonChange = () => {
        this.setState({
            currentCity: "London",
        })
    }



    
    render(){
        console.log(this.state.currentCity)
        console.log(this.props)
        
        return(
            <div className="cityPage">
                <City 
                    sydney={this.sydneyChange}
                    newYork={this.newYorkChange}
                    london={this.londonChange}
                    sanFrancisco={this.sanFranciscoChange}
                    currentCity={this.state.currentCity}
                    loggedIn={this.state.loggedIn}
                />
                <div className="postHalf">
                    <Popup trigger={<a className="button makeProfile"> Create Post! </a>} modal>
                        {close => (
                            <div className="modal">
                                <a className="close" onClick={close}>
                                &times;
                                </a>
                                <PostForm 
                                    addPost={this.addPost}
                                    user={this.props.user}
                                    loggedIn={this.props.loggedIn}
                                    currentCity={this.state.currentCity}
                                />
                            </div>)}
                    </Popup>

                    <CityPosts  currentCity={this.state.currentCity} user={this.props.user} posts={this.state.posts} editPost={this.editPost} deletePost={this.deletePost} />

                    {/* <h1 id="newPost">New post made</h1> */}
                </div>
            </div>
        )
    }
}

export default HomepageContainer;