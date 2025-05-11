import axios from 'axios';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';

// const ApplicationID = 748675;

function App() {
  const [photos, setPhotos] = useState([]);
  // const [query, setQuery] = useState('');

  const handleSearch = async (newInput) => {
    try {
      console.log('Search query:', newInput); //наш новый запрос
      const AccessKey = 'QqOptRXwPPZpniHhBq9tkY5UVVyQ3wiSGt6RQauxpdw';
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${newInput}&client_id=${AccessKey}`,
      );
      setPhotos(response.data.results);
      console.log('Response data:', response.data); //данные с сервера
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && <ImageGallery items={photos} />}
    </>
  );
}

export default App;
