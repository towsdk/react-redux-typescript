import React, {Component} from "react";

export default class ClassComponent extends React.Component {

            constructor(props){
                super(props)

                this.state = {
                    count: 0,
                            name: "jewel",
                }
            }

      handleClick = () => {
        console.log("clicked");
        this.setState({ count: this.state.count +1});
      }      
      handleClicked = () => {
        console.log("clicked");
        this.setState({ count: this.state.count -1});
      }      

    render(){
        const {count}= this.state;
        return (
            <div>
                <h3>{count}</h3>
                <button onClick={this.handleClick} disabled={count===8? true:false}>+</button>
                <button onClick={this.handleClicked} disabled={count===0? true: false}>-</button>
                </div>
        );
    }
}
