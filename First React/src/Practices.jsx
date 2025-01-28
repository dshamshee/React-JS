export const Practices = () => {
    const students = [1]

    return (
        <>
            <h1>Interview Questions</h1>
            {/* <p>{ students.length && "No Students Found" }</p> */}
            {/* solution 1  */}
            {/* <p>{ students.length ===0 && "No Students Found" }</p> */}

            {/* solution 2  */}
            {/* <p>{ !students.length && "No Students Found" }</p> */}

            {/* solution 3  */}
            <p>{!Boolean(students.length) && "No Students Found"}</p>

            <p>Number of Students: {students.length}</p>
        </>
    )
}