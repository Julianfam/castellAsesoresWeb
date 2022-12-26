import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Layout from '@containers/layout.jsx';
import Home from '@pages/Home.jsx';
import Login from '@pages/login.jsx';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import Myaccount from '@pages/Myaccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound.jsx';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState'; 
import '@styles/global.scss';

const App = () => {
    const initialState = useInitialState();
    return ( 
        <AppContext.Provider value ={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/recovery-password" element={<PasswordRecovery/>} />
                    <Route path="/send-email" element={<SendEmail/>} />
                    <Route path="/new-password" element={<NewPassword/>} />
                    <Route path="/myaccount" element={<Myaccount/>} />
                    <Route path="/signup" element={<CreateAccount/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/orders" element={<Orders/>} />
                    
                    <Route path="*" element={<NotFound/>} /> 
                </Routes> 
                </Layout>       
            </BrowserRouter>
        </AppContext.Provider>    
    );
};

export default App;

