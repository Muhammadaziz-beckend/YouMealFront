import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectMain from './main/main';
import Header from './components/header';
import './static/css/style.css'
import Data from './Data/data';
import MainAuth from './auth/main';

const App = () => {

  const { category, filter, setFilter, data, productRef, page, setPage, totalPages, getProduct,ApiUrl } = Data()

  return (
    <Router>
      <Header
        setFilter={setFilter}
        filter={filter}
        ApiUrl={ApiUrl}
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
            filter={filter}
            getProduct={getProduct}
            ApiUrl={ApiUrl}
          />
        }
        />

        <Route path='/auth/*' element={< MainAuth ApiUrl={ApiUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;

