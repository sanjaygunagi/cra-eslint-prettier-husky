import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

function App({ props }) {
  let a = 1000;

  console.log(a);
  console.log(props);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href='#'>hello</a>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

App.propTypes = {
  name: PropTypes.string,
};
