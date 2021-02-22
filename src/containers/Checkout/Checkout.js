import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  mySetState = (ingredients, price) => {
    this.setState({ ingredients: ingredients, totalPrice: price });
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        {this.props.ings && (
          <div>
            <CheckoutSummary
              ingredients={this.props.ings}
              checkoutCancelled={this.checkoutCancelledHandler}
              checkoutContinued={this.checkoutContinuedHandler}
            />
            <Route
              path={this.props.match.path + '/contact-data'}
              component={ContactData}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
