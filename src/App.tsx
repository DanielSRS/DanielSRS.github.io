import React, {useEffect} from 'react';
import './App.css';

import Cover from './componentes/Cover/Cover';
import Glass from './componentes/Glass/Glass';
import developerConding from './assets/animations/developerConding.json'
import lottie from "lottie-web";

function App() {
  useEffect(() => {
    const selectedElement = document?.querySelector("#developerAnimation");
    if (selectedElement === null) {
      return;
    }
    lottie.loadAnimation({
      container: selectedElement,
      animationData: developerConding,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);

  return (
    <div className="App">
      <Cover />
      <Glass>
        <div className='rowDiv'>
          <div className='presentationGroup'>
            <p className='presentationText introduction'>Oi, eu sou</p>
            <p className='presentationText name'>Daniel</p>
            <p className='presentationText whatIDo'>Desenvolvedor mobile, web e desktop</p>
          </div>
          <div>
            <div id='developerAnimation'></div>
          </div>
        </div>
      </Glass>
    </div>
  );
}

export default App;
