
export const ParenComponent = ()=>{
    return(
        <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white`}>
            <h1>Component A</h1>
            <ChildComponent data="React JS" />

        </section>
    )
}


const ChildComponent = ({data})=>{
    return(
        <>
        <h1>Hello, I'm Component B</h1>
        <GrandChildComponent data={data} />
        </>
    )
}


const GrandChildComponent = ({data})=>{
    return(
        <>
        <h1>Hello, I'm Component C</h1>
        <GrandGrandChildComponent data={data} />
        </>
    )
}
const GrandGrandChildComponent = ({data})=>{
    return(
        <>
        <h1>Hello, I lvoe {data}</h1>
        </>
    )
}