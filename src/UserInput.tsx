import React, {Component} from 'react'; 



interface IUserInputProps {
    userName: string; 
    inputChange(): void; 
}


export default class UserInput extends Component<IUserInputProps, {}>{


    render(){
        return (
            <div className="userInput">
                <input type="text" className="txtUserInput" value={this.props.userName} onChange= {this.props.inputChange}/>
            </div>
        )
    }

}