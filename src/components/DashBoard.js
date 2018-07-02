import React, { Component } from 'react';

class DashBoard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      pass:'masterkey674',
      img:''
    }

     fetch('http://localhost:3001/dashbo', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.props.email,
       
        
      })}).then(response=>response.json())
          .then(data=>{
            console.log(data[0].image)
           this.setState({img : data[0].image})
            
          })

      
     
    
  }

  onPassChange = (event) => {
    this.setState({pass: event.target.value})
  }


  
 
          



  onSubmitSignIn=()=>{
     fetch('http://localhost:3001/dashboard', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.props.email,
        password: this.state.pass,
        
      })}).then(response=>response.json())
          .then(data=>{
            if(data==='success'){

                 this.props.onRouteChange('home');
            }
          })
  }
   //  http://tachyons.io/img/avatar_1.jpg
  
	render(){
		return(
          <div>

         
      




          <h1>this is user dashboard</h1>

        
 <article class="mw5 center bg-light-blue br3 pa3 pa4-ns mv3 ba shadow-5 b--black-10">
    <div class="tc">
     <img src={this.state.img} class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of {this.props.email}"/>
    <h1 class="f3 mb2">{`${this.props.email}`}</h1>
    <h2 class="f5 fw4 gray mt0">email </h2>
  </div>
</article>


    <article className="br3 ba b--black-10 mv4 w-100 w-50-m o-70 bg-white w-25-l mw6 green shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Update password</legend>
              <div className="mt3 ">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">new password</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                  type="password"
                  name="pass"
                  id="pass"
                  onChange={this.onPassChange}
                />
              </div>
              
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="change it"
              />
            </div>
            <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
           
          </div>
        </main>
      </article>

           <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => this.props.onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    
</div>
	
);
  }

	
}

export default DashBoard;