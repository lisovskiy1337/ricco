import React from "react";
import Carousel from "../../utils/Carousel";
import CarouselItem from "../../utils/CarouselItem";
import Review from "../Review/Review";


const reviewsArr = [
    {text: 'Absolutely stunning. I`m planning to visit Costa Rica next year', author : 'John from England', imgUrl: 'person1.jpg'},
    {text: 'One of the best touristic complexes I`ve ever been to. Nice job!', author : 'Erik from Estonia', imgUrl: 'person2.jpg'},
    {text: 'It`s not the first time I relax in Ricco complex, everything is on the top level. Manager Boris always takes care of my comfort.', author : 'Maricce from France', imgUrl: 'person3.jpg'},
    {text: 'I was surprised about unobtrusiveness of the staff of this complex. Great option to get away from the hustle and bustle!', author : 'Ann from the USA', imgUrl: 'person4.jpg'},
]


const Comments = () => {

    return ( 
            <section className="bg-black py-20">
                <Carousel className={'viewport'}>
                    {reviewsArr.map((review, i) => (
                        <CarouselItem index={i} key={i}>
                        <Review author={review.author} imgUrl={review.imgUrl}>
                            {review.text}
                        </Review>
                        </CarouselItem>
                    ))}
                </Carousel>
               
            </section>
       
    )
}

export default Comments;