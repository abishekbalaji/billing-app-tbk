import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";

import CheckoutItem from "../checkout-item/checkout-item.component";
import { selectCategoryItems } from "../../redux/items-display/items.selectors";

const Checkout = ({ items }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Name</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {items.map((item) => (
      <CheckoutItem item={item} key={item.id} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCategoryItems,
});

export default connect(mapStateToProps)(Checkout);
