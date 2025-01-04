import React from "react";

function Income({ incomeList, onDeleteIncome}) {
    return(
        <div>
            <h2>Income Table</h2>
            <table style={{ margin: "0 auto", borderCollapse: "collapse", width: "80%" }}>
                <thead style={{ backgroundColor: "#f4f4f4" }}>
                    <tr>
                        <th style={{ padding: "10px", border: "1px solid #ddd", width: "200px", textAlign: "center"}}>Bank</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd", width: "200px", textAlign: "center"}}>Category</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd", width: "200px", textAlign: "center"}}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {incomeList.map((income, index) => (
                        <tr key={index}>
                            <td style={{ padding: "10px", border: "1px solid #ddd", width: "200px", textAlign: "center"}}>{income.bank}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd", width: "200px", textAlign: "center"}}>{income.category}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd", width: "200px", textAlign: "center"}}>{income.amount}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd", width: "200px", textAlign: "center"}}>
                                <button
                                style={{
                                    backgroundColor: "#f44336",
                                    color: "white",
                                    border: "none",
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                  }} 
                                onClick={() => onDeleteIncome(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Income;