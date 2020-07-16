import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles from './ContactData.module.scss';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients, 
      price: this.state.totalPrice,
      customer: {
        name: 'Pol Gasull',
        address: {
          street: 'Test Street 1',
          zipCode: '08024',
          country: 'Spain'
        },
        email: 'test@email.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({loading: false});
      });
  }

  render () {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your name" className={styles.Input} />
        <input type="email" name="email" placeholder="Your email" className={styles.Input} />
        <input type="text" name="street" placeholder="Street" className={styles.Input} />
        <input type="text" name="postal" placeholder="Postal Code" className={styles.Input} />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
    </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }


    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
          {form}
      </div>  
    );
  }
}

export default ContactData;