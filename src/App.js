import React, { useState } from "react";

const App = () => {
const [num, setNum] = useState(0);

const incNum = () => {
  setNum(num+1);
};
const decNum = () => {
  setNum(num-1);
  if(num >0){
    setNum(num-1);
  } else {
    alert("Count less than 0!")
  setNum(0);
}
};

return(
  <>
  <div className = 'main_div'>
  <div className = 'center_div'>
  <h1>{num}</h1>
  <div className = 'btn_div'>
  <button onClick = {incNum}>Increm</button>
  <button onClick = {decNum}>decrem</button>

  </div>

  </div>

  </div>
  </>
)

}

export default App;