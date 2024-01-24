import { Rating } from './Rating'
import './RatingFilter.css'

function RatingFilter () {
    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer'>
                <Rating stars={4} />
                <Rating stars={3} />
                <Rating stars={2} />
                <Rating stars={1} />
            </div>
        </div>
    )
}

export { RatingFilter }