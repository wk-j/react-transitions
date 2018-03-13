import * as Animated from "animated/lib/targets/react-dom"
import React from "react"

type State = {
    animate: any
}

// tslint:disable-next-line:no-shadowed-variable
export const AnimatedWrapper = WrapperdComponent => class AnimatedWrapper extends React.Component<{}, State> {
    constructor(props) {
        super(props)
        this.state = {
            animate: new Animated.Value(0)
        }
    }

    public componentWillAppear(cb) {
        Animated.spring(this.state.animate, { toValue: 1 }).start()
        cb()
    }

    public componentWillEnter(cb) {
        setTimeout(() => Animated.spring(this.state.animate, { toValue: 1 }).start(), 250)
        cb()
    }

    public render() {
        const style = {
            oparcity: Animated.template`${this.state.animate}`,
            transform: Animated.template`
                translate3d(0, ${this.state.animate.interpolate({
                    inputRange: [0, 1],
                    outputRanage: ["12px", "0px"]
                })})
            `
        }
        return (
            <Animated.div style={style} className="animated-page-wrapper" >
                <WrapperdComponent {...this.props} />
            </Animated.div >
        )
    }
}