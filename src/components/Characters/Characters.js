import { useEffect, useState } from 'react';
import './Characters.scss';

const imageCount = 14;
const images = require.context('../../assets/img/characters', true);
const slideImages = [ [], [] ];

for( let i = 1; i <= imageCount ; i ++ ) {
    const image = images(`./${i}.png`);
    i < 8 ? slideImages[0].push(image) : slideImages[1].push(image);
}

export const Characters = () => {
    const [val, setValue] = useState(0);
    const [inter, setInter] = useState(0);

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
        <section className="characters container">
            <div className="characters__title">
                CHOOSE YOUR CLASS
            </div>

            <div className="characters__view">
                {
                    slideImages[val].map((item, index) => (
                        <div className="characters__view__item" key={index}>
                            <img alt="pic" src={item.default}></img>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Characters;