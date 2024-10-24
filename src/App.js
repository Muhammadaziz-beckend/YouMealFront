import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectMain from './main/main';
import Header from './components/header';
import './static/css/style.css'
import Data from './Data/data';

const App = () => {

  const { category, filter, setFilter, data, productRef, page, setPage, totalPages } = Data()

  return (
    <Router>
      <Header
        setFilter={setFilter}
        filter={filter}
      /> {/* Вы можете добавить Header, если это нужно */}
      <Routes>
        <Route path='/' element={
          <ProjectMain
            category={category}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            productRef={productRef}
            data={data}
            setFilter={setFilter}
            filter={filter} />} /> {/* Замените Component на element */}
      </Routes>
    </Router>
  );
}

export default App;

