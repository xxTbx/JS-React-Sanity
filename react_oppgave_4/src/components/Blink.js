/* eslint-disable prettier/prettier */
// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

export default function BullsEye({colorValue, pointValue, color, key, buttonPointValue}) {
    // TODO: Legge til nødvendig logikk. Hvis nødvendig.
  
    return (
      <button
        type="button"
        className={`${color} flex h-36 w-36 items-center justify-center p-8 shadow shadow-slate-200`}
        data-color={colorValue}
        data-point={pointValue}
        data-testid="button"
        onClick={e => buttonPointValue(e.target.value)}  
        value={pointValue}
        id={key}
        key={key}
      >
        <span className="pointer-events-none block h-12 w-12 rounded-full" />
      </button>
    )
  }
  