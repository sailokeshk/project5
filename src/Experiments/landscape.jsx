import React from 'react';

const LandscapeLayout = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>Header</header>
      <main style={styles.main}>
        <section style={styles.sidebar}>Sidebar</section>
        <section style={styles.content}>Main Content</section>
      </main>
      <footer style={styles.footer}>Footer</footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontSize: '1.5rem',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '25%',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '20px',
  },
  footer: {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  },
};

export default LandscapeLayout;