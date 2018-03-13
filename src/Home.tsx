import React from "react"
import { AnimatedWrapper } from "./AnimatedWrapper";

class LocalHome extends React.Component<{}, {}> {
    public render() {
        return (
            <h1>Home</h1>
        );
    }
}

export const Home = AnimatedWrapper(LocalHome)