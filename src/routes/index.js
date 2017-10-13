import React, { Component } from 'react';
import { ActivityIndicator } from 'antd-mobile';
import { BrowserRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';


const LoadingComponent = (props) => {
    if (props.error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else if (props.timedOut) {
        return <div>Taking a long time...</div>;
    } else if (props.pastDelay) {
        return <ActivityIndicator
            toast
            text="正在加载..."
            animating
        />;
    }
    else {
        return null;
    }
};

const AsyncApp = Loadable({
    loader: () => import("../containers/App"),
    loading: LoadingComponent,
    delay: 1000,
    timeout: 10000,
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