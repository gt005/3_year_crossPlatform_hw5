const Contacts = () => {
  return (
    <div className="contacts grid-container">
      <img src="img/bilal-mansuri-yJ78NE83YH8-unsplash 1.png" alt="bedroom dark" className="contacts__main-img" />

      <form action="" className="contacts__form">
        <div className="contacts__form__text-container">
          <h2 className="contacts__form__text-container__main-text">Хотите заказать проект?</h2>
          <div className="contacts__form__text-container_secondary-text">Оставьте заявку, и мы вам перезвоним</div>
        </div>

        <div className="contacts__form__application">
          <input type="text" placeholder="Имя" className="contacts__form__application__input text-normal" />
          <input type="email" placeholder="E-mail" className="contacts__form__application__input text-normal" />
          <input type="tel" placeholder="Телефон" className="contacts__form__application__input text-normal" />
          <button type="submit" className="contacts__form__application__submit text-normal">Отправить заявку</button>
        </div>

        <div className="contacts__form__application-stores-cointainer">
          <a href="" className="contacts__form__application-stores-cointainer__link">
            <img src="img/Theme=Black, Store=App Store 1.svg" alt="App store" className="contacts__form__application-stores-cointainer__link__img" />
            <img src="img/Theme=Black, Store=Google Play 1.svg" alt="Google play" className="contacts__form__application-stores-cointainer__link__img" />
          </a>
        </div>
      </form>
    </div>
  );
}

export default Contacts;
