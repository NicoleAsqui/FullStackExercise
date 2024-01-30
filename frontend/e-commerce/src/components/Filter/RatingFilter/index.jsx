import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import { Rating } from './Rating';
import './RatingFilter.css';

function RatingFilter() {
  const { products } = useContext(SearchContext);

  const uniqueRates = [...new Set(products.map((product) => (
    product.rating ? Math.round(product.rating.rate) : null)))].sort(
    (a, b) => a - b
  );

  return (
    <div className='RatingFilterContainer'>
      <h2>Rates:</h2>
      <div className='RatingsContainer'>
        {uniqueRates.map((rate, index) => (
          <Rating key={index} stars={rate} />
        ))}
      </div>
    </div>
  );
}

export { RatingFilter };
