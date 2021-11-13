import { useEffect, useState } from 'react';
import './Characters.scss';
import './Fighter.scss';

const teamPath = require.context('../../assets/img/team', true);
const teamLogos = [];
const teams = [];

for( let i = 1; i <= 7; i++ ) {
    const image = teamPath(`./team${i}.png`);
    const image1 = teamPath(`./team${i}logo.png`);

    teams.push(image);
    teamLogos.push(image1);
}

const imageCount = 14;
const images = require.context('../../assets/img/characters', true);
const slideImages = [ [], [] ];

for( let i = 1; i <= imageCount ; i ++ ) {
    const image = images(`./${i}.png`);
    i < 8 ? slideImages[0].push(image) : slideImages[1].push(image);
}

const info = [
    {
        team_logo: teamLogos[0],
        team_img: teams[0],
        title: 'FIGHTER',
        desc: `For hundreds of years, the gypsies have been circulated in the East, with Penglai Island, in the West with Kun Lun on the top of the mountain in the Western Great Wall, all of which are places of harmony between heaven and earth, a fairy scene in the human world. Since the time when Khuong Tu Nha supported Chau to destroy Tru, Mount Kunlun had attracted many high-ranking Taoists to practice. Whether it's for the sake of immortality, the art of chanting and exchanging dances, or the magic of calling God Dragon, those who practice immortal arts must have superior qualities as well as a firm mind if they want to achieve true results.<br/><br/>Gravity : Spirit, Man Tiep.`
    },
    {
        team_logo: teamLogos[1],
        team_img: teams[1],
        title: 'GLADIATOR',
        desc: `Thousands of years ago, Gladiator mountain was the land of demons, everything beyond a hundred miles was desolated by evil spirits. In order to prevent disaster for the world, the two patriarchs of Gladiator, the true Tai Chi and Nhat Tam, did not mind the hardships to find this place. After defeating the great demon Long Cot Tinh, the two Taoists established a sect to receive disciples and teach all the great teachings.`
    },
    {
        team_logo: teamLogos[2],
        team_img: teams[2],
        title: 'MAGE',
        desc: `With the magic of calling demons and sending gods, through all 3 realms of Heaven - Earth - Human, Mao Son scared people and mistook them for evil spirits. In the 5th generation, Mao Chan Nhan wanted to change the prejudices of the world, so he devoted all his efforts to promoting greatness, making Mage today famous, attracting many heroic teenagers. afraid to go deep with a cup to worship
        <br/><br/>
        Gravity: Mental, Physical.
        `
    },
    {
        team_logo: teamLogos[3],
        team_img: teams[3],
        title: 'NINJA',
        desc: `Ninja is a mysterious organization that has been rumored in the Gypsies for a long time, famous for its poison and hidden weapons that have buried many famous heroes and knights. It wasn't until the 24th generation that Ninja revealed his whereabouts due to the fact that Tang Hu killed the family to seize the throne. Tang Mon's poisonous weapon is a non-poisonous secret weapon that can easily kill people over a hundred yards away. During the flourishing period of the Zhou Dynasty, the Tang family silently supported and solved many difficulties for the Son of Heaven.`
    },
    {
        team_logo: teamLogos[4],
        team_img: teams[4],
        title: 'PRIEST',
        desc: `Away from the chaos of the Warring States period, Ghost Coc Tu hid in Van Mong lagoon. Studying in meditation for 50 years, he has collected a lot of academic pharmacology, and also composed a series of enchanting magic arrays with extraordinary power. After Ton Tan, Bang Quyen, Ghost Coc Tu also accepted To Tan; These three great disciples have a better temperament than humans. Soon, Priest's reputation became known to the world, attracting thousands of people to worship the scholar.
        <br/><br/>
        Gravity: Mental, Physical
        `
    },
    {
        team_logo: teamLogos[5],
        team_img: teams[5],
        title: 'SWORDSMAN',
        desc: `For hundreds of years, the gypsies have been circulated in the East, with Penglai Island, in the West with Kun Lun on the top of the mountain in the Western Great Wall, all of which are places of harmony between heaven and earth, a fairy scene in the human world. Since the time when Khuong Tu Nha supported Chau to destroy Tru, Mount Kunlun had attracted many high-ranking Taoists to practice. Whether it's for the sake of immortality, the art of chanting and exchanging dances, or the magic of calling God Dragon, those who practice immortal arts must have superior qualities as well as a firm mind if they want to achieve true results.`
    },
    {
        team_logo: teamLogos[6],
        team_img: teams[6],
        title: 'WARRIOR',
        desc: `Legend has it that the martial arts of Warrior were handed down by the great general of the founding of the Zhou Dynasty, Duong Tien, including Ba Vuong Thuong Phap and Phong Ma Bong Phap. The spear method is unequaled, majestic like a beast, and Bong Phap is proud of ten thousand zhang, able to paint islands and seas. Just mastering the two types of martial arts above, you can be the best enemy of ten thousand people, and shake the martial arts.
        <br/><br/>
        In addition, the Military Guards are also trained in a serious military environment, so when they leave the camp, everyone has a strong physique and an iron will to fight.
        `
    }
]

export const Characters = () => {
    const [val, setValue] = useState(0);
    const [inter, setInter] = useState(0);
    const [teamNumber, setTeamNumber] = useState(0); 

    useEffect(() => {
        if( inter > 0) {
            return;
        }

        const timeInterval = setInterval(() => {
            setValue(prev => prev === 0 ? prev + 1 : prev -1);
        }, 1000);

        setInter(timeInterval);
    }, [inter]);

    return (
        <div>
            <section className="characters container">
                <div className="characters__title">
                    CHOOSE YOUR CLASS
                </div>

                <div className="characters__view">
                    {
                        slideImages[val].map((item, index) => (
                            <div className="characters__view__item" key={index} onClick={() => setTeamNumber(index)}>
                                <img alt="pic" src={item.default}></img>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="fighter container">
                <div className="fighter__desc">
                    <div className="fighter__desc__title">
                        <img alt="pic" src={info[teamNumber].team_logo.default}></img>
                        <span>{info[teamNumber].title}</span>
                    </div>
                    <div className="fighter__desc__content">
                        <p dangerouslySetInnerHTML={{
                            __html: info[teamNumber].desc
                        }}>
                        </p>
                    </div>
                </div>

                <div className="fighter__pic">
                    <img alt="pic" src={info[teamNumber].team_img.default}></img>
                </div>
            </section>
        </div>
    )
}

export default Characters;