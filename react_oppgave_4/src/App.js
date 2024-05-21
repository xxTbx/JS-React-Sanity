/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react'
// TODO: createGame har en TODO som må ferdigstilles
import { createGame } from './lib/startGame'
import GameHeader from './components/GameHeader'
import Game from './components/Game'

export default function App() {
  const [game, setGame] = useState(0)
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.
  const [countRound, setCountRound] = useState(0)
  useEffect(() => {     // TODO: 0 må byttes ut med noe dynamisk
    setGame(createGame(countRound))
  }, [countRound])
  const [roundFinished, setRoundFinished] = useState(false)
  const [newRound, setNewRound] = useState(true)
  const [countPoint, setCountPoint] = useState(0)

const handleNext = () => { // Hide not hide
  setRoundFinished(!roundFinished)
  setNewRound(!newRound)
  setCountRound(countRound+1)
  setCountPoint(0)
}

const buttonPointValue = (e) => {
  setCountPoint(countPoint + Number(e))
  if (Number(e) < 0) {
    setCountRound(0)
    setCountPoint(0)
  }
}

if (countPoint >= game.total && !roundFinished) {
  // Setter roundfinished til true
  setRoundFinished(!roundFinished)
  setNewRound(!newRound)
}
  return(
    <div>
      <GameHeader 
      currentPoints={countPoint} 
      totalPointPossible={game.total} 
      />
      <Game 
      trackLevel={game.buttons} 
      handleNext={handleNext} 
      newRound={newRound} 
      buttonPointValue={buttonPointValue}
      />
    </div>
  ) 
}

// Linker brukt:
// https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
// https://reactjs.org/docs/forms.html
// https://reactjs.org/docs/hooks-state.html
// https://reactjs.org/docs/hooks-effect.html
// https://flaviocopes.com/how-to-shuffle-array-javascript/