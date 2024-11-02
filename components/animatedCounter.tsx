'use client';

import React from 'react';
import CountUp from "react-countup";
import {animationDuration} from "@/constants/uiConstants";

const AnimatedCounter = ({amount} : {amount: number}) => {
    return (
        <CountUp end={amount} decimal="." prefix="$" duration={animationDuration.default} separator=","/>
    );
};

export default AnimatedCounter;