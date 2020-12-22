import React, {Component} from 'react';
import Post from "../Post/Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from 'react-router-dom';
import Comments from "../comments/Comments";

class Posts extends Component {

    state={posts:[]}

    componentDidMount() {
        const {userId}=this.props;

        fetch('http://jsonplaceholder.typicode.com/posts?userId='+userId)
            .then(value => value.json())
            .then(value => {
                console.log(value);
                this.setState({posts:value})

            })

    }
    render() {
        const {posts}=this.state;
        const {match:{url}}=this.props;
        return (
            <div>
                <h2>Posts:</h2>
                {
                    posts.map(value =><Post item={value} />)
                }
                <hr/>

                <Switch>
                    <Route path={url+'/:id'+'/comments'} render={(props)=>{
                        const {match:{params:{id}}}=props
                        console.log(props)
                        return <Comments postId={id} key={id}/>}}/>


                    }} />


                </Switch>

                <hr/>

            </div>

        );
    }
}

export default withRouter(Posts);