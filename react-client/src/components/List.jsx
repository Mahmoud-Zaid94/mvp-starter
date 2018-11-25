import React from 'react';
//import ListItem from './ListItem.jsx';
import Test from './Test.jsx';
const List = (props) => (
  <div>
   
    { props.items.map(item => <Test item={item}/>)}
  </div>
)

export default List;