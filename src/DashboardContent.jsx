import "./DashboardContent.css";
import coin from './Coins.png'
import coin1 from './Coins1.png'
import coin2 from './Coins2.png'
import coin3 from './Coins3.png'
import ill from './illustration.png'
import fr from './fr.png'
import fr2 from './fr2.png'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
];


export default function DashboardContent() {
  return (
    <div className="dc">

      <div className="dc-stats">
        <div className="stats-group">
            <div className="stat">
            <img src={coin} alt="" />
          <p>BTC</p>
          <h3>$9784.79</h3>
        </div>
        
        </div>
        <div className="stat">
            <img src={coin1} alt="" />
          <p>LTC</p>
          <h3>$8741.19</h3>
        </div>
        <div className="stat">
            <img src={coin2} alt="" />
          <p>ETH</p>
          <h3>$4567.16</h3>
        </div>
        <div className="stat">
            <img src={coin3} alt="" />
          <p>BNB</p>
          <h3>$6547.79</h3>
        </div>
      </div>

      <div className="dc-grid">
        <div className="box big">

  <div className="mo-header">
    <div>
      <h4>Market Overview</h4>
      <span className="mo-sub">7241.9075 (+2.5%)</span>
    </div>

    <div className="mo-tabs">
      <button className="active">ALL</button>
      <button>1M</button>
      <button>6M</button>
      <button>1Y</button>
      <button>YTD</button>
    </div>
    
    
  </div>
  <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <RechartsDevtools />
    </LineChart>
</div>


        <div className="box">
  <div className="balance-header">
    <h4>Balances</h4>
    <button className="balance-add">+</button>
  </div>

  <p className="balance-label">$ Dollar</p>
  <h2 className="balance-amount">9784.79</h2>
  <img src={ill} alt="" />
</div>

      </div>
      <div className="dc-grid">
<div className="box big">
  <h4 className="ra-title">Recent Activities</h4>

  <div className="ra-list">

    <div className="ra-item">
      <div className="ra-left">
        <div className="ra-icon btc">
          <img src={coin} alt="btc" />
        </div>
        <div>
          <p className="ra-name">Bitcoin</p>
        </div>
      </div>

      <span className="ra-time">10:45:16 AM</span>
      <span className="ra-amount plus">+1545,00</span>
      <span className="ra-status done">Completed</span>
    </div>

    <div className="ra-item">
      <div className="ra-left">
        <div className="ra-icon eth">
          <img src={coin2} alt="eth" />
        </div>
        <div>
          <p className="ra-name">Ethereum</p>
        </div>
      </div>

      <span className="ra-time">09:15:31 AM</span>
      <span className="ra-amount plus">+5649,00</span>
      <span className="ra-status pending">Pending</span>
    </div>

    <div className="ra-item">
      <div className="ra-left">
        <div className="ra-icon ltc">
          <img src={coin1} alt="ltc" />
        </div>
        <div>
          <p className="ra-name">LTC</p>
        </div>
      </div>

      <span className="ra-time">09:01:12 AM</span>
      <span className="ra-amount plus">+4547,00</span>
      <span className="ra-status done">Completed</span>
    </div>

  </div>
</div>


<div className="box team-box">
  <h4 className="team-title">Team</h4>

  <div className="team-item admin">
    <div className="team-icon">
      <img src={fr} alt="admin" />
    </div>
    <div className="team-text">
      <p>Total Admin</p>
      <span>6</span>
    </div>
  </div>

  <div className="team-item member">
    <div className="team-icon">
      <img src={fr2} alt="member" />
    </div>
    <div className="team-text">
      <p>Team Member</p>
      <span>12</span>
    </div>
  </div>
</div>

      </div>

    </div>
  );
}
