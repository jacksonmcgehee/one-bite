import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import axios from 'axios'
// import SkedsList from "./components/SkedsList";
import UserProfile from "./components/UserProfile"

class App extends Component {

    state = {
        signedIn: false,
        skeds: []
    }

    async componentWillMount() {
        try {
            let skeds = []
            if (this.state.signedIn) {
                skeds = await this.getSkeds()
            }

            this.setState({
                skeds
            })
        } catch (error) {
            console.log(error);
        }
    }

    getSkeds = async () => {
        try {
            const response = await axios.get('/skeds')
            return response.data
        } catch (error) {
            console.log(error)
            return []
        }
    }

    signUp = async (email, password, password_confirmation) => {
        try {
            const payload = {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
            await axios.post('/auth', payload)

            this.setState({signedIn: true})

        } catch (error) {
            console.log(error)
        }
    }

    signIn = async (email, password) => {
      try {
          const payload = {
              email,
              password
          }
          await axios.post('/auth/sign_in', payload)

          const skeds = await this.getSkeds()

          this.setState({
              signedIn: true,
              skeds
          })

      } catch (error) {
          console.log(error)
      }
  }

  render() {

      const SignUpLogInComponent = () => (
          <SignUpLogIn
              signUp={this.signUp}
              signIn={this.signIn}/>
      )

      // const SkedsComponent = () => (
      //     <SkedsList
      //         skeds={this.state.skeds}/>
      // )

      const UserProfileComponent = () => (
        <UserProfile skeds={this.state.skeds} />
      )

      return (
          <Router>
              <div>
                  <Switch>
                      <Route exact path="/signUp" render={SignUpLogInComponent}/>
                      <Route exact path='/profile' render={UserProfileComponent} />
                      {/* <Route exact path="/skeds" render={SkedsComponent}/> */}
                  </Switch>

                  {/* If user is signed in, redirect to their skeds. */}
                  {this.state.signedIn ? <Redirect to="/profile"/> : <Redirect to="/signUp"/>}
              </div>
          </Router>
      )
  }
}

export default App
