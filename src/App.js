import React, {Component} from 'react';
import User from "./components/User/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
inputmain= React.createRef();

state={inputvalue: '', id:''};

    onInputUser=()=>{

        this.setState({inputvalue:this.inputmain.current.value})
    }


    onFormSubmit=(e)=>{
        e.preventDefault();


    }
    ShowUser=()=>{
        this.setState({id:this.inputmain.current.value});


    }



    render() {


        let {inputvalue,id}=this.state;
        let disabled= false;
        if (inputvalue>10 || inputvalue<1){
            disabled=true;
        }
        return (
            <Router>
            <div>
                <form onSubmit={this.onFormSubmit}>

              <input ref={this.inputmain} type={'number'} onInput={this.onInputUser} value={inputvalue}/>

                    <button disabled={disabled} onClick={this.ShowUser} > <Link to={'/users'+'/'+id}>Show </Link></button>

                </form>


                <div>
                    <Switch>
                        <Route path={'/users'+'/'+id} render={()=> {return <User userId={id} key={id}/>}} />

                    </Switch>
                </div>

            </div>

            </Router>
        );
    }
}

export default App;