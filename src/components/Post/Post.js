import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";

class Post extends Component {


    render() {
        const {item, match:{url}}=this.props;
        console.log(this.props)
        return (

            <div>


                {item.userId}-{item.id}-{item.title}----
                <Link to={url+'/'+item.id+'/comments'}> comments</Link>
            </div>
        );
    }
}

export default withRouter(Post);