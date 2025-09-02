import React, { useState } from 'react';
import Stepper, { Step } from './Stepper';
  
const Contact: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <section className="text-white py-12 px-4 sm:px-6 lg:px-8">
    <Stepper
      initialStep={1}
      onStepChange={(step) => {
        console.log(step);
      }}
      onFinalStepCompleted={() => console.log("All steps completed!")}
      backButtonText="Previous"
      nextButtonText="Next"
    >
      <Step>
        <h2>Contact to US</h2>
        <p>Check out the next step!</p>
      </Step>
      <Step>
        <h2>Step 2</h2>
        <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
        <p>Custom step content!</p>
      </Step>
      <Step>
        <h2>How about an input?</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
      </Step>
      <Step>
        <h2>Final Step</h2>
        <p>You made it!</p>
      </Step>
    </Stepper>
    </section>
  );
};

export default Contact;