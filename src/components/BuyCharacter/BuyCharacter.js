import './BuyCharacter.scss';

import title from '../../assets/img/buydwar.png';
import character from '../../assets/img/character.gif';
import buyframe from '../../assets/img/buycharframe.png';
import buyButton from '../../assets/img/buybutton.png';
import mount from '../../assets/img/mount.png';
import pet from '../../assets/img/pet.png';
import one from '../../assets/img/one.png';

export const BuyCharacter = () => {
    return (
        <section className="buyCharacter container">
            <div className="buyCharacter__title">
                <img alt="pic" src={title}></img>
            </div>

            <div className="buyCharacter__content">
                <div className="buyCharacter__content__character">
                    <img alt="pic" src={character}></img>
                </div>

                <div className="buyCharacter__content__main" style={{ backgroundImage: `url('${buyframe}')` }}>
                    <div className="buyCharacter__content__main__desc">                        
                        <p>
                            Player must have Character in order to play the game.<br/>Means you will have to buy atleast 1 Destiny Warrior<br/>
                            to play Destiny War.<br/><br/>Each Charater Contains<br/>Free Wings + 10% PA and MA<br/>Free Tail + 5% PD and MD<br/>
                            Free Complete set every 10 Levels<br/>Free Change Hair Character [Can use only once]
                        </p>
                    </div>

                    <div className="buyCharacter__content__main__one">
                        <div><img src={one} alt="pic"></img></div>
                        
                        <span>TOTAL PRICE</span>

                        <div className="price">
                            0.035BNB
                        </div>

                        <button>
                            <img alt="pic" src={buyButton}></img>
                        </button>
                    </div>

                    <div className="buyCharacter__content__main__total">
                        <div className="buyCharacter__content__main__total__title">
                            TOTAL WARRIOR
                        </div>

                        <div className="buyCharacter__content__main__total__progress">
                            <div>
                                20000
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buyCharacter__content__special">
                    <div className="buyCharacter__content__special__item">
                        <div className="buyCharacter__content__special__item__pic">
                            <img alt="pic" src={mount}></img>
                        </div>

                        <div className="buyCharacter__content__special__item__price">
                            0.035BNB
                        </div>

                        <div className="buyCharacter__content__special__item__buyBtn">
                            <button><img alt="pic" src={buyButton}></img></button>
                        </div>
                    </div>

                    <div className="buyCharacter__content__special__item">
                        <div className="buyCharacter__content__special__item__pic">
                            <img alt="pic" src={pet}></img>
                        </div>

                        <div className="buyCharacter__content__special__item__price">
                            0.035BNB
                        </div>

                        <div className="buyCharacter__content__special__item__buyBtn">
                            <button><img alt="pic" src={buyButton}></img></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuyCharacter;