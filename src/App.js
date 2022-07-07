import './App.css';
import AutoMode from './Components/AutoMode';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Reports from './Components/Reports';
import SideBar from './Components/Sidebar';

function App() {
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
        <Login />
        <Header />
        <SideBar />
        <AutoMode />
        <Reports />
        <Footer />


      </div>
    </div>
  );
}

export default App;
