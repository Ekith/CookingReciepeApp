import React from 'react';
import './App.css';

import './style/common.css';
import './style/style.css';


import {Route, Routes} from "react-router-dom";


import ListeRecetteView from "./pages/ListeRecetteView";
import CreerRecette from "./pages/CreerRecette";
import UpBar from "./common/Bar/UpBar";
import Login from "./pages/Login";

import {createClient} from '@supabase/supabase-js';
import HomePage from "./pages/HomePage";
import PrivateRoute from "./PrivateRoute";
import {useAuth} from "./useAuth";
import Disconnect from "./pages/Disconnect";
import RecetteView from "./pages/RecetteView";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseapikey = process.env.REACT_APP_SUPABASE_API_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseapikey);


function App() {

    const { user, loading } = useAuth();

    console.log(user, loading);

    return (
    <div className="App global-container">

        <UpBar/>

        <Routes>
            {/* Route accessible par tous*/}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reciepes" element={<ListeRecetteView />} />
            <Route path="/reciepe" element={<RecetteView />} />
            <Route path="/disconnect" element={<Disconnect />}/>

            {/* Route non accessible par tous*/}
            <Route
                path="/create-reciepe"
                element={
                <PrivateRoute>
                    <CreerRecette />
                </PrivateRoute>
            } />
        </Routes>


    </div>
  );
}

export default App;
