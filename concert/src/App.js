import React from 'react';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import CreateItem from './pages/CreateItem';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';
import EditItem from './pages/EditItem';
import { TicketsContext } from './Components/TicketsContext';
import { TicketsProvider } from './Components/TicketsContext';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
    return (
        <TicketsProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/create" element={<CreateItem />} />
                        <Route path="/list" element={<ItemList />} />
                        <Route path="/detail/:id" element={<ItemDetail />} />
                        <Route path="/edit" element={<EditItem />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/Login" element={<Login />} />
                    </Routes>
                </div>
            </Router>
        </TicketsProvider>
    );
}

export default App;
