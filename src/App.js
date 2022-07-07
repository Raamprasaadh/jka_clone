import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import SideBar from './Components/Sidebar';
import { useSelector } from 'react-redux';
import { BrowserRouter as  Router} from "react-router-dom"
import Body from './Components/Body';

function App() {
  const loggedIn = useSelector(state=>state.login.value.loggedIn);
  const uName = useSelector(state=>state.login.value.uName);
  return (
    <div className="App">
      <div className="">
        
        {/*login*/}
        {/*jidoka header*/}
        {/*jidoka side bar*/}
        {/*body 
        **automode
        **product reports
        **quality reports
        */}
        {(!loggedIn)?<Login />:
        <div>
        <Header name={uName} />
        <Router>
          <div className='flex flex-row'>
        <SideBar />
        <div className="bg-gray-300">
        <Body/>
        </div>
        </div>
        </Router>
        
        
        <Footer/>
        </div>}


      </div>
    </div>
  );
}

export default App;
