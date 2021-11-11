import './NavBar.scss';

import icon1 from '../../assets/icon/facebook.png';
import icon2 from '../../assets/icon/discord.png';
import icon3 from '../../assets/icon/instagram.png';
import icon4 from '../../assets/icon/twitter.png';
import icon5 from '../../assets/icon/youtube.png';

const info = [
    {
        icon: icon1,
        title: 'Facebook'
    }, 
    {
        icon: icon2,
        title: 'Discord'
    },
    {
        icon: icon3,
        title: 'Instagram'
    },
    {
        icon: icon4,
        title: 'Twitter'
    }, 
    {
        icon: icon5,
        title: 'Youtube'
    }
]

export const NavBar = () => {
    return (
        <section className="navBar">
            <div className="navBar__iconWrapper">
                {
                    info.map((item, index) => (
                        <a className="navBar__iconWrapper__item" key={index} href="#javascript;">
                            <div className="navBar__iconWrapper__item__icon">
                                <img src={item.icon} alt="pic"></img>
                            </div>

                            <div className="navBar__iconWrapper__item__title">
                                {item.title}
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    )
}

export default NavBar;