import './App.css';
import Header from './common/Header';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App mb-3">
      <Header />
      <div className="container-fluid">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
