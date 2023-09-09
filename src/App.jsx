import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './Components/Header';
import People from './Components/People';
import Planets from './Components/Planets';

const App = () => {



  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/people/:id' element={<People />} />
          <Route path='/planets/:id' element={<Planets/>}/>
        </Routes>
      </Router>
    </>

  )
}

export default App;