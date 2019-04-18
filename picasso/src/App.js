import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login/Login';
import Logout from './components/Navbar/Logout';
import Private from './components/Private';
import PayloadForm from './components/PayloadForm/PayloadForm';
import ResultImages from './components/ResultImages';

import { baseURL, testURL, fetchStyleImages, submitPayload, login, signup } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Route
            exact path='/'
            render={props => (
              <PayloadForm
                {...props}
                error={this.props.error}
                baseURL={baseURL}
                testURL={testURL}
                fetchStyleImages={this.props.fetchStyleImages}
                fetchingStyles={this.props.fetchingStyles}
                styleImages={this.props.styleImages}
                submitPayload={this.props.submitPayload}
                submitDeepPayload={this.props.submitDeepPayload}
                submittingPayload={this.props.submittingPayload}
                resultImages={this.props.resultImages}
                deepProcess={this.props.deepProcess}
              />
            )}
          />
          <Route
            path='/result/:key'
            render={props => (
              <ResultImages
                {...props}
                error={this.props.error}
                resultImages={this.props.resultImages}
              />
            )}
          />
          <Route
            path='/login'
            render={props => (
              <Login
                {...props}
                error={this.props.error}
                login={this.props.login}
                loggingIn={this.props.loggingIn}
              />
            )}
          />
          <Route
            path='/logout'
            render={props => (<Logout {...props} />)}
          />
          <Route
            path='/signup'
            render={props => (
              <Login
                {...props}
                error={this.props.error}
                signup={this.props.signup}
                signingUp={this.props.signingUp}
              />
            )}
          />
          <PrivateRoute
            exact path='/private'
            component={Private}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ error, loggingIn, signingUp, fetchingStyles, styleImages, submittingPayload, resultImages, deepProcess }) => ({ error, loggingIn, signingUp, fetchingStyles, styleImages, submittingPayload, resultImages, deepProcess })

export default connect(
  mapStateToProps,
  { fetchStyleImages, submitPayload, login, signup }
)(App);
