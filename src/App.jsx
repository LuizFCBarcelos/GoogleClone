import './App.css';
import SearchBox from './SearchBox';

function App() {
  return (
    <div className="google-clone">
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google"
        className="logo"
      />
      <SearchBox /> 
      
    </div>
  );
}

export default App;
