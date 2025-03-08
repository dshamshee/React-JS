
export const ProjectCard = ({imgURL, head, description})=>{
    return (
        <>
            <div className="card bg-base-100 w-[500px] h-[470px] shadow-sm">
                        <figure>
                            <img
                                src={imgURL}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{head}</h2>
                            <p>{description}</p>
                            <div className="card-actions justify-end">
                                {/* <button className="btn btn-primary">Buy Now</button> */}
                            </div>
                        </div>
                    </div>
        </>
    )
}