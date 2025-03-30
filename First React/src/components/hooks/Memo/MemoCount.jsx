import { memo, useRef } from "react"

// export const Counts = ()=>{  // We can't export to this method because of Unwanted Rerender
const Counts = ({myBioData}) => {
    const renderCount = useRef(0)
    console.log(renderCount)
    return (
        <div className="mt-3 font-display text-center">
            <p>
                Nothing Changed here but Ive now rendered:
                <span className="text-red-600">{renderCount.current++} time(s)</span></p>
                <p>My name is: {myBioData.name}</p>
        </div>
    )
}


// We can export this method for handle Unwanted Rerender on the parent component
export default memo(Counts);