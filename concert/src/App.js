import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import CreateItem from './pages/CreateItem';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';
import EditItem from './pages/EditItem';
import { TicketsProvider } from './Components/TicketsContext';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './Context/userContext';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
    return (
        <TicketsProvider>
            <UserContextProvider>
            <Router>
                <div className="App">                
                    <Navbar />
                    <Toaster position='bottom-right' toastOptions={{duration: 3000}} />
                    <Routes>
                        <Route exact path="home" element={<Home />} />
                        <Route path="/create" element={<CreateItem />} />
                        <Route path="/list" element={<ItemList />} />
                        <Route path="/detail/:id" element={<ItemDetail />} />
                        <Route path="/edit" element={<EditItem />} />
                        <Route path="/" element={<Register />} />
                        <Route path="/Login" element={<Login />} />
                    </Routes>
                </div>
            </Router>
            </UserContextProvider>
        </TicketsProvider>
    );
}

export default App;
