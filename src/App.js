import './App.css';
import Header from './Header';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
