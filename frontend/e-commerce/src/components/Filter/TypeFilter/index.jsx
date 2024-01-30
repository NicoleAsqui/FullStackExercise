import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import './TypeFilter.css';

function TypeFilter({ name, options }) {
  const { selectedCategories, setSelectedCategories } = useContext(SearchContext);

  const handleChange = (event) => {
    const selectedCategory = event.target.name;

    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(selectedCategory)) {
        return prevSelectedCategories.filter((category) => category !== selectedCategory);
      } else {
        return [...prevSelectedCategories, selectedCategory];
      }
    });
  };

  return (
    <div className='TypeFilterContainer'>
      <h2>{name}:</h2>
      {options.map((option, id) => (
        <div key={id} className='CheckBox'>
          <input
            type='checkbox'
            id={option.id}
            name={option.id}
            checked={selectedCategories.includes(option.id)}
            onChange={handleChange}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

export { TypeFilter };
