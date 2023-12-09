import ReviewElement from './ReviewElement';


const Reviews = () => {
  const reviews = [
    { author: 'Игорь Антонов', text: 'Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне.' },
    { author: 'Ольга Иванова', text: 'После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!' },
    { author: 'Аркадий Макаров', text: 'Aveji – настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!' }
  ];

  return (
    <div className="reviews">
      <h2 className="reviews__main-text">Отзывы</h2>

      <div className="reviews__list">
        {reviews.map((review, index) => (
          <ReviewElement
            key={index}
            reviewAuthor={review.author}
            reviewText={review.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
