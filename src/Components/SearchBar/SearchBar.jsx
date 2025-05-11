import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.elements.query.value.trim();
    // const form = event.currentTarget;
    // const formData = new FormData(form);
    // const query = formData.get('query').trim();

    if (query === '') {
      toast.error('Please enter a search query!');

      return;
    }
    onSearch(query);
    form.reset();
  };
  return (
    <header className={css.Searchbar}>
      <form className={css.Searchform} onSubmit={handleSubmit}>
        <input
          className={css.Searchform_input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.FormBtn} type="submit">
          Search
        </button>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </header>
  );
};

export default SearchBar;
