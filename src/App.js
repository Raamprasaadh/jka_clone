import './App.css';
import AutoMode from './Components/AutoMode';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Reports from './Components/Reports';
import SideBar from './Components/Sidebar';
import { useSelector } from 'react-redux';

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
        <SideBar />
        <AutoMode />
        <Reports />
        <Footer />
        </div>}


      </div>
    </div>
  );
}

export default App;
