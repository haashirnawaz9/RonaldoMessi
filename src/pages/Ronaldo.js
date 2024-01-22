import React, { useState } from 'react';
import '../App.css'

const ronaldo = new URL('ronaldoo.jpeg', import.meta.url)

const Stats = (props) => {
    return(
      <div>
        <h1>Goals: {props.goals}</h1>
        <h1>Assists: {props.assists}</h1>
        <h1>Trophies: {props.trophies}</h1>
      </div>
    )
  }

export const Ronaldo = () => {
  const [video, setVideo] = useState(false);

  const handleClick = () => {
    setVideo(true);
    window.open("https://www.youtube.com/watch?v=b2QFKIwQFpc&ab_channel=Legasus");
  };
    return(
        <div className="Ronaldo">
        <div className="container">
            <img className="ronaldoimg" src={ronaldo} alt=""
            height='200px' width='400px'>
            </img>
  
            <Stats goals={824} assists={234} trophies={34}>
            </Stats>
  
          </div>
          <p className="paragraph">Cristiano Ronaldo dos Santos Aveiro (born 5 February 1985) is a 
            Portuguese professional footballer who plays as a forward for and 
            captains both Saudi Professional League club Al Nassr and the Portugal national team. 
            Ronaldo’s father, José Dinis Aveiro, was the equipment manager for the local club Andorinha. 
            (The name Ronaldo was added to Cristiano’s name in honour of his father’s favourite movie actor, 
            Ronald Reagan, who was U.S. president at the time of Cristiano’s birth.) At age 15 Ronaldo was
             diagnosed with a heart condition that necessitated surgery, but he was sidelined only 
             briefly and made a full recovery. He first played for Clube Desportivo Nacional of 
             Madeira and then transferred to Sporting Clube de Portugal (known as Sporting Lisbon),
              where he played for that club’s various youth teams before making his debut on Sporting’s first team in 2002. 
              Then Ronaldo went to play for Manchester United, Real Madrid, Juventus, and then Manchester United again before
              joining his current team Al Nassr. Ronaldo made his international debut for Portugal in 2003 at the age of 18 
              and has since earned over 190 caps, making him Portugal's most-capped player. With more than 100 goals at international 
              level, he is also the all-time top goalscorer. Ronaldo has played in and scored at 11 major tournaments; he scored his 
              first international goal at Euro 2004, where he helped Portugal reach the final. He assumed captaincy of the national team 
              in July 2008. In 2015, Ronaldo was named the best Portuguese player of all time by the Portuguese Football Federation. 
              The following year, he led Portugal to their first major tournament title at Euro 2016, and received the Silver Boot as the 
              second-highest goalscorer of the tournament. This achievement would see him receive his fourth Ballon d'Or. He also led them 
              to victory in the inaugural UEFA Nations League in 2019, receiving the top scorer award in the finals, and later received the 
              Golden Boot as top scorer of Euro 2020.</p>

            {video ? (
          <p>You have watched Ronaldo's highlights!</p>
        ) : (
          <button className = "Ronaldohighlights" onClick={handleClick}>Watch Ronaldo's highlights</button>
        )}
        <nav className = "footer">
            <footer>© 2023 Copyright Ronaldo & Messi - Haashir Nawaz </footer>
        </nav>
      </div>
    )
}

export default Ronaldo;