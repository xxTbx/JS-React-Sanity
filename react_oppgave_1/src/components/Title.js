/* eslint-disable prettier/prettier */
export default function Title({ title, action }) {
    return (
        <>
            {/* TODO: Skal vise oppdatert tittel. Nå er den hardkodet */}
            <h1 data-testid="title" onChange={action}>{title}</h1>
        </>
    )
}