import React, { useState } from 'react';
import data from './resultData.json'
import './App.css';


const newData = data;
let map = new Map();
  for(let obj of newData){
    map.set(obj['Seat Number'], obj);
    
  }
//  console.log(map.get(10311));


function App() {
      const [inputNum, setInputNum] = useState('');
      const [student, setStudent] = useState('');

    const showResult = () =>{
      let newNum = Number(inputNum);
     let result = map.get(newNum);
     if(result){
       setStudent(result);
      }else{
        alert("Not exist roll number")
      }
      setInputNum('')
     }
  return (
  
    <div className='container'>
        {/* <div className='main-header'>
      <nav className='nav-main'>
        <a href="http://localhost:3000">
          <img src="./src/iquebeName.png" alt="Iqube Nmae" />
          <img src="./src/IQUBE_white.png" alt="IQUBE_" />
        </a>
        </nav>
      </div> */}
      <div className='main'>
      
      <div className='header-title'><h1>
    Wellcome to Shivneri Collage Pune Bcs result 2023-24 </h1> </div>
    <div className='search-field'><input title='RollNum'  type="number"
     placeholder='Enter your roll number here...' value={inputNum} 
     onChange={(e)=>{setInputNum(e.target.value)}}
     className='search-input' />
     <button className='btn' onClick={showResult} >Show Result</button></div>
     </div>
     <div>
    { student !=='' && 
    <>
      <div className='table-container'>
<table>
  <tbody>
  <tr>
    <td >Seat Number: </td>
    <td>{student["Seat Number"]}</td>
   </tr>
  <tr>
    <td>Name: </td>
    <td>{student["Name"]}</td>
  </tr>
  <tr>
    <td>Grade: </td>
    <td>{student["Grade"]}</td>
  </tr><tr>
    <td>Div: </td>
    <td>{student["Div"]}</td>
  </tr><tr>
    <td>Center Code: </td>
    <td>{student["Center Code"]}</td>
  </tr><tr>
    <td>School Name: </td>
    <td>{student["School Name"]}</td>
  </tr><tr>
    <td>Total Score: </td>
    <td>{student["Total Score"]}</td>
  </tr><tr>
    <td>R: </td>
    <td>{student["R"]}</td>
  </tr><tr>
    <td>A: </td>
    <td>{student["A"]}</td>
  </tr><tr>
    <td>P: </td>
    <td>{student["P"]}</td>
  </tr> 
<tr>
<td >S: </td>
<td>{student["S"]}</td>
</tr><tr>
<td >Total %: </td>
<td>{student["Total %"]}</td>
</tr><tr>
<td >R%: </td>
<td>{student["R%"]}</td>
</tr><tr>
<td >A%: </td>
<td>{student["A%"]}</td>
</tr><tr>
<td >P%: </td>
<td>{student["P%"]}</td>
</tr><tr>
<td >S%: </td>
<td>{student["S%"]}</td>
</tr><tr>
<td >Rank: </td>
<td>{student["Rank"]}</td>
</tr><tr>
<td >Scholarship Amount: </td>
<td>{student["Scholarship Amount"]}</td>
</tr><tr>
<td >Certificate: </td>
<td>{student["Certificate"]}</td>
</tr>
 </tbody>
</table>
</div>
</>
}
     
     </div>
    </div>
  );
}

export default App;
