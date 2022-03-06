import { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import { randomLotteryNums } from './utils';
import { defaultSettings } from './settings';

import Nav from './components/Nav';
import Numbers from './components/Numbers';

function App() {
  const [settings, setSettings] = useState(defaultSettings);
  const [sim, setSim] = useState('running'); // initial, running, paused
  const [numsSelected, setNumsSelected] = useState(defaultSettings.nums);
  const [numsDrawn, setNumsDrawn] = useState([0, 0, 0, 0, 0, 0]);
  const [stats, setStats] = useState();

  const updateSim = () => {

    setNumsDrawn(randomLotteryNums());
  }

  useInterval(() => {
    if (sim === 'running') updateSim();
  }, (1000 / settings.ticketsPerSecond));

  return (
    <div>
      <Nav />
      <main>
        <h3 className="heading-tab">Your Numbers</h3>
        <Numbers numbers={numsSelected} />

        <h3 className="heading-tab">Drawn Numbers</h3>
        <Numbers numbers={numsDrawn} />
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
