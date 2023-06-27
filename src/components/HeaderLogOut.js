import './Header.css';
import { postLogout } from '../utils/fetchAPI';

const HeaderLogOut = () => {
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleImageClick = () => {
    window.location.href = '/mypage';
  };

  const handleLogout = () => {
    // 로고 클릭시 로그아웃 하시겠습니까? 페이지로
    postLogout().then(() => window.location.reload());
    console.log('Logged out');
  };

  return (
    <div className="HeaderLogOut">
      <div className="HeaderContainer LogOutHeader">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/800px-Stack_Overflow_logo.svg.png"
            alt="로고"
            onClick={handleLogoClick}
          />
        </div>
        <div>
          <input placeholder="Search..." />
        </div>
        <div>
          <div>
            <img
              src="https://i.namu.wiki/i/574pnHGZdIAcZo6PHunSmn6HKhzF60TpXfOt9t9LDfxdxmlL6dV7xo21XsNee4Si3bGQohraLKJox23lSqOtQUVjjxzu1Lil3JemCE01IM1LrdWX-XzaHuhxvmk2aHxjVrXGq0vcp0Bc_xWSlDdeng.webp"
              alt="마이페이지"
              onClick={handleImageClick}
            />
          </div>
        </div>
        <div>
          <button className="LogOut_btn" onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogOut;
