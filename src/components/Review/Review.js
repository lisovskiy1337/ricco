import React from "react";


const Review = ({children, author, imgUrl}) => {

    return (
        <div className="flex flex-col justify-center text-center px-2 md:px-5 lg:px-10 text-white h-full">
            <div className="text-xl md:text-2xl leading-10 lg:leading[3rem] tracking-tight">
                &ldquo;{children}&ldquo;
            </div>
            <div className="mt-6 flex items-center gap-4 text-center mx-auto">
                <img className="rounded-[50%]" src={`/assets/images/persons/${imgUrl}`} alt="" width={60} height={60}/>
                <p>&mdash;  {author}</p>
            </div>
        </div>
    )
}

export default Review;