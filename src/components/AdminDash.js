import React, { Component } from 'react';

class AdminDash extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:[],
      email:'random212',
      text:''

    }


      //fetch('http://localhost:3001/dashboard')
      
     
    
  }

  onEmailChange=(event)=>{
    this.setState({email:event.target.value})

  }



  change=(user)=>{
    Object.assign(this.state.user,user);
     
  }
  onSubmitSignIn = () => {
    fetch('http://localhost:3001/admindash', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
     }).then(response=>response.json())
          .then(data=>{
           console.log(data)
           this.setState({text:JSON.stringify(data)});
           this.change(data)
            
          })
   
          
      
  }

  onDelete=()=>{
       fetch('http://localhost:3001/delete', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email : this.state.email
        })  
     }).then(response=>response.json())
          .then(data=>{
          
            
          })
  }
  revert=()=>{
    
  }
	render(){
    {
		return(
          <div>





          <h1>this is admin dashboard</h1>
          
          <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="view data"
              />
              <p> { `{${this.state.text}`} </p>

               


                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">deleting box admin</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">email tob deleted</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              
            </fieldset>
            <div className="">
              <input
                onClick={this.onDelete}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="sure delete"
              />
            </div>
            
          </div>
        </main>
      </article>

           

           <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={this.revert} className='f3 link dim black underline pa3 pointer'>admin Sign Out</p>
        </nav>
    
</div>
	
);
  }}

	
}

export default AdminDash;