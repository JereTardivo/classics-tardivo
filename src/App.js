import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  

  return (

    
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
    

  );




}

export default App;
