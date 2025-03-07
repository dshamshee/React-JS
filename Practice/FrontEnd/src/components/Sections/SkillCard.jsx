
export const SkillCard = ({head, description, progressValue})=>{
    return(
        <>
            <div className="SkillCard w-[320px] p-5 bg-white shadow-lg rounded-lg my-5 font-[poppins] mx-2">
                <h1 className="text-xl font-semibold">{head}</h1>
                <h3 className="my-4 text-sm text-gray-400">{description}</h3>
                <h3 className="text-end font-semibold">{progressValue}%</h3>
                <progress className="progress progress-accent w-full" value={progressValue} max="100"></progress>
            </div>
        </>
    )
}