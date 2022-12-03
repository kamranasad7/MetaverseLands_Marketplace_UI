import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import LandList from './components/LandList';

import mallConfig from './mallConfig'

function App() {
  return (
    <>
      <Nav />
      <LandList mallConfig={mallConfig} />
    </>
  );
}

export default App;
