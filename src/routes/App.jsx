import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Layout from '@containers/layout.jsx';
import Home from '@pages/Home.jsx';
import Clientes from '@pages/Clientes';
import Contactanos from '@pages/Contactanos';
import SobreNosotros from '@pages/SobreNosotros';

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
                    <Route path="SobreNosotros" element={<SobreNosotros/>} />
                    <Route path="/Clientes" element={<Clientes/>} />
                    <Route path="/Contactanos" element={<Contactanos/>} />
                    <Route path="*" element={<NotFound/>} /> 
                </Routes> 
                </Layout>       
            </BrowserRouter>
        </AppContext.Provider>    
    );
};

export default App;

