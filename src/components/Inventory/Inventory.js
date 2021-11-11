import './Inventory.scss';
import dwar from '../../assets/img/inventory/11.png';
import mount from '../../assets/img/inventory/22.png';
import pet from '../../assets/img/inventory/33.png';

export const Inventory = () => {
    return (
        <section className="inventory container">
            <div className="inventory__title">
                My Inventory
            </div>

            <div className="inventory__items">
                <div className="inventory__items__dwar">
                    <div className="inventory__items__title">1 DWAR</div>
                    <div className="inventory__items__pic">
                        <span>#123123123</span>
                        <img alt="pic" src={dwar}></img>
                    </div>
                </div>

                <div className="inventory__items__mount">
                    <div className="inventory__items__title">1 MOUNT</div>
                    <div className="inventory__items__pic">
                        <span>#123123123</span>
                        <img alt="pic" src={mount}></img>
                    </div>
                </div>

                <div className="inventory__items__pet">
                    <div className="inventory__items__title">1 PET</div>
                    <div className="inventory__items__pic">
                        <span>#123123123</span>
                        <img alt="pic" src={pet}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inventory;