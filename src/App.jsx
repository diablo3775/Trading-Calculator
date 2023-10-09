// v1
// import './App.css'
// import { useState } from 'react'

// let totalDays = 20;
// let profitTradesPerDay = 24;
// let lossTradesPerDay = 30;
// let toalTradesPerDay = 3; 

// export default function App() {
//   const [userValue, setUserValue] = useState([])
//   const [profit, setProfit] = useState()
//   const [loss, setLoss] = useState()

//   function calculateProfit() {
//     let value = parseInt(userValue)
//     let totalProfit = value * profitTradesPerDay;
//     setProfit(totalProfit)
//     let totalLoss = (totalDays - value) * lossTradesPerDay;
//     setLoss(totalLoss)
//   }

//   return (
//     <main style={{ display: 'flex',justifyContent: 'space-between',alignItems: 'center' }}>
//       <div>
//         <div>Support: This one works for only 20 days</div>
//         <div>Example Montly Data</div>
//         <table>
//           <tr>
//             <th>Days</th>
//             <th>Trades/Day</th>
//             <th>Profit/Day</th>
//             <th>Loss/Day</th>
//           </tr>
//           {Array(20).fill(0).map((_, day) =>
//             <tr>
//               <td key={day}> {day + 1} </td>
//               <td>3</td>
//               <td>24</td>
//               <td>30</td>
//             </tr>
//           )}
//           <tr>
//             <th>20</th>
//             <th>60</th>
//             <th>460</th>
//             <th>600</th>
//           </tr>
//         </table>
//       </div>

//       <div>
//         <label>Profit Days Total: </label>
//         <input value={userValue} onChange={(e) => setUserValue(e.target.value)} />
//         <button onClick={calculateProfit}>Calculate</button>
//         <div>Profit: {profit}</div>
//         <div>Loss: {loss}</div>
//         <div>Total: {profit - loss}</div>
//       </div>
//     </main>
//   )
// }

// v2
// import './App.css'
// import { useState } from 'react'

// let totalDays = 20;
// let profitTradesPerDay = 24;
// let lossTradesPerDay = 30;
// let toalTradesPerDay = 3; 

// export default function App() {
//   const [profitInput, setProfitInput] = useState();
//   const [lossInput, setLossInput] = useState();
//   const [totalProfit, setTotalProfit] = useState();
//   const [totalLoss, setTotalLoss] = useState();

//   function calculateTotal() {
//     let totalProfitValue = profitInput * profitTradesPerDay;
//     setTotalProfit(totalProfitValue);

//     let totalLossValue = lossInput * lossTradesPerDay;
//     setTotalLoss(totalLossValue);
//   }
  
//   return (
//     <main style={{ display: 'flex',justifyContent: 'space-between',alignItems: 'center' }}>
//       <div>
//         <div>Support: This one works for only 20 days</div>
//         <div>Example Montly Data</div>
//         <table>
//           <tr>
//             <th>Days</th>
//             <th>Trades/Day</th>
//             <th>Profit/Day</th>
//             <th>Loss/Day</th>
//           </tr>
//           {Array(20).fill(0).map((_, day) =>
//             <tr>
//               <td key={day}> {day + 1} </td>
//               <td>3</td>
//               <td>24</td>
//               <td>30</td>
//             </tr>
//           )}
//           <tr>
//             <th>20</th>
//             <th>60</th>
//             <th>460</th>
//             <th>600</th>
//           </tr>
//         </table>
//       </div>

//       <div>
//         <label>Profit Days Total: </label>
//         <input value={profitInput} onChange={(e) => setProfitInput(e.target.value)} />
//         <label>Loss Days Total: </label>
//         <input value={lossInput} onChange={(e) => setLossInput(e.target.value)} />
//         <button onClick={calculateTotal}>Calculate</button>
//         <div>Profit: {totalProfit}</div>
//         <div>Loss: {totalLoss}</div>
//         <div>Total: {totalProfit - totalLoss}</div>
//       </div>
//     </main>
//   )
// }

// v3
import './App.css'
import { useState } from 'react'

let totalDays = 20;
let profitTradesPerDay = 24;
let lossTradesPerDay = 30;
let toalTradesPerDay = 3; 

export default function App() {
  const [profitInput, setProfitInput] = useState();
  const [lossInput, setLossInput] = useState();
  const [totalProfit, setTotalProfit] = useState();
  const [totalLoss, setTotalLoss] = useState();

  function calculateTotal() {
    let totalProfitValue = profitInput * profitTradesPerDay;
    setTotalProfit(totalProfitValue);

    let totalLossValue = lossInput * lossTradesPerDay;
    setTotalLoss(totalLossValue);
  }
  
  return (
    <main style={{ display: 'flex',justifyContent: 'space-between',alignItems: 'center' }}>
      <div>
        <div>Support: This one works for only 20 days</div>
        <div>Example Montly Data</div>
        <table>
          <tr>
            <th>Days</th>
            <th>Trades/Day</th>
            <th>Profit/Day</th>
            <th>Loss/Day</th>
          </tr>
          {Array(20).fill(0).map((_, day) =>
            <tr>
              <td key={_}> {day + 1} </td>
              <td>3</td>
              <td>24</td>
              <td>30</td>
            </tr>
          )}
          <tr>
            <th>20</th>
            <th>60</th>
            <th>460</th>
            <th>600</th>
          </tr>
        </table>
      </div>

      <div>
        <label>Profit Days Total: </label>
        <input value={profitInput} onChange={(e) => setProfitInput(e.target.value)} />
        <label>Loss Days Total: </label>
        <input value={lossInput} onChange={(e) => setLossInput(e.target.value)} />
        <button onClick={calculateTotal}>Calculate</button>
        <div>Profit: {totalProfit}</div>
        <div>Loss: {totalLoss}</div>
        <div>Total: {totalProfit - totalLoss}</div>
      </div>
    </main>
  )
}