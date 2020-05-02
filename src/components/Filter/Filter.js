import React from 'react'

 const Filter = ({filterContact, type, value}) => (
     <>
     <p>Find contacts by name</p>
     <input 
     onChange={filterContact}
     type={type}
     value={value}>
     </input>
     </>
 );
 
 export default Filter;