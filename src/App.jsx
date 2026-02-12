import Noise from './components/Noise/Noise';
import LightRays from './components/LightRays/LightRays';
import Cursor from './components/Cursor/Cursor';
import Card from './components/Card/Card';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Noise />
      <LightRays
        raysOrigin="right"
        raysColor="#ffffff"
        raysSpeed={3}
        lightSpread={2}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.22}
        distortion={0.4}
        pulsating={false}
        fadeDistance={1.3}
        saturation={1}
      />
      <Cursor />
      <Card />
    </div>
  );
}

export default App;
