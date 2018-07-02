import React from 'react';
import Facebook from './Facebook.js'
import Admin from './Admin.js'
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      admintrue: false
    }
  }
 
 sendData=(email)=>{
  this.props.changeData(email);
 }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }
  onSignUp=()=>{
    this.props.onRouteChange('signout')

  }
onAdminCall=()=>{
 this.setState({admintrue:true})
}
  onSubmitSignIn = () => {
    fetch('https://whispering-escarpment-86728.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })}).then(response=>response.json())
          .then(data=>{
            if(data==='success'){
                 this.props.onRouteChange('home');
            }
          })
   
          this.sendData(this.state.signInEmail);
  }
  changeValue=()=>{
    this.setState({admintrue:false})
  }

  render() {
    const { onRouteChange } = this.props;
    return (<div>
      {(this.state.admintrue===false)?(
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m o-70 bg-light-blue w-25-l mw6 shadow-5 center light-blue">
        <main className="pa4 black-80 ">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
             <div className="">
              <input
                onClick={this.onSignUp}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign up"
              />
            </div>
            
            <div className="">
              <input
                onClick={this.onAdminCall}
                className="b ph3 pv2 input-reset ba pa3 b--black bg-transparent grow pointer f4 dib"
                type="submit"
                value="admin access"
              />
            </div>
            <Facebook/>
                    
          </div>
        </main>
      
      </article>): <Admin toggle={this.changeValue} at={this.state.admintrue}/>}
      </div>

    );
  }
}

export default SignIn;























































/*import React, { Component } from 'react';

const SignIn=({LoadMain})=>{
	
		return(
			<main class="pa4 black-80">
  <form class="measure center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Sign In</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
     
    </fieldset>
    <div class="">
      <input onClick={()=>LoadMain(true)} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    
  </form>
</main>
	
);
	
}

export default SignIn;
*/