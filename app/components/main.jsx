import React from 'react';
import {render} from 'react-dom';
import Catalog from './catalog';
import SaleList from './saleList';
import Delivery from './delivery';
import Contacts from './contacts';
import styles from '../../styles/main.css';

export default class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSelectCatalog = this.handleSelectCatalog.bind(this);
        this.handleSelectSale = this.handleSelectSale.bind(this);
        this.handleSelectDelivery = this.handleSelectDelivery.bind(this);
        this.handleSelectContacts = this.handleSelectContacts.bind(this);
        this.state = {
            form: Catalog,
        }
    }

    render () { 
        return <div className="main">
            <hr />
            <div className="navigation">
                <img id="logo" src="../../img/logo2.png" />
                <div id="mobile"><img src="../../img/44.png" /></div>
                <nav>
                    <a onClick={this.handleSelectCatalog}>Каталог</a>
                    <a onClick={this.handleSelectSale}>Акции и скидки</a>
                    <a onClick={this.handleSelectDelivery}>Доставка и оплата</a>
                    <a onClick={this.handleSelectContacts}>Контакты</a>
                </nav>
                <img src="../../img/baby1.jpg" />
            </div>
            <hr />
            <this.state.form />
            <hr />
            <footer>
                © 2016 АБУ - Детская оджеда
            </footer>
        </div>
    }

    
    handleSelectCatalog(evt) {
        this.setState({
            form: Catalog
        });
    }

    handleSelectSale(evt) {
        this.setState({
            form: SaleList
        });
    }

    handleSelectDelivery(evt) {
        this.setState({
            form: Delivery
        });
    }

    handleSelectContacts(evt) {
        this.setState({
            form: Contacts
        });
    }
}