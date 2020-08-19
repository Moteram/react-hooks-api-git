import React, { useState, useEffect } from 'react';


function Hooks(){
const [repositorio, setRepositorio] = useState([
  {id: 1, name: 'repo1'},
  {id: 2, name: 'repo2'},
  {id: 3, name: 'repo3'}
]);

function handleAddRepository(){

  setRepositorio([...repositorio, {
                  id: Math.random(), 
                  name: 'novo nome'}                
                ]);

}


return(

  <div>
  <ul>
    {repositorio.map(repo => 
      
    <li key={repo.id}>{repo.name}  </li>
      
      )}
  </ul>
  <button type="button" onClick={handleAddRepository}>
    Add Repositorio 
  </button>
  </div>

);
}

export default Hooks;
