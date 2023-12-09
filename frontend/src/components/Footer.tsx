const Footer = () => {
  return (
    <footer className="grid-container">
      <div className="footer__copyright-container">
        <div className="footer__copyright-container__year-text text-large">© 2023 Aveji</div>
        <div className="footer__copyright-container__rights-reserved text-large">Все права защищены</div>
      </div>

      <div className="footer__info-links">
        <a href="" className="footer__info-links__link">Политика конфиденциальности</a>
        <div className="footer__info-links__separator">/</div>
        <a href="" className="footer__info-links__link">Оплата и доставка</a>
      </div>

      <div className="footer__social-networks-links">
        <a href="" className="footer__social-networks-link text-large">Вконтакте</a>
        <a href="" className="footer__social-networks-link text-large">Телеграмм</a>
      </div>
    </footer>
  );
}

export default Footer;
