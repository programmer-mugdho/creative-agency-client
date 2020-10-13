import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/Dashboard/Admin/AdminDashboard/AdminDashboard';
import CustomerDashboard from './components/Dashboard/Customer/CustomerDashboard/CustomerDashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute'

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/dashboard/customer'>
            <CustomerDashboard />
          </PrivateRoute>
          <PrivateRoute path='/dashboard/admin'>
            <AdminDashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
