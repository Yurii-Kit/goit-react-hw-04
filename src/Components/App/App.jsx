import './App.css';
import Search from '../SearchBar/Search';

// const AccessKey = QqOptRXwPPZpniHhBq9tkY5UVVyQ3wiSGt6RQauxpdw;
// const ApplicationID = 748675;

function App() {
  const inputValue = (input) => {
    console.log('Search query:', input);
  };
  return (
    <>
      <Search onSubmit={inputValue} />
    </>
  );
}

export default App;
