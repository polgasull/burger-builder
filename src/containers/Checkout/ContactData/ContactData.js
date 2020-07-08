import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.scss';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render () {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your name" className={styles.Input} />
          <input type="email" name="email" placeholder="Your email" className={styles.Input} />
          <input type="text" name="street" placeholder="Street" className={styles.Input} />
          <input type="text" name="postal" placeholder="Postal Code" className={styles.Input} />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;