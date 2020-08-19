import React, { useState, useEffect} from 'react';

function HooksAPIGit(){

  const [respositorioAPI, setRespositorioAPI] = useState([]);

  useEffect(() => {

    async function espera(){

    const response = await fetch("https://api.github.com/users/moteram/repos");
    const data = await response.json();
    setRespositorioAPI(data);

    console.log(data);

    }    
    espera();

  },[]);

  useEffect(() =>{

    const filtered = respositorioAPI.filter(repo => repo.favorite);

    document.title = `Você tem ${filtered.length} repositores Liked`;

  },[respositorioAPI])


  function clickFavorito(id){

    const newRepositories = respositorioAPI.map(repo => {

      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo;

    });

    setRespositorioAPI(newRepositories);
  }


  

return(

  <ul>
    {respositorioAPI.map(repo => (
      <li key={repo.id}>{repo.name} 
      {repo.favorite && <span>(favorito)</span>} -
   <button type="button" onClick={() => clickFavorito(repo.id)}>Favoritar</button>
      </li>
    ))}
  </ul>

);

}
export default HooksAPIGit;