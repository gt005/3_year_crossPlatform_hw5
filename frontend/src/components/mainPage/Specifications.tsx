const Specifications = () => {
  return (
    <div className="specifications grid-container">
      <h2 className="specifications__main-text">Более 5 лет создаем мебель для вашего комфорта</h2>
      <div className="specifications__info">
        <div className="specifications__info__main-text-container">
          <div className="specifications__info__main-text-container__text-part text-normal">Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти производственное решение любой задумки.</div>
          <div className="specifications__info__main-text-container__text-part text-normal">Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.</div>
          <div className="specifications__info__main-text-container__text-part text-normal">В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу.</div>
        </div>
        <div className="specifications__info__list">
          <div className="specifications__info__element">
            <h3 className="specifications__info__element__main-text">1 год</h3>
            <div className="specifications__info__element__secondary-text text-normal">гарантии на всю <br />продукцию</div>
          </div>
          <div className="specifications__info__element">
            <h3 className="specifications__info__element__main-text">300+</h3>
            <div className="specifications__info__element__secondary-text text-normal">выполненных <br />проектов</div>
          </div>
          <div className="specifications__info__element">
            <h3 className="specifications__info__element__main-text">15 дней</h3>
            <div className="specifications__info__element__secondary-text text-normal">срок производства</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specifications;
