import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { dataContext } from "./shared/context/data-context";
import { ToastContainer } from "react-toastify";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import logo from "./shared/img/MakeYourTripPossible_logo.png";
import MainFooterNavigation from "./shared/components/Footer/MainFooterNavigation";
import contactLinks from "./data/contact-links.json";
import allPlaceData from "./data/all-places.json";
import allBlogData from "./data/latest-blogs.json";
import Places from "./places/pages/Places";
import NotFound from "./shared/components/UIElements/NotFound";
import "./shared/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import StickySideBar from "./shared/components/UIElements/StickySideBar";
import BookNow from "./shared/components/UIElements/BookNow";
import Blog from "./places/pages/Blog";
import Policy from "./other/Pages/Policy";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact render={(props) => <Places {...props} />} />
      <Route
        path="/category/:categoryTitle"
        exact
        render={(props) => <Places {...props} />}
      />
      <Route
        path="/trip/:tripTitle"
        exact
        render={(props) => <Places {...props} />}
      />
      <Route path="/blogs" exact render={(props) => <Places {...props} />} />
      <Route
        path="/blogs/:blogTitle"
        exact
        render={(props) => <Blog {...props} />}
      />
      <Route
        path="/book-now"
        exact
        render={(props) => <BookNow {...props} />}
      />
      <Route
        path="/terms-and-condition"
        exact
        render={(props) => <Policy termCondition {...props} />}
      />
      <Route
        path="/cancellation-policy"
        exact
        render={(props) => <Policy canclePolicy {...props} />}
      />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  );

  return (
    <dataContext.Provider
      value={{
        contacts: contactLinks,
        allPlaces: allPlaceData,
        allBlogs: allBlogData,
      }}
    >
      <Router>
        <MainNavigation logo={logo} />
        <ToastContainer />
        <StickySideBar whatsapp={contactLinks.cl_call} />
        <main>{routes}</main>
        <MainFooterNavigation />
      </Router>
    </dataContext.Provider>
  );
};

export default App;
