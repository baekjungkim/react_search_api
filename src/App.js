import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { List, SearchInput } from './component/index';

function App() {
  return (
    <BrowserRouter>
      <SearchInput />
      <Routes>
        <Route path='/search/:keyword' element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
