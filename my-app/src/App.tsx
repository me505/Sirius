import Header from "./components/Header"
import SideBar from "./components/SideBar";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header/>
       <div className="app_body">
         <SideBar/>
       </div>
    </div>
  ) 
}

export default App;
