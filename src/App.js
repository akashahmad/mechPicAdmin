import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./container/login";
// import SignUp from "./container/signUp";
import Layout from "./layout";
// import HomePageTemplate from "./container/index";
// import "./App.css";
import "./assets/style/style.css";

const App = () => {
  return (
    <>
      {/* <HomePageTemplate /> */}
      <Switch>
        {/* <Route path="/sign-up" component={SignUp} /> */}
        <Route path="/login" component={Login} />
        <Route path="/" component={Layout} />
      </Switch>
    </>
  );
};

export default withRouter(App);
