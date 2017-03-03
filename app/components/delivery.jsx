import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/main.css';


const Delivery = () => {
    return (
        <div className="delivery">
            <h2>Мы предлагаем следующие способы доставки:</h2>
            <ul>
            	<li>доставка транспортными фирмами Нова пошта, Ин-тайм</li>
	            <li>курьером по Украине</li>
	            <li>пересылка заказа Укрпочтой </li>
            </ul>
            <h3>Доставка транспортными фирмами Нова пошта, Ин-тайм</h3>
            <p> Доставка товаров платная - оплата доставки осуществляется после получения заказа в указанном Вами отделении "Новой Почты" в Вашем городе. Обычно стоимость услуг доставки составляет от 25 до 60 грн (в зависимости от веса, объёма и оценочной стоимости посылки).
				Для получения заказа необходимо наличие номера декларации, по которой пришел груз, а также документов, удостоверяющих личность получателя (паспорт). Номер декларации присылает Вам менеджер после оплаты заказа (при оплате на карту Приватбанка) или сразу после отправки заказа (в случае наложенного платежа).
				При получении заказа на юридическое лицо, кроме вышеуказанных документов, также необходимо наличие доверенности.
				Вы можете отследить по номеру декларации Вашу посылку на сайте <a href="https://novaposhta.ua/tracking">"Новой Почты"</a>.</p>
            <h3>Курьером по Украине</h3>
            <p> Доставляются только предварительно оплаченные заказы.
				Курьерская доставка осуществляется курьерами компании"Новая почта", "Ин-тайм" до двери заказчика.  Города, в которых доступна эта услуга смотрите на сайтах курьерской службы.
				Пожалуйста, при оформлении заказа указывайте адрес, по которому курьер сможет застать Вас в течение дня.</p>
            <h3>Пересылка заказа Укрпочтой</h3>
            <p> При выборе способа доставки - доставка "Укрпочтой", заказ будет упакован и отправлен ценной посылкой (Вам будет выслано на e-mail письмо с датой отправления).
				Когда посылка окажется на вашем почтовом отделении, в ваш почтовый ящик должно прийти уведомление (доставка уведомления входит в обязанности служащих Укрпочты). 
				В случае наложенного платежа Вы оплатите заказ при получении его на почтовом отделении. При оплате наложенным платежом в сумму входит: сумма заказа + стоимость пересылки + услуги денежного перевода.
				Все дополнительные платежи взимаются Укрпочтой, а не магазином.
				Если Вы оплатили заказ по предоплате (с учетом пересылки), он будет отправлен ценной посылкой после зачисления средств на счет. При получении заказа никакой дополнительной оплаты не потребуется.
				Внимание! Обязательно указывайте в заявке точный индекс Вашего почтового отделения, иначе срок доставки Вашего заказа может существенно увеличиться.</p>
        </div>
    );
};


export default Delivery;