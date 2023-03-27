import logo from './logo.svg';
import './App.css';
import search from './images/seardh.png';

function App() {
  return (
    <div className="App">

      <div className='Nav'>

        <p className='NavItem'> Home </p>
        <p className='NavItem'> Contacts</p>
        <p className='NavItem'> About </p>

      </div>


      <div className='searchBar'>
        <img className='search-img' src={search} />
        <input type="text"/>
      </div>

      
    </div>
  );
}

export default App;
