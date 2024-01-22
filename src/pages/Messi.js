import React, { useState } from 'react';
import '../App.css';

const Messiph = new URL('messii.jpeg', import.meta.url)

const MessiStats = [
    {
        Goals: 803,
        Assists: 331,
        Trophies: 39
    }
];

export const Messi = () => {
    const [video, setVideo] = useState();

    const Messibtn = () => {
        setVideo(true);
        window.open("https://www.youtube.com/watch?v=Ht1wQJTpNAA&ab_channel=TheHighlightFactory")
    }
    return(
        <div className = "Messi">
            <div className="container">
            <img src = {Messiph} alt=""
            height='100px' width='350px'></img>
            
            {MessiStats.map((messistat) => {
                return (
                    <div>
                    <h1>Goals: {messistat.Goals}</h1>
                    <h1>Assists: {messistat.Assists}</h1>
                    <h1>Trophies: {messistat.Trophies}</h1>
                    </div>
                )
            })}
            </div>
            
            <p className = "paragraph"> Lionel Messi was born, 24 June 1987, in Rosario, Argentina to a working-class 
                family. His father was a factory steel worker, and his mother a cleaner. He 
                began playing from an early age, and his talent was soon apparent. However, at the age of 11,
                 Messi was diagnosed with growth hormone deficiency (GHD). This was a condition that stunted growth 
                 and required expensive medical treatment, including the use of the drug Human growth hormone. 
                 His local club, River Plate were interested in signing Messi but didn’t want to pay for his medical treatment. 
                 However, Messi was given a trial with Barcelona, and coach Carles Rexach was impressed – offering Messi 
                 a contract which included paying for Messi’s treatment in Spain.
                Messi moved to Barcelona with his father and became part of the prestigious FC Barcelona youth academy. Since then, 
                Messi has played for F.C Barcelona, Paris-Saint-Germain, and the Argentina national team. An Argentine international,
                Messi is the country's all-time leading goalscorer and also holds the national record for appearances. At youth level,
                he won the 2005 FIFA World Youth Championship, finishing the tournament with both the Golden Ball and Golden Shoe,
                and an Olympic gold medal at the 2008 Summer Olympics. His style of play as a diminutive, left-footed dribbler 
                drew comparisons with his compatriot Diego Maradona, who described Messi as his successor. After his senior debut 
                in August 2005, Messi became the youngest Argentine to play and score in a FIFA World Cup (2006), and reached the 
                final of the 2007 Copa América, where he was named young player of the tournament. As the squad's captain from August 2011, 
                he led Argentina to three consecutive finals: the 2014 FIFA World Cup, for which he won the Golden Ball, the 2015 Copa América, 
                winning the Golden Ball, and the 2016 Copa América. After announcing his international retirement in 2016, he reversed his 
                decision and led his country to qualification for the 2018 FIFA World Cup, a third-place finish at the 2019 Copa América, 
                and victory in the 2021 Copa América, while winning the Golden Ball and Golden Boot for the latter. For this achievement, 
                Messi received a record-extending seventh Ballon d'Or in 2021. In 2022, he led Argentina to win the 2022 FIFA World Cup, 
                where he won a record second Golden Ball, became the first player to score in every stage of a World Cup (including two in the final), 
                and broke the record for most appearances in World Cup tournaments with 26 matches played.</p>
                
                {video ? (
                    <p>You have watched Messi's highlights</p>
                ) : (<button className = "Messihighlights" onClick={Messibtn}>Watch Messi's highlights</button>)

                
}
        <nav className = "footer">
            <footer>© 2023 Copyright Ronaldo & Messi - Haashir Nawaz </footer>
        </nav>
        </div>
    )
}

export default Messi;