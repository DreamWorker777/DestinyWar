import './Fighter.scss';

import teamLogo from '../../assets/img/team1logo.png';
import team from '../../assets/img/team1.png';
import youtubeframe from '../../assets/img/youtubeframe.png';

export const Fighter = () => {
    return (
        <section className="fighter container">
            <div className="fighter__desc">
                <div className="fighter__desc__title">
                    <img alt="pic" src={teamLogo}></img>
                    <span>FIGHTER</span>
                </div>
                <div className="fighter__desc__content">
                    <p>
                        For hundreds of years, the gypsies have been circulated in the East, with Penglai Island, in the West with Kun Lun on the top of the mountain in the Western Great Wall, 
                        all of which are places of harmony between heaven and earth, a fairy scene in the human world. Since the time when Khuong Tu Nha supported Chau to destroy Tru, Mount Kunlun had 
                        attracted many high-ranking Taoists to practice. Whether it's for the sake of immortality, the art of chanting and exchanging dances, or the magic of calling God Dragon, those who 
                        practice immortal arts must have superior qualities as well as a firm mind if they want to achieve true results.. 
                    </p>
                </div>
            </div>

            <div className="fighter__pic">
                <img alt="pic" src={team}></img>
            </div>
        </section>
    )
}

export default Fighter;