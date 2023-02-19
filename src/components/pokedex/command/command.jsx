import './command.css'

function Command() {
    
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
    return(
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
    )
}

export default Command