import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
        <div className={styles.divNav}>
            <h2>Nav</h2>
            <div className={styles.divLinks}>
                <Link to="/home"><span>Home</span></Link>
                <Link to="/"><span>Proyects</span></Link>
            </div>
        </div>
  );
};

export default Nav;
