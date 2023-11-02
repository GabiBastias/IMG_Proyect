import styles from './App.css';
import { Routes, Route } from 'react-router-dom';
import Proyects from './views/Proyects/Proyects';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';

function App () {
  return (
    <div className={styles.divApp}>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route
          path='/'
          element={<Proyects />}
          />
        <Route
          path='/home'
          element={<Home />}
          />
        <Route
          path='/'
          />
      </Routes>
    </div>
  );
}

export default App;
