import React from 'react';
 
function CatList(props) {

 return (
   <div>
     {props.cats.map(cat => <li>{cat}</li> )}
   </div>
 )
}
 
export default CatList;
