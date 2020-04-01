import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Cart from "../Customers/Cart";
import OrderPlaced from "../Customers/OrderPlaced";
import MyOrder from "../Customers/MyOrder";
import Register from "./Register";

/**private routes */
import SellerDashboard from "../PrivateComponents/SellerDashboard";
import AdminDashboard from "../PrivateComponents/AdminDashboard";
import DeliveryPersonDashboard from "../PrivateComponents/DeliveryPersonDashboard";
import UserProfile from "../PrivateComponents/UserProfile";

/**private routes */
import PrivateRouteSeller from "../PrivateRoutes/PrivateRouteSeller";
import PrivateRouteUser from "../PrivateRoutes/PrivateRouteUser";
import PrivateRouteDelivery from "../PrivateRoutes/PrivateRouteDelivery";
import PrivateRouteAdmin from "../PrivateRoutes/PrivateRouteAdmin";

function MainRoute() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/cart" component={Cart} />
      <Switch>
        <PrivateRouteSeller
          exact
          path="/seller-dashboard"
          component={SellerDashboard}
        />
      </Switch>
      <Switch>
        <PrivateRouteAdmin
          exact
          path="/admin-dashboard"
          component={AdminDashboard}
        />
      </Switch>
      <Switch>
        <PrivateRouteDelivery
          exact
          path="/delivery-dashboard"
          component={DeliveryPersonDashboard}
        />
      </Switch>
      <Switch>
        <PrivateRouteUser exact path="/user-profile" component={UserProfile} />
      </Switch>
      <Switch>
        <PrivateRouteUser
          exact
          path="/payment-complete"
          component={OrderPlaced}
        />
      </Switch>
      <Switch>
        <PrivateRouteUser exact path="/myorder" component={MyOrder} />
      </Switch>
    </div>
  );
}
export default MainRoute;
