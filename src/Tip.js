import React from 'react';
import './tip.css';
import img from './assets/yoga.jpg';
import img2 from './assets/tips.jpg'
import img3 from './assets/motivation.jpg'
const Tip=()=>{
    return(
       <>   
       <div className="heading">
            <h1>Tips to improve your mental health</h1> 
        <div className="tip-conatiner">
           
            <div className="tip-left">
                <img className="tip-image" src={img} alt="yoga"/> 
            </div>
            <div className="tip-right">
                <h2>Regular yoga practice creates mental clarity and calmness; increases body awareness; relieves chronic stress patterns; relaxes the mind; centers attention; and sharpens concentration</h2>
                <a href="yoga.html"> Click here to know more</a>
            </div>
        </div>
<br/>
<div className="tip-conatiner">
           
<div className="tip-left">
<h2>Motivation is one of the driving forces behind human behavior. It fuels competition and sparks social connection. Its absence can lead to mental illnesses such as depression.</h2>
<a href="motivation.html"> Click here to know more</a>
</div>
<div className="tip-right">
    
    <img className="tip-image" src={img3} alt="motivation"/> 
</div>
</div>
<br/>
<div className="tip-conatiner">
           
<div className="tip-left">
<img className="tip-image" src={img2} alt="tips"/> 
</div>
<div className="tip-right">
<h2>Positive thinking, or an optimistic attitude, is the practice of focusing on the good in any given situation. It can have a big impact on your physical and mental health.</h2>
<a href="do.html"> Click here to know more</a>
   
</div>
</div>
</div>
</>
    )
}

export default Tip;