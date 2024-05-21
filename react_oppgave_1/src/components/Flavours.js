/* eslint-disable prettier/prettier */
import IceFlavours from './IceFlavours'

export default function Flavours ({smak, action}) {
    return (
        <section id="options" data-testid="options">
        {/* TODO: Håndtere endringer i dropdown */}
        <div
        className="option"
        data-testid="flavours"
        id="flavours"
      >
        <label htmlFor="flavour">
          <select defaultValue="chocolate" id="flavour" data-testid="flavour" onChange={action}>
            {/* TODO: Lag statisk liste med verdiene under. Bruk .map og key. Alle verdiene i option må være med */}

            {smak.map((smaker) => (
            <IceFlavours 
                key={smaker}
                value={smaker}
                defaultValue={smaker}
                title={smaker}
            />
            ))}
          </select>
        </label>
      </div>
      </section>
    )
}