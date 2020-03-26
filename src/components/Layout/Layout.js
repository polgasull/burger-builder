import React from 'react';

import Aux from '../../hoc/Aux';
import styles from './Layout.module.scss';

const layout = (props) => (
  <Aux>
    <div>
      Toobar, SideDrawer, BackDrop
    </div>
    <main className={styles.content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;