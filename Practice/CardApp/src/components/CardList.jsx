export const CardList = ({image, heading, description, onHandleDeleteCard}) => {

  return (
    <div className="bg-slate-800 w-fit h-fit p-1 text-white rounded-2xl">
      <div className="bg-zinc-800 w-[380px] h-auto rounded-xl flex flex-col">
        {/* Imgae Section */}
        <div className="image">
          <img className="h-[200px] w-full object-cover rounded-xl" src={image} alt="" />
        </div>

        {/* Heading & Description Section */}
        <div className="body mx-2 mt-1 flex flex-1 flex-col gap-3">
          <h1 className="font-bold text-3xl" >{heading}</h1>
          <h3>{description}</h3>
        </div>

        {/* Buttons */}
        <div className="btn align-baseline mt-auto p-2">
          {/* <button className="px-5 mt-1 text-center font-semibold text-xl bg-orange-600 hover:bg-orange-800 cursor-pointer rounded-md">Watch</button> */}
          <button onClick={()=>onHandleDeleteCard(heading)} className="px-5 mt-1 mx-2 text-center font-semibold text-xl bg-orange-600 hover:bg-orange-800 cursor-pointer rounded-md">Remove</button>
          {/* <button className="px-5 py-2 w-full text-center font-semibold text-xl bg-orange-600 hover:bg-orange-800 cursor-pointer rounded-md">Watch</button> */}
        </div>
      </div>
    </div>
  );
};