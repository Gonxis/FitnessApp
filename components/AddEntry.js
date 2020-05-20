import React, { Component } from "react"
import { View, Text } from "react-native"
import { getMetricMetaInfo } from "../utils/helpers"

export default class AddEntry extends Component {

    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0
    }

    increment = metric => {
        const { max, step } = getMetricMetaInfo(metric)

        this.setState((currentState) => {
            const count = currentState[metric] + step

            return {
                ...currentState,
                [metric]: count > max ? max : count 
            }
        })
    }

    decrement = metric => {

        this.setState((currentState) => {
            const count = currentState[metric] - getMetricMetaInfo(metric).step

            return {
                ...currentState,
                [metric]: count < 0 ? 0 : count 
            }
        })
    }

    render() {
        return (
            <View>
                <Text>Add Entry</Text>
                {getMetricMetaInfo("bike").getIcon()}
            </View>
        )
    }
}