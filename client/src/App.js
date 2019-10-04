import React from 'react';
import { Route } from 'react-router-dom';

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

import './scss/index.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/create-guide" component={AddGuide} />
      <Route exact path="/add-step" component={AddStep} />
      <Route exact path="/browse" component={BrowseGuides} />
      <Route exact path="/my-guides" component={MyGuides} />
      <Route exact path="/guide" component={Guide} />
      <Footer />
    </div>
  );
}

export default App;
