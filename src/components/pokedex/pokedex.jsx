import React from "react"
import './pokedex.css'

function Pokedex({ children }) {

    let pokemonList = document.getElementById('pokemon-list');

    function crossUp() {
        pokemonList.scrollBy(0, -306);
    }
    function crossDown() {
        pokemonList.scrollBy(0, 306);
    }

const searchChange = event => {
    const searchBy = event.target.value.toLowerCase()
    console.log(searchBy)
}

function returnIndex() {
    window.history.back()
}

function forwardIndex() {
    window.history.forward()
}

    return (
        <div className='pokedex'>
            <div className='pokedex-head'>
                <div className="pokedex-head-light"></div>
                <div className="pokemon-head-shadow"></div>
                <div className="big-button">
                    <div className="big-button-border"></div>
                </div>
                <div className="little-button-container">
                    <div className="little-button little-button-red"></div>
                    <div className="little-button little-button-orange"></div>
                    <div className="little-button little-button-green"></div>
                </div>
            </div>
            <div className='screen'>
                <div className="skew skew-left"></div>
                <div className="skew skew-right"></div>
                <div className='sound-speaker-container'>
                    <div className='sound-speaker'></div>
                    <div className='sound-speaker'></div>
                    <div className='sound-speaker'></div>
                </div>
                <div className="pokedex-command-container">
                    <button className="joystick"></button>
                    <div className="select-button-container">
                        <button onClick={returnIndex} className="select-button select-button-left"></button>
                        <button onClick={forwardIndex} className="select-button select-button-right"></button>
                    </div>
                    <div className="search-container">
                        <form>
                            <label>
                                <h3>Search Pokemon:</h3>
                                <input className="search-input" type='text' onInput={searchChange} spellCheck='false' />
                            </label>
                        </form>
                    </div>
                    <div className="cross-container">
                        <div className="cross cross-side">
                            <button className="cross-button cross-button-left"></button>
                            <button className="cross-button cross-button-right"></button>
                        </div>
                        <div className="cross cross-height">
                            <button onClick={crossUp} className="cross-button cross-button-up"></button>
                            <button onClick={crossDown} className="cross-button cross-button-down"></button>
                        </div>
                        <div className="cross-rounded"></div>
                    </div>
                </div>
                <div className='flapper'>
                    <div className='join'></div>
                    <div className='join join2'></div>
                    <div className='join join3'></div>
                    <div className='join join4'></div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Pokedex