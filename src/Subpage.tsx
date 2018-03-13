import React from "react"
import { AnimatedWrapper } from "./AnimatedWrapper";

class LocalSubpage extends React.Component<{}, {}> {
    public render() {
        return (
            <h1>Subpage</h1>
        )
    }
}

export const Subpage = AnimatedWrapper(LocalSubpage)