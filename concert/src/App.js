import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import CreateItem from './pages/CreateItem';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';
import EditItem from './pages/EditItem';
import { TicketsContext } from './Components/TicketsContext';
import { TicketsProvider } from './Components/TicketsContext';
import './App.css';

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
                    </Routes>
                </div>
            </Router>
        </TicketsProvider>
    );
}

export default App;
