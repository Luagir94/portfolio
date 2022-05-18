
import './App.css';
import Routing from './Routing';
import { PortfolioProvider } from './Context/PortfolioContext';
import { NotificationsProvider } from '@mantine/notifications';
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module'
 
<<<<<<< HEAD
// const tagManagerArgs = {
//     gtmId: process.env.REACT_APP_GTM_ID
// }
 
// TagManager.initialize(tagManagerArgs)
// ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID)
=======
const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID
}
 
TagManager.initialize(tagManagerArgs)
ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID)
>>>>>>> 8cb589f7b318e446d3931b9852509be4391d6b14
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
