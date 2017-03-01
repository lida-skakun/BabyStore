import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/main.css';


const Main = () => {
    return (
        <div className="main">
            <hr />
            <div className="navigation">
                <img id="logo" src="../../img/logo2.png" />
                <div id="mobile"><img src="../../img/44.png" /></div>
                <nav>
                    <a href="/html/">Каталог</a>
                    <a href="/css/">Акции и скидки</a>
                    <a href="/js/">Доставка и оплата</a>
                    <a href="/jquery/">Контакты</a>
                </nav>
                <img src="../../img/baby1.jpg" />
            </div>
            <hr />
            <div className="catalog">
                <div className="listOfItem">
                    <ul>
                        <li>Боди</li>
                        <li>Колготки</li>
                        <li>Костюмы, Платья</li>
                        <li>Кофточки, Батники</li>
                        <li>Куртки, Комбинезоны</li>
                        <li>Маечки, Футболки</li>
                        <li>Носочкии</li>
                        <li>Слюнявчики</li>
                        <li>Трусики</li>
                        <li>Штанишки</li>
                        <li>Шапочки, Шарфики</li>
                    </ul>
                    <img id="baby2" src="../../img/baby2.jpg" />
                </div>
                <div className="categories">
                    <div className="itemGroup">
                        <img src="../../img/bodi.jpg" />
                        <h6>Боди</h6>
                    </div>
                    <div className="itemGroup">
                        <img src="../../img/kolgotki.jpg" />
                        <h6>Колготки</h6>
                    </div>
                    <div className="itemGroup">
                        <img src="../../img/kostum.jpg" />
                        <h6>Костюмы, Платья</h6>
                    </div>
                    <div className="itemGroup">
                        <img src="../../img/kof.jpg" />
                        <h6>Кофточки, Батники</h6>
                    </div>
                    <div className="itemGroup">
                        <img src="../../img/kombi.jpg" />
                        <h6>Куртки, Комбинезоны</h6>
                    </div>
                    <div className="itemGroup">
                        <img src="../../img/footb.jpg" />
                        <h6>Маечки, Футболки</h6>
                    </div>
                    <div className="itemGroup">
                        <img src="../../img/noski.jpg" />
                        <h6>Носочкии</h6>
                    </div>
                    <div className="itemGroup">
                        <img src="../../img/slun.jpg" />
                        <h6>Слюнявчики</h6>
                    </div>
                    <div className="itemGroup">
                        <img src="../../img/trusy.jpg" />
                        <h6>Трусики</h6>
                    </div>
                    <div className="itemGroup">
                        <img src="../../img/shtanu.jpg" />
                        <h6>Штанишки</h6>
                    </div>
                    <div className="itemGroup">
                        <img src="../../img/shapki.jpg" />
                        <h6>Шапочки, Шарфики</h6>
                    </div>
                </div>
                <img id="baby3" src="../../img/baby3.jpg" />
            </div>
            <hr />
            <footer>
                © 2016 АБУ - Детская оджеда
            </footer>
        </div>
    );
};


export default Main;