import "./BuyCharacter.scss";

import title from "../../assets/img/buydwar.png";
import character from "../../assets/img/character.gif";
import buyframe from "../../assets/img/buycharframe.png";
import buyButton from "../../assets/img/buybutton.png";
import mount from "../../assets/img/mount.png";
import mount_gif from "../../assets/img/Egg.gif";
import pet from "../../assets/img/pet.png";
import pet_gif from "../../assets/img/pet.gif";
import one from "../../assets/img/one.png";

import eggs from "../../assets/img/eggs.png";
import egg from "../../assets/img/egg.png";

export const BuyCharacter = ({
  mintLoading,
  onMintCharacterHandler,
  onMintMountHandler,
  onMintPetHandler,
  totalSupply,
}) => {
  return (
    <section className="buyCharacter container">
      <div className="buyCharacter__title">
        <img alt="pic" src={title}></img>
      </div>

      <div className="buyCharacter__content">
        <div className="buyCharacter__content__character">
          <img alt="pic" src={character}></img>
        </div>

        <div
          className="buyCharacter__content__main"
          style={{ backgroundImage: `url('${buyframe}')` }}
        >
          <div className="buyCharacter__content__main__desc">
            <p>
              Player must have Character in order to play the game.
              <br />
              Means you will have to buy atleast 1 Destiny Warrior
              <br />
              to play Destiny War.
              <br />
              <br />
              Each Charater Contains
              <br />
              Free Wings + 10% PA and MA
              <br />
              Free Tail + 5% PD and MD
              <br />
              Free Complete set every 10 Levels
              <br />
              Free Change Hair Character [Can use only once]
            </p>
          </div>

          <div className="buyCharacter__content__main__one">
            <div>
              <img src={one} alt="pic"></img>
            </div>

            <span>TOTAL PRICE</span>

            <div className="price">0.035BNB</div>

            <button onClick={() => {
                  if (!mintLoading) onMintCharacterHandler(1);
                }}>
              <img alt="pic" src={buyButton}></img>
            </button>
          </div>

          <div className="buyCharacter__content__main__total">
            <div className="buyCharacter__content__main__total__title">
              TOTAL WARRIOR
            </div>

            <div className="buyCharacter__content__main__total__progress">
              <div className="buyCharacter__content__main__total__progress__left">
                <span className="description">TOTAL MENTOS:</span>

                <span className="value">50K</span>

                <img src={eggs} alt="pic"></img>
              </div>

              <div className="buyCharacter__content__main__total__progress__bar">
                <div className="buyCharacter__content__main__total__progress__bar__desc">
                  <span className="description">MINTED MENTOS</span>
                  <span className="value">{totalSupply}</span>
                </div>

                <div className="buyCharacter__content__main__total__progress__bar__main">
                  <div className="buyCharacter__content__main__total__progress__bar__main__current"></div>
                </div>
              </div>

              <div className="buyCharacter__content__main__total__progress__right">
                <span className="description">TOTAL LEFT:</span>

                <span className="value">{50000 - totalSupply}</span>

                <img src={egg} alt="pic"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="buyCharacter__content__special">
          <div className="buyCharacter__content__special__item">
            <div className="buyCharacter__content__special__item__pic">
              <img alt="pic" src={mount}></img>
              <img
                alt="pic"
                src={mount_gif}
                className="buyCharacter__content__special__item__pic__gif"
              ></img>
            </div>

            <div className="buyCharacter__content__special__item__price">
              0.035BNB
            </div>

            <div className="buyCharacter__content__special__item__buyBtn">
              <button onClick={() => {
                  if (!mintLoading) onMintMountHandler(1);
                }}>
                <img alt="pic" src={buyButton}></img>
              </button>
            </div>
          </div>

          <div className="buyCharacter__content__special__item">
            <div className="buyCharacter__content__special__item__pic">
              <img alt="pic" src={pet}></img>
              <img
                alt="pic"
                src={pet_gif}
                className="buyCharacter__content__special__item__pic__gif"
              ></img>
            </div>

            <div className="buyCharacter__content__special__item__price">
              0.035BNB
            </div>

            <div className="buyCharacter__content__special__item__buyBtn">
              <button onClick={() => {
                  if (!mintLoading) onMintPetHandler(1);
                }}>
                <img alt="pic" src={buyButton}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyCharacter;
