import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "./Navigation";

const AppRouter = ( {isLoggedIn} ) => {
    //const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
        {isLoggedIn ? (
            <Route exact path="/">
                <Home />
            </Route>
        ) : (
            <Route exact path="/">
                <Auth />
            </Route>
        )}
        </Switch>
        </Router>
    );
};

export default AppRouter;