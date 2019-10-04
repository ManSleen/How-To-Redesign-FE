import React from 'react';
import MyGuideCard from './MyGuideCard';

const MyGuides = () => {
  return (
    <div className="my-guides-container">
      <h2>My Guides</h2>
      <MyGuideCard />
      <MyGuideCard />
      <MyGuideCard />
      <MyGuideCard />
    </div>
  );
};

export default MyGuides;
