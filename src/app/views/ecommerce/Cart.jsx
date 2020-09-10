import React, { Component, Fragment } from "react";
import {
  Grid,
  Divider,
  Card,
  TextField,
  IconButton,
  Icon,
  Button
} from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getCartList,
  deleteProductFromCart,
  updateCartAmount
} from "app/redux/actions/EcommerceActions";

class Cart extends Component {
  state = {};

  getTotalCost = () => {
    let { cartList = [] } = this.props;
    let totalCost = 0;
    cartList.map(product => {
      totalCost += product.amount * product.price;
    });
    return totalCost;
  };

  handleChange = (event, productId) => {
    let amount = event.target.value;
    let { updateCartAmount, user } = this.props;
    updateCartAmount(user.userId, productId, Math.abs(amount));
  };

  render() {
    let { cartList = [], user, deleteProductFromCart } = this.props;

    return (
      <Card elevation={3} className="cart m-sm-30">
        <div className="cart__topbar py-16 px-16">
          <Grid container>
            <Grid item lg={3} md={3} sm={3} xs={3}></Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
              <h6 className="m-0">Name</h6>
            </Grid>
            <Grid
              item
              lg={true}
              md={true}
              sm={true}
              xs={true}
              className="text-center"
            >
              <h6 className="m-0">Price</h6>
            </Grid>
            <Grid
              item
              lg={true}
              md={true}
              sm={true}
              xs={true}
              className="text-center"
            >
              <h6 className="m-0">Quantity</h6>
            </Grid>
            <Grid
              item
              lg={true}
              md={true}
              sm={true}
              xs={true}
              className="text-center"
            >
              <h6 className="m-0">Total</h6>
            </Grid>
          </Grid>
        </div>
        <Divider></Divider>

        {cartList.map(product => (
          <div key={product.id} className="cart__item py-16 px-16">
            <Grid container alignItems="center">
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="flex flex-middle">
                  <IconButton
                    size="small"
                    onClick={() =>
                      deleteProductFromCart(user.userId, product.id)
                    }
                  >
                    <Icon fontSize="small">clear</Icon>
                  </IconButton>
                  <div className="px-16">
                    <img
                      className="border-radius-4"
                      src={product.imgUrl}
                      alt={product.title}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <h6 className="m-0">{product.title}</h6>
                <p className="mt-8 m-0 text-muted">{product.description}</p>
              </Grid>
              <Grid
                item
                lg={true}
                md={true}
                sm={true}
                xs={true}
                className="text-center"
              >
                <h6 className="m-0">${product.price}</h6>
              </Grid>
              <Grid
                item
                lg={true}
                md={true}
                sm={true}
                xs={true}
                className="text-center"
              >
                <TextField
                  variant="outlined"
                  name="amount"
                  type="number"
                  value={product.amount}
                  onChange={e => this.handleChange(e, product.id)}
                  inputProps={{
                    style: {
                      padding: "10px",
                      width: "70px"
                    }
                  }}
                ></TextField>
              </Grid>
              <Grid
                item
                lg={true}
                md={true}
                sm={true}
                xs={true}
                className="text-center"
              >
                <h6 className="m-0">${product.price * product.amount}</h6>
              </Grid>
            </Grid>
          </div>
        ))}

        <div className="cart__bottom">
          <Divider className="mb-48"></Divider>
          <Grid container className="mb-48 px-16">
            <Grid item lg={3} md={3} sm={3} xs={3}></Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}></Grid>
            <Grid item lg={true} md={true} sm={true} xs={true}></Grid>
            <Grid
              item
              lg={true}
              md={true}
              sm={true}
              xs={true}
              className="text-center"
            >
              <h6 className="m-0">Total</h6>
            </Grid>
            <Grid
              item
              lg={true}
              md={true}
              sm={true}
              xs={true}
              className="text-center"
            >
              <h6 className="m-0">${this.getTotalCost().toFixed(2)}</h6>
            </Grid>
          </Grid>
          <div className="flex flex-middle mb-16 px-16">
            <TextField
              variant="outlined"
              placeholder="Discount Coupon"
              className="flex-grow-1"
              inputProps={{
                style: {
                  padding: "9px 10px"
                }
              }}
            ></TextField>
            <Button className="mx-12" variant="contained" color="secondary">
              Apply
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.props.history.push("/ecommerce/checkout")}
            >
              Checkout
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  getCartList: PropTypes.func.isRequired,
  deleteProductFromCart: PropTypes.func.isRequired,
  updateCartAmount: PropTypes.func.isRequired,
  cartList: state.ecommerce.cartList,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getCartList, deleteProductFromCart, updateCartAmount }
)(Cart);
