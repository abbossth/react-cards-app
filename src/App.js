import './App.css';
import CardContainer from './components/card-container/card-container';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={ <CardContainer /> }></Route>
        <Route path=':type' element={<CardContainer />}></Route>
      </Route>
    </Routes> 
  )
}

export default App;
