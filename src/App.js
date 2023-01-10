import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PageHome from './components/pages/PageHome/PageHome';
import PageAbout from './components/pages/PageAbout/PageAbout';
import PageProduct from './components/pages/PageProduct/PageProduct';
import PageInfo from './components/pages/PageInfo/PageInfo';
import NavBar from './components/navbar/NavBar';
import SearchForm from './components/search/SearchForm';
import PageSearch from './components/pages/PageSearch/PageSearch';



function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
        <SearchForm/>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/products" element={<PageProduct />} />
          {/* rota dinamica */}
          <Route path="/product/:id" element={<PageProduct/>} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
          <Route path='/product/:id/info'element={<PageInfo/>} />
          <Route path='/search' element={<PageSearch/>} />
          {/* redirecionamento de rota */}
        <Route path='/sobre' element={<Navigate to="/about"/>} />
        <Route path='/produtos' element={<Navigate to="/products"/>} />
        <Route path='/produto/:id' element={<Navigate to="/product/:id"/>} />
        <Route path='/produto/:id/info' element={<Navigate to="/product/:id/info"/>} />
        <Route path='/pesquisa' element={<Navigate to="/search"/>} />
        <Route path= '/inicio' element={<Navigate to="/home"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
