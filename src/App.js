import { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import {
  randomLotteryNums,
  compareLotteryNums,
} from './utils';
import {
  defaultSettings,
  defaultNums
} from './config/settings';
import {
  initFinancialStats,
  initWinStats 
} from './config/stats';

import Nav from './components/Nav';
import Numbers from './components/Numbers';
import WinStats from './components/WinStats';
import FinancialStats from './components/FinancialStats';

function App() {
  const [settings, setSettings] = useState(defaultSettings);
  const [sim, setSim] = useState('running'); // initial, running, paused
  const [numsSelected, setNumsSelected] = useState(defaultNums);
  const [numsDrawn, setNumsDrawn] = useState([0, 0, 0, 0, 0, 0]);
  const [winStats, setWinStats] = useState(initWinStats);
  const [financialStats, setFinancialStats] = useState(initFinancialStats);

  const updateSim = () => {
    const newLotteryNums = randomLotteryNums();
    setNumsDrawn(newLotteryNums);

    updateFinancialStats();
    updateWinStats(newLotteryNums);
  }

  const updateFinancialStats = () => {
    setFinancialStats({
      ...financialStats,
      tickets: financialStats.tickets + 1,
      spent: financialStats.spent + settings.pricePerTicket,
    });
  }

  const updateWinStats = (newNums) => {
    const numsMatched = compareLotteryNums(numsSelected, newNums);

    setWinStats({
      ...winStats,
    });
  }

  useInterval(() => {
    if (sim === 'running') updateSim();
  }, (1000 / settings.ticketsPerSecond));

  return (
    <>
      <Nav />
      <main>
        <h3 className="heading-tab">Your Numbers</h3>
        <Numbers numbers={numsSelected} />

        <h3 className="heading-tab">Drawn Numbers</h3>
        <Numbers numbers={numsDrawn} />
        
        <h3 className="heading-tab">Stats</h3>
        <div className="stats">
          <h3 className="heading-tab">Earnings</h3>
          <FinancialStats stats={financialStats} />

          <h3 className="heading-tab">Times Won</h3>
          <WinStats stats={winStats} />
        </div>

        <div className="controls">
          {/* Add controls here for running sim (run, stop, pause, reset, etc.) */}
        </div>
      </main>
    </>
  );
}

export default App;
