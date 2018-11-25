import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Mm from './components/Mm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      textbox: ""
    }
  }

  componentDidMount() {
    
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
   
  }

  render () {
    return (<div id="b"><br></br>
      <h1>Video Library</h1>
      <br></br>
      <List items={this.state.items}/>
      
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Mm />, document.getElementById('app2'));