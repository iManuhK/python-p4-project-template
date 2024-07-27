import { useEffect, useState } from "react"

export default function Loan() {
    const API_URI = 'http://127.0.0.1:5555';
    const [loans, setLoans] = useState([])
    useEffect(() => {
        fetch(`${API_URI}/loans`)
           .then(response => response.json())
           .then(data => {
            setLoans(data)
           })
    }, [])
    
    function handleBorrow(e) {
        e.preventDefault()
        console.log("Loan Requested")
        console.log(e.target.value)
    }

    return (
        <>
        <div className="package-info">You qualify to take the offers below</div>
        {loans.map(loan=>{
            return(
                <div key={loan.id} className="loan-card">
                    <h2>{loan.package_name} Package</h2>
                    <h3>{Math.round(loan.rate)}%</h3>

                    <h3>Amount: {loan.amount}</h3>
                    <form className= "borrow" onSubmit={handleBorrow}>
                    onChange={(event) => onFilterTextChange(event.target.value)} 
                        <input type="hidden" name={loan.package_name} value={loan.package_name} />
                        <input type="hidden" name="rate" value={loan.rate} />
                        <input type='button' value="Read more..." />
                        <input type="submit" value="Borrow" />
                    </form>
                </div>
            )
        })}
        </>    
    )
}