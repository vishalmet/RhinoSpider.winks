import React, { useState } from 'react'
import SignUp from './components/SignUp'
import Email from './components/Email'
import Password from './components/Password'
import Confirmation from './components/Confirmation'

const App = () => {
  const [currentStep, setCurrentStep] = useState('signup');

  const renderCurrentComponent = () => {
    switch (currentStep) {
      case 'signup':
        return <SignUp onNext={() => setCurrentStep('email')} />;
      case 'email':
        return <Email onNext={() => setCurrentStep('password')} />;
      case 'password':
        return <Password onNext={() => setCurrentStep('confirmation')} />;
      case 'confirmation':
        return <Confirmation />;
      default:
        return <SignUp onNext={() => setCurrentStep('email')} />;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#000000] bg-no-repeat bricolage text-white">
      {renderCurrentComponent()}
    </div>
  );
};

export default App