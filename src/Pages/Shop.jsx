import React from 'react';
import SHOP_DATA from './ShopData';
import './Shop.scss';
import { render } from '@testing-library/react';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: SHOP_DATA
        }
    }


render() {
    return (
      <div>SHOP PAGES</div>
    )
  }
}


export default ShopPage;