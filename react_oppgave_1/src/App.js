/* eslint-disable prettier/prettier */
import { useState } from 'react'
import Flavours from './components/Flavours'
import IceCream from './components/IceCream'
import Title from './components/Title'

export default function App() {
  // TODO: Gjør nødvendige endringer slik at 'Chocolate' vise i tittel når applikasjonen starter ______
  const [flavour, setFlavour] = useState('Chocolate')
  // TODO: Gjør nødvendige endringer slik at bakgrunnen på isen er chocolate når applikasjonen starter _____
  const [css, setCss] = useState('')

  // TODO: Trigg funksjonen under ved endring i select _____
  const handleFlavourChange = (event) => {
    const { value } = event.target
    // TODO: Gjør nødvendig endring slik at tittel blir oppdatert med verdien valgt i select ______
    setFlavour(event.target.value)
    
    

    // #### DO NOT CHANGE -- Ikke gjør endringer på koden under _______
    const cssFlavour = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--${value}`)
    const cssBackground = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--bg-${value}`)
    document.documentElement.style.setProperty('--flavour', `${cssFlavour}`)
    document.documentElement.style.setProperty('--bg', `${cssBackground}`)
    setCss(value)
    // #### DO NOT CHANGE END
  }

  const Flavourss = ['strawberry', 'banana', 'lime', 'blueberry', 'chocolate']

  // TODO: Gjør om til komponenter. HINT: Se på testid navnene som matcher krav til komponenter
  return (
    <div className="layout" data-testid="layout">
      <Title title={flavour} action={handleFlavourChange} />
      <Flavours smak={Flavourss} action={handleFlavourChange} />
      <IceCream css={css} />
    </div>
  )
}
