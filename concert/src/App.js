import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import CreateItem from './pages/CreateItem';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';
import EditItem from './pages/EditItem';
import './App.css';

function App() {
    return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/create" element={<CreateItem />} />
                        <Route path="/list" element={<ItemList />} />
                        <Route path="/detail" element={<ItemDetail />} />
                        <Route path="/edit" element={<EditItem />} />
                    </Routes>
                </div>
            </Router>
    );
}

export default App;
