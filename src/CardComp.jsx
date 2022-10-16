import React from 'react'

function CardComp({ quote }) {
    return (
        <div className="card">
            <div>
                <p>{quote.title}</p>
            </div>
            <div>
                <p>{quote.highlight}</p>
            </div>
            {/* <div>
                <img src={quote.image !== 'NA' ? quote.image : 'https://via.placeholder.com/400'} alt={quote.title} />
            </div> */}
            <div>
                <h3>{quote.author}HHHHHHH</h3>
            </div>
        </div>
    )
}

export default CardComp