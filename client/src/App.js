import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.js';
import NavBar from './components/NavBar.js';
import SubNavBar from './components/SubNavBar.js';
import Footer from './components/Footer.js';
import Home from './components/Home/Home.js';
import UserProfile from './components/UserProfile/UserProfile.js';
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login.js';
import AddGuide from './components/GuideForm/AddGuide.js';
import AddStep from './components/GuideForm/AddStep.js';
import BrowseGuides from './components/BrowseGuides/BrowseGuides.js';
import MyGuides from './components/MyGuides/MyGuides.js';
import Guide from './components/Guide/Guide.js';
import EditGuide from './components/GuideForm/EditGuide.js';

import './scss/index.scss';
console.log(process.env);
function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNavBar />
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/profile" component={UserProfile} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/create-guide" component={AddGuide} />
      <PrivateRoute exact path="/add-step" component={AddStep} />
      <Route exact path="/browse" component={BrowseGuides} />
      <PrivateRoute exact path="/my-guides" component={MyGuides} />
      <Route exact path="/guide/:id" component={Guide} />
      <PrivateRoute exact path="/guide/edit/:id" component={EditGuide} />
      <Footer />
    </div>
  );
}

export default App;
