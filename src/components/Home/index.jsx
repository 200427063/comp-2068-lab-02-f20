import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/Header';
import styles from './styles'
// You need to import your shared header...


const Home = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      <Header/>
      {/* You need a link to your about page as a call to action */}
      <styles.Button>
        <Link to = "../About">About</Link>
      </styles.Button>
    </>
  );
}
 
export default Home;