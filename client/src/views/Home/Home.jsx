// import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import profileImage from '../../assets/img/Curriculum.jpeg';

const Home = () => {
  // const [wordSpan, setWordSpan] = useState('Visitor');
  // const span = document.getElementById('spanAnimation');
  // console.log(span.clientHeight);
  // console.log(span.clientWidth);
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (wordSpan === 'Visitor') {
  //       setWordSpan('Human');
  //     } else if (wordSpan === 'Human') {
  //       setWordSpan('Visitor');
  //     }
  //   }, 2000);
  // }, [wordSpan]);
  return (
        <main className={styles.divLanding}>
            <h1 id="spanAnimation" className={styles.spanAnimation}>Welcome Visitor!</h1>
            <article>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quas nemo doloribus mollitia saepe cupiditate nisi excepturi? Laudantium neque, eaque, aliquid molestias delectus totam ratione dolore eligendi sed, sapiente repellendus.
              </p>
            </article>
            <div>
              <img className={styles.imgProfile} src={profileImage} alt="profileImage" />
            </div>
        </main>
  );
};

export default Home;
