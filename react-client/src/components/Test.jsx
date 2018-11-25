import React, {Component} from "react";

class Test extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         url:"",
    //         name :""
    //     },
    //     this.onChange = this.onChange.bind(this);
    // }
    // onChange (txt){
    //     console.log(txt.target.value)
    //     for (var i =0 ; i < this.props.item.length ; i++){
    //     if (txt.target.value === this.props.item.url){
    //         console.log(this.props[i].item.url)
    //        this.setState({
    //            url:this.this.props.item.url
    //      })
    //     }
    // }
    // }
    // changeurl(){
    //     console.log(this.state.url)
    // }

    render() {
        return(
        <div id ="a"> 
        <h1>{this.props.item.name}</h1> 
        <iframe width="720" height="480" src={this.props.item.url}>
        </iframe></div>)
       
    }
    
}
export default Test;

