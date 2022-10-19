import React from "react";
import ScrollObserver from "../../utils/ScrollObserver";
import { Tile, TileBackground, TileContent, TileWrapper } from "../../utils/Tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "../../utils/Work";

const worksArr = [
    {title: 'Live.', subtitle: 'Feel the raw nature around yourself.', imgUrl: 'work1.jpg'},
    {title: 'Inhale.', subtitle: 'Intact, warm tropical air and ocean breeze.', imgUrl: 'work2.jpg'},
    {title: 'Explore.', subtitle: 'Thousands of rare animals are waiting for you.', imgUrl: 'work3.jpg'},
];

const Works = () => {

    return (
        <ScrollObserver>
           <TileWrapper numOfPages={3}>
                <TileBackground>
                    <WorkBackground/>
                </TileBackground>
                <TileContent>
                    {worksArr.map((item, i) => {
                        return (
                                <Tile 
                                    page={i}
                                    key={i}
                                    renderContent={({progress}) => (
                                        <WorkContainer>
                                            <WorkLeft progress={progress}>
                                                <h3 className="text-5xl mb-2 opacity-80">{item.title}</h3>
                                                <span>{item.subtitle}</span>
                                            </WorkLeft>
                                            <WorkRight progress={progress}>
                                                <img src={`/assets/images/${item.imgUrl}`} alt={item.title} />
                                            </WorkRight>
                                        </WorkContainer>
                                    )}
                                >
                                </Tile>
                        )
                    })}
                </TileContent>
           </TileWrapper>

        </ScrollObserver>
       
       
      
    )
}


export default Works;