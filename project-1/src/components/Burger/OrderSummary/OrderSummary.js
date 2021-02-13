import React, { Component, Fragment } from "react";

import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // Class based component for debugging with componentDidUpdate()
  componentDidUpdate() {
    console.log("[OrderSummary] did update");
  }

  render() {
    // map through ingredients and create dynamic list with totals
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      ingredient => {
        return (
          <li key={ingredient}>
            <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:{" "}
            {this.props.ingredients[ingredient]}
          </li>
        );
      }
    );
    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
