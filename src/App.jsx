import { useState } from "react";
import playerData from "./playerData.js"

function BaseballCard(props) {

  const [showPicture, setShowPicture] = useState(true)
  const statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => (
    <p key={statName}>
      {statName}: {statValue}
    </p>
  ));
  function toggleCard(){
    setShowPicture(!showPicture)
  }

  if(!showPicture){
  return (
    <div className="card" onClick={toggleCard} >
      <h2>{props.name}</h2>
      <p>Team: {props.team}</p>
      <p>Position: {props.position}</p>
      {statsDisplay}
    </div>
  )
  } else {

  return (
    <div className="card" onClick={toggleCard} >
      <h2>{props.name}</h2>
      <img src={props.imgUrl} alt={props.name} />
    </div>
  );
  }
  
}
function App() {
  const cards = playerData.map((player)=> <BaseballCard 
  //props for the baseball card
  name={player.name}
  team={player.team} 
  position={player.position} 
  stats={player.stats} 
  imgUrl={player.imgUrl} 
  key={player.cardId} />
)
  
  return <>{cards}</>;
}

export default App;
