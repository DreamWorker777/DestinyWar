import './FooterComponent.scss';

export const FooterComponent = () => {
    return (
        <section className="footerComponent">
            <div className="footerComponent__icons">
                <a href="#javascript;"><i class="fab fa-facebook"></i></a>
                <a href="#javascript;"><i class="fab fa-discord"></i></a>
                <a href="#javascript;"><i class="fab fa-instagram"></i></a>
                <a href="#javascript;"><i class="fab fa-twitter"></i></a>
				<a href="#javascript;"><i class="fab fa-youtube"></i></a>
            </div>

            <div className="footerComponent__copyright">
                <div> Copyright 2021 © All rights Reserved. </div>
                <div> Design by Destiny War Inc. </div>
            </div>
        </section>
    )
}

export default FooterComponent;