
import './App.css'
import Header from './Component/Header';
import MainContant from './Component/MainContant';
import Sidebar from "./Component/Sidebar";

function App() {
  return (
<div className="app">
<div id="wrapper">
  <Sidebar />
  <div id="content-wrapper" class="d-flex flex-column">
  <div id="content">
    <Header />
    <div class="container-fluid">
      <MainContant/> 
      </div>
      
    
    
    </div>

   
</div>
</div>
</div> 
  
  );
}

export default App;
