import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from 'react-router-dom';


class Comments extends Component {
    state={comments:[]};



    componentDidMount() {
        const {postId}=this.props;
        fetch('http://jsonplaceholder.typicode.com/comments?postId='+postId)
            .then(value => value.json())
            .then(value => {
                console.log(value);
                this.setState({comments:value})

            })
    }

    render() {
        const {comments}=this.state;
        console.log(comments)
        return (

            <div>
                <h2>Comments:</h2>
                {comments.map(value => <div>{value.postId}-{value.id}-{value.name}</div>)}

            </div>
        );
    }
}

export default withRouter(Comments);