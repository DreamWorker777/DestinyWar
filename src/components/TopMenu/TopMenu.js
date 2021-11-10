import './TopMenu.scss';
import metamask from '../../assets/icon/metamask2.png';

export const topMenu = () => {
    return (
        <section className="topMenu container">
            <div className="topMenu__menus">
                <div className="topMenu__menus__item">
                    <a href="#javascript;">HOME</a>
                </div>
                <div className="topMenu__menus__item">
                    <a href="#javascript;">INVENTORY</a>
                </div>
                <div className="topMenu__menus__item">
                    <a href="#javascript;">WHITEPAPER</a>
                </div>
                <div className="topMenu__menus__item">
                    <a href="#javascript;">GAME-WIKIPEDIA</a>
                </div>
                <div className="topMenu__menus__item">
                    <a href="#javascript;">MARKETPLACE</a>
                </div>
            </div>

            <div className="topMenu__dropDownMenu">
                <button className="topMenu__dropDownMenu__icon">
                    <svg stroke="currentColor" fill="#ffffff" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                </button>
                <div className="topMenu__dropDownMenu__content">
                    <a href="#javascript;">HOME</a>
                    <a href="#javascript;">INVENTORY</a>
                    <a href="#javascript;">WHITEPAPER</a>
                    <a href="#javascript;">GAME-WIKIPEDIA</a>
                    <a href="#javascript;">MARKETPLACE</a>
                </div>
            </div>

            <div className="topMenu__button">
                <button>
                    <img src={metamask} alt="pic"></img>
                    Login
                </button>
            </div>
        </section>
    )
}

export default topMenu;