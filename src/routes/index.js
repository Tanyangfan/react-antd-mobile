import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const LoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const AsyncApp = Loadable({
    loader: () => import("../containers/App"),
    loading: LoadingComponent
});


class AppRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={AsyncApp} />
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRoute;