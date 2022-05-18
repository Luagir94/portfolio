
import './App.css';
import Routing from './Routing';
import { PortfolioProvider } from './Context/PortfolioContext';
import { NotificationsProvider } from '@mantine/notifications';
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module'
 
// const tagManagerArgs = {
//     gtmId: process.env.REACT_APP_GTM_ID
// }
 
// TagManager.initialize(tagManagerArgs)
// ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID)
function App() {
  return (
    <NotificationsProvider>
      <PortfolioProvider>
    <div className="App">
      <Routing/>
    </div>
    </PortfolioProvider>
    </NotificationsProvider>
  );
}

export default App;
