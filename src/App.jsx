import React, { useState } from 'react'; // Make sure to import React if you are using JSX
import DisplayData from './displaydata.jsx';
import data from './data.jsx';
import AddForm from './addform.jsx';

export default function App() {
  const [display, setDisplay] = useState(true);
  const [data2, setData2] =useState(data);
  const [add, setAdd ] = useState(false);

  function enableForm()
  { 
    setAdd(true);
  }
  
  return (
    <div className="app">
      <div className='hero'>   
        <div className='components'>
          <h1>{data2.length} Birthday's Today</h1> 
          <div className="btns" >
            <button onClick={()=>enableForm()} >Add Someone's</button>
            <button onClick={() => setDisplay(false)} >Clear All</button>    
          </div>
        </div> 
          { add && <AddForm data={data2} setData={setData2} />} {/* short Circuit */}        
        </div>
      <div>
        {display && <ul><DisplayData data={data2} /></ul>}
      </div>
    </div> 
  );
}
