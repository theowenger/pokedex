import './pokedex-head.css'


function PokedexHead() {
    return(
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
    )
}
export default PokedexHead