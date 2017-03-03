import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/main.css';


const Contacts = () => {
    return (
        <div className="contacts">
            <p>г. Киев</p>
            <p>ул. Драгоманова 2б</p>
            <p>График работы</p>
			<p>с 9.00 до 21.00 без выходных</p>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1999403000195!2d31.3007608152617!3d51.49119831970939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d548ee40852643%3A0x6d31f8163267194c!2z0LLRg9C7LiDQodC10YDRjNC-0LbQvdGW0LrQvtCy0LAsIDgsINCn0LXRgNC90ZbQs9GW0LIsINCn0LXRgNC90ZbQs9GW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sua!4v1446220129630" width="600" height="450" frameBorder="0" allowFullScreen=""></iframe>
        </div>
    );
};


export default Contacts;