import React from 'react';
import { Routes, Route } from 'react-router';
import Login from '../pages/login';
import Home from '../pages/home';
import ConditionalRoute from './conditionalRoute';

const createRoutes = () => (
      <Routes>
        <Route path="/login"
            element={
              <ConditionalRoute isProtected={false}>
                <Login />
              </ConditionalRoute>
            }/>
        <Route path="/" 
            element={
              <ConditionalRoute isProtected={true} redirectTo="/login">
                <Home />
              </ConditionalRoute>
            }/>        
      </Routes>
)

export default createRoutes;