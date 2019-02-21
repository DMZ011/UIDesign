import React, {Component} from 'react'; 


interface IUserOutputProps {
    userName: string; 
}


export default class UserOutput extends Component<IUserOutputProps, {}>{

    render(){
        return (
            <div className="userOutput">
                <p>Username is: {this.props.userName}</p>
            </div>
        )
    }
}