import "./Inventory.scss";
import dwar from "../../assets/img/inventory/11.png";
import mount from "../../assets/img/inventory/22.png";
import pet from "../../assets/img/inventory/33.png";
import { useState, useEffect } from "react";
import { getItemProperty, getNumber } from "../../helpers/contract";

export const Inventory = ({ walletAddress }) => {
  const [characterId, setCharacterId] = useState();
  const [characterUri, setCharacterUri] = useState();

  const [mountId, setMountId] = useState();
  const [mountUri, setMountUri] = useState();

  const [petId, setPetId] = useState();
  const [petUri, setPetUri] = useState();

  useEffect(() => {
    const initDatas = async () => {
      if (window.ethereum && !!walletAddress) {
        let _property = await getItemProperty(walletAddress, 1);
        if (!!_property) {
          let _characterId = await getNumber(_property.number);
          setCharacterId(_characterId);
          setCharacterUri(_property.image);
        }

        _property = await getItemProperty(walletAddress, 2);
        if (!!_property) {
          let _characterId = await getNumber(_property.number);
          setMountId(_characterId);
          setMountUri(_property.image);
        }

        _property = await getItemProperty(walletAddress, 3);
        if (!!_property) {
          let _characterId = await getNumber(_property.number);
          setPetId(_characterId);
          setPetUri(_property.image);
        }
      }
    };

    initDatas();
  }, [walletAddress]);

  return (
    <section className="inventory container">
      <div className="inventory__title">My Inventory</div>

      <div className="inventory__items">
        {characterId && (
          <div className="inventory__items__dwar">
            <div className="inventory__items__title">1 DWAR</div>
            <div className="inventory__items__pic">
              <span>#{characterId}</span>
              <img alt="pic" src={characterUri}></img>
            </div>
          </div>
        )}
        {mountId && (
          <div className="inventory__items__mount">
            <div className="inventory__items__title">1 MOUNT</div>
            <div className="inventory__items__pic">
              <span>#{mountId}</span>
              <img alt="pic" src={mountUri}></img>
            </div>
          </div>
        )}

        {petId && (
          <div className="inventory__items__pet">
            <div className="inventory__items__title">1 PET</div>
            <div className="inventory__items__pic">
              <span>#{petId}</span>
              <img alt="pic" src={petUri}></img>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Inventory;
