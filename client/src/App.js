import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route exact path="/:id/edit" element={<Update/>} />
        <Route exact path="/:id" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

