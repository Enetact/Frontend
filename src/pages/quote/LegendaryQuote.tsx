import { Avatar } from '@mui/material';
import PersonAvatar from '@/assets/icons/PersonAvatar.svg';

// this is temporary
const LegendaryQuote = ({ state = '' }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Avatar src={PersonAvatar} /> &nbsp;&nbsp;&nbsp;
    <span style={{ fontSize: 14, textAlign: 'right', color: '#273576' }}>
      “Great service, and even better rates!”
      <br />
      <span style={{ fontSize: 12 }}>John Locke - {state} &nbsp;&nbsp;&nbsp;</span>
    </span>
  </div>
);

export default LegendaryQuote;
