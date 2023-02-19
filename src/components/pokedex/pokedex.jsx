import React from "react"
import './pokedex.css'
import Flapper from "./flapper/flapper";
import Screen from "./screen/screen";
import Command from "./command/command";
import PokedexHead from "./pokedex-head/pokedex-head";

function Pokedex({ children }) {


    return (
        <div className='pokedex'>
            <PokedexHead />
            <Screen children={children} />
            <Command />
            <Flapper />

        </div>
    )
}

export default Pokedex