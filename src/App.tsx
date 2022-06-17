import React, {useState} from 'react';
import { Counter } from "./components/Counter";
import { Outlet } from "react-router-dom";

import {Nav} from "./components/Nav";


export default function App()
{
    return (<div>
            <Nav/>
            <Counter/>
            <Outlet/>
        </div>);
}
