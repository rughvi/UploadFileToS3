import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Login from '../pages/login';
import Home from '../pages/home';
import FilesManager from '../pages/filesManager';
import UploadFile from '../pages/uploadFile';

import ConditionalRoute from './conditionalRoute';


const createRoutes = () => (
      <Routes>
        <Route path="/" element={ <Navigate to="/home" /> } /> 
        {/* Login route */}
        <Route path="login"
            element={
              <ConditionalRoute isProtected={false}>
                <Login />
              </ConditionalRoute>
            }/>
        {/* Home route */}
        <Route path="home" 
            element={
              <ConditionalRoute isProtected={true} redirectTo="/login">
                <Home />                
              </ConditionalRoute>
            }>

            <Route path="filesManager" element={ <FilesManager/> } />
            <Route path="uploadFile" element={ <UploadFile/> } />
        </Route>
      </Routes>
)

export default createRoutes;