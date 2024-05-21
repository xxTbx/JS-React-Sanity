/* eslint-disable prettier/prettier */
export default function IceFlavours ({value, defaultValue, title}) {
    return (
        <option 
        data-testid="option"
        value={value}
        defaultValue={defaultValue}
        >{title}</option>
    )
}