import { useState } from 'react';
import './country.css'

const Country = ({country,handleVisitedCountry,handleVisitedFlags }) => {
   const {name,flags,population,area,cca3} = country;
   const [visited,setVisited] = useState(false);

   const handleVisited =() =>{
    setVisited(!visited);
   }
//    console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color:visited? 'purple':'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
           <p>area: {area}</p>
           <p><small>code: {cca3}</small></p>
           <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
           <br />
           <button onClick={()=>handleVisitedFlags(country.flags.png) }>Add flags</button>
           <br />
           <button onClick={handleVisited}>{visited? 'visited':'going'}</button>
           {visited ? 'i have visited this country': 'i wanted visited'}
        </div>
    );
};

export default Country;