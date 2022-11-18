import { useState, useEffect, useContext } from 'react';
import { GameContext } from '../components/Context';


export default function useTimer(selectLevel) {
    const data=useContext(GameContext);
    
    const [time, setTime] = useState(5);

    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
  
    useEffect(() => {
        
       
       const interval = setInterval(() => {
            
            selectLevel.title &&
                setTime((time)=> {
                  
                if(data.startGame)
                  {
                        time=time+1;
                  }
                if(!data.startGame){
                      
                       time=time-1;
                       
                                            
                    }
               
                    return time;
                })

        }, 1000);

       if(data.final){
         
        data.setMyTime(time);
        
        
        clearInterval(interval);

       }

       
        return () => { clearInterval(interval) }

    }, [selectLevel,time]);

 


    return [minutes, seconds];
}
