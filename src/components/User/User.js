import React, {Component} from 'react';
import UserService from "../../services/UserService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from 'react-router-dom';
import Posts from "../Posts/Posts";

class User extends Component {
state={user:[]};

UserService=new UserService();

async componentDidMount() {
const {userId}=this.props;
    const user= await this.UserService.user(userId);
    this.setState({user});
    console.log(this.props);

}


    render() {
    const {user}=this.state;
        const {match:{url}, userId}=this.props;
        return (
            <div>
                {user.id}-{user.name}-{user.email} ---<Link to={url+'/posts'}> Post</Link>

                <hr/>
                <Switch>
                    <Route path={url+'/posts'} render={(props)=>{
                        console.log(props)

                        return <Posts userId={userId} key={userId}/>;
                    }

                    }/>

                </Switch>

                <hr/>

            </div>

        );
    }
}

export default  withRouter (User);