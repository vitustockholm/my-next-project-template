import Link from 'next/Link';

import style from '../../styles/Header.module.css';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>Logo</div>
        <nav>
          <ul className={style.navigation}>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/articles'>Articles</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* -- Style -- */}

      {/* <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
        }

        header div {
          display: flex;
          align-items: center;
        }

        header nav ul {
          list-style: none;
          display: flex;
        }

        header nav ul li {
          list-style: none;
          display: flex;
        }
        header nav ul li {
          padding: 0 10px;
        }
      `}</style> */}
    </>
  );
};

export default Header;
