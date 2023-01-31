
function Confirm({teetime}){
const price = (teetime.players * teetime.price)

    return (
        <div className="yay">   
            <span >
              
                <h1>CONFIRM BOOKING:</h1>
                <span><strong>Date:</strong> {teetime.date}</span>
                <span><strong>Time:</strong> {teetime.time}</span>
                <span><strong>Players:</strong> {teetime.players}</span>
                <span><strong>Holes:</strong> {teetime.holes}</span>
                <span><strong>Price:</strong> ${teetime.price}</span>
                <h3>TOTAL: Price(${teetime.price}) x Players:({teetime.players}) = ${price}</h3> 
                <button>Book Tee Time</button>
            </span>
        </div>

    )
}
export default Confirm
