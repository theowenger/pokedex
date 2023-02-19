import './screen.css'

function Screen({children}) {
    return (
        <div className='screen'>
        {children}
            <div className="skew skew-left"></div>
            <div className="skew skew-right"></div>
            <div className='sound-speaker-container'>
                <div className='sound-speaker'></div>
                <div className='sound-speaker'></div>
                <div className='sound-speaker'></div>
            </div>
        </div>
    )
}

export default Screen