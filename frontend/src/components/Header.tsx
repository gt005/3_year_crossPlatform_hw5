import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const userName = localStorage.getItem('userName');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

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
        {userName ? (
          <div>
            <div className="header__link text-large">
              {userName}
            </div>
            <div className="header__link text-large" onClick={handleLogout}>
              Выйти
            </div>
          </div>
        ) : (
          <Link to={'/login'}>
            <div className="header__link text-large">
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
