import { ReviewElementProps } from './types';


const ReviewElement = ({ reviewAuthor, reviewText }: ReviewElementProps) => {
    return (
        <div className="reviews__element">
            <img src="img/quotes.svg" alt="quotes icon" className="reviews__element__quotes-img" />
            <div className="reviews__element__username-text">{reviewAuthor}</div>
            <div className="reviews__element__review-text">{reviewText}</div>
        </div>
    );
}

export default ReviewElement;
