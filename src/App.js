import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { List, SearchInput } from './component/index';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SearchInput />
      <Routes>
        <Route path='/search/:keyword' element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
