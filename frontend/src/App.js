import './App.css';
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider 
} from 'react-router-dom';

import Profile from './pages/retirementAccountLog';
import LandingPage from './pages/landingPage';
import RetirementAccountLog from './pages/retirementAccountLog';
import StockSelection from './pages/stockSelection';
import RetirementSimulation from './pages/retirementSimulation';
import ErrorPage from './pages/errorPage';

// import { PrivateRoute } from './components/privateRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' index  element={<LandingPage/>} />
      <Route path='retirement-accounts' element={<RetirementAccountLog />} />
      <Route path='stock-selection' element={<StockSelection />} exact/>
      <Route path='retirement-simulator' element={<RetirementSimulation />} exact/>
      <Route path='profile' element={<Profile />} exact/>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
