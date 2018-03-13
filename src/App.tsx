import React, { ReactPropTypes } from "react"
import { BrowserRouter, HashRouter, Link, Route } from "react-router-dom"
import { TransitionGroup } from "react-transition-group"
import { Home } from "./Home";
import { Subpage } from "./Subpage";

const firstChild = (props) => {
    const childrenArray = React.Children.toArray(props.children)
    return childrenArray[0] || null;
}

export class App extends React.Component<{}, {}> {
    public render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="TopBar">
                        <Link to="/">Home</Link>
                        <Link to="/subpage">Subpage</Link>
                    </div>
                    <Route exact path="/" chidren={({ match, ...rest }) => (
                        <TransitionGroup component={Home}>
                            {match && <Home {...rest} />}
                        </TransitionGroup>
                    )} />
                    <Route exact path="/subpage" chidren={({ match, ...rest }) => (
                        <TransitionGroup component={firstChild}>
                            {match && <Subpage {...rest} />}
                        </TransitionGroup>
                    )} />
                </div>
            </BrowserRouter>
        )
    }
}
