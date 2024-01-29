import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import './SortFilter.css';

function SortFilter() {
  const { products, setProducts } = useContext(SearchContext);

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    let sortedProducts = [...products];
    switch (selectedOption) {
      case 'Name':
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Price_Low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'Price_High':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setProducts([...sortedProducts]);
  };

  return (
    <div className='SortFilterContainer'>
      <select name='order' id='order' onChange={handleSortChange}>
        <option value='Name'>Name</option>
        <option value='Price_Low'>Price: Low to High</option>
        <option value='Price_High'>Price: High to Low</option>
      </select>
    </div>
  );
}

export { SortFilter };