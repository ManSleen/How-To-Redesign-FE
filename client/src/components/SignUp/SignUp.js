import React from 'react';

import AltHeroImage from './AltHeroImage';
import SignUpForm from './SignUpForm';

const SignUp = ({ history }) => {
  return (
    <div>
      <AltHeroImage text="Welcome to How-To!" />
      <SignUpForm history={history} />
    </div>
  );
};

export default SignUp;
