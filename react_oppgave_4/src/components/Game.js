/* eslint-disable prettier/prettier */
import Blink from './Blink'

// TODO: Nødvendig props

export default function Game( {trackLevel, newRound, handleNext, buttonPointValue }) {
    // TODO: Legge til nødvendig logikk. Hvis nødvendig.
    //  console.log(trackLevel)
    return (
        <div data-testid="game" className="grid grid-cols-4 gap-6">
        {/* TODO: Må skrive ut antall knapper et spill skal vise */}
        {/* TODO: Må bruke riktig komponent og sende data som props */}
        {/* TODO: Kun vise denne knappen når en runde er ferdig */}

        {newRound ? (
            <>
                {trackLevel?.map((blinken) => (
                    <Blink 
                    key={blinken.index}
                    colorValue={blinken.color}
                    pointValue={blinken.point}
                    color={blinken.color}
                    buttonPointValue={buttonPointValue}
                    />
                ))}
            </>
        ) : ( 
            <button
            className="col-span-4 w-full rounded-xl border-2 border-emerald-100 p-8 text-lg font-bold text-emerald-500 shadow-lg shadow-emerald-100"
            type="button"
            data-testid="next"
            onClick={handleNext}
            >
            Neste runde
            </button>
        )}
      </div>
    )
  }