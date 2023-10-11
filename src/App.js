import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './components/Header';
import View from './Pages/View';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/view/:id/:req/:title' element={<View></View>}></Route>
      </Routes>
    </div>
  );
}


export default App;
