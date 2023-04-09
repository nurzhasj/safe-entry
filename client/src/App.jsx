import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import Error from './pages/Error';
import Single from './pages/Single';
import New from './pages/New';
import Recognize from './pages/Recognize';

const App = () => {
   return (
    <Router>
        <Routes>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='recognize' element={<Recognize/>}/>
            <Route path='students'>
                <Route index element={<List/>}/>
                <Route path=':stuId' element={<Single/>}/>
                <Route path='new' element={<New/>}/>
            </Route>
            <Route path='employees'>
                <Route index element={<List/>}/>
                <Route path=':empId' element={<Single/>}/>
                <Route path='new' element={<New/>}/>
            </Route>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </Router>
  )  
}

export default App