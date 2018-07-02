import React, { Component } from 'react';

const Navbar=({pageChange,hide})=>{
	 
	 
		return(
		<div class="ph3">
  <h1 class="f6 fw6 ttu tracked">options</h1>
  <a onClick={()=>pageChange('login')}class="f6 link dim ph3 pv2 mb2 dib white bg-black" >login</a>
  <a onClick={()=>pageChange('up')} class="f6 link dim ph3 pv2 mb2 dib white bg-near-black" >signup</a>
  
  
</div>
);
	
	
}

export default Navbar;