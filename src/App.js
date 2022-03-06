import { useState } from 'react';
import { defaultSettings } from './settings';
import Nav from './components/Nav';
import Numbers from './components/Numbers';

function App() {
  const [numbers, setNumbers] = useState(defaultSettings.nums);

  return (
    <div>
      <Nav />
      <main>
        <h3 className="heading-tab">Your Numbers:</h3>
        <Numbers numbers={numbers} />
        <div className="stats">
          {/* Add stat trackers here for when sim is running */}
        </div>
        <div className="controls">
          {/* Add controls here for running sim (run, stop, pause, reset, etc.) */}
        </div>
      </main>
    </div>
  );
}

export default App;
