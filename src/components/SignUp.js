


import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      img:''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
   onImgChange = (event) => {
    this.setState({img: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        img:this.state.img
      })}).then(response=>response.json())
          .then(data=>{
            if(data==='yeah'){
                this.props.loadUser(data);
                 this.props.onRouteChange('home');
            }})

          }
    


onSignIn = () => {
  
      
       this.props.onRouteChange('signin');
  }
  render() {
    
    return (
      <article className="br3 ba b--black-10 mv4 w-100 bg-white o-70 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">image url</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="img"
                  id="img"
                  onChange={this.onImgChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
             <div className="">
              <input
                onClick={this.onSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Signin"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }

}

export default SignUp;



















































/*

import React, { Component } from 'react';




const SignUp=({LoadMain})=>{
	
		return(
          

          <article class="pa4 black-80">
  <form action="sign-up_submit" method="get" accept-charset="utf-8">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
      <div class="mt3">
        <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
        <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
      </div>
      <div class="mt3">
        <label class="db fw4 lh-copy f6" for="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
      </div>
      <div class="mt3">
        <label class="db fw4 lh-copy f6" for="text">Name</label>
        <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name"  id="name"/>
      </div>
      <div className="mt3">

        <label class="db fw4 lh-copy f6" for="text">Name</label>
         <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
         </div>
          
   
 
      
    </fieldset>
    <div onClick={()=>LoadMain(true)}class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"/></div>
  </form>
</article>

	
);
	
}

export default SignUp;
*/