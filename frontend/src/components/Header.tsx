import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('serverJwt');

    navigate('/');
  }

  return (
    <header className="grid-container">
      <div className="header__logo">
        <Link to={'/'}>
          <img src="img/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="header__links">
        <div className="header__link text-large">О нас</div>
        <div className="header__link text-large">Проекты</div>
        <div className="header__link text-large">Материалы</div>
        <div className="header__link text-large">Отзывы</div>
        {username ? (
          <div>
            <div className="header__link text-large">
              {username}
            </div>
            <div className="header__link header__link__cursor-style text-large" onClick={handleLogout}>
              Выйти
            </div>
          </div>
        ) : (
          <Link to={'/login'}>
            <div className="header__link header__link__cursor-style text-large">
              Войти
            </div>
          </Link>
        )}
      </div>
      <div className="header__phone text-large">+7 999 999 99 99</div>
    </header>
  );
}

export default Header;
