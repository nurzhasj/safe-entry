import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import Error from './pages/Error';
import Single from './pages/Single';
import New from './pages/New';
import NewCar from './pages/NewCar';
import Recognize from './pages/Recognize';
import RecognizeCar from './pages/RecognizeCar';
import Reco from "./pages/Reco";
import { DarkModeContext } from './context/darkModeContext';

import './app.css';
import './style/dark.scss';


const App = () => {
    const {darkMode} = useContext(DarkModeContext)

   return (
    <Router>
        <div className={darkMode ? "app dark" : "app"}>
        <Routes>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='recognize' element={<Recognize/>}/>
            <Route path='reco' element={<Reco/>}/>
            <Route path='recognize-car' element={<RecognizeCar/>}/>
    
            <Route path='students'>
                <Route index element={<List tableType="people" userType="student" />}/>
                <Route path=':entryId' element={<Single/>}/>
                <Route path='new' element={<New/>}/>
            </Route>
            <Route path='employees'>
                <Route index element={<List tableType="people" userType="employee" />}/>
                <Route path=':entryId' element={<Single/>}/>
                <Route path='new' element={<New/>}/>
            </Route>
            <Route path='cars'>
                <Route index element={<List tableType="cars"/>}/>
                <Route path='new' element={<NewCar/>}/>
            </Route>
            <Route path='*' element={<Error/>}/>
        </Routes>
        </div>
    </Router>
  )  
}

export default App