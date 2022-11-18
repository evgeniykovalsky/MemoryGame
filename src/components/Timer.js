
export default function Timer({minutes, seconds}) {
   
  if(minutes<0||seconds<0)
  {
    minutes=0;
    seconds=0;
  }
   
    return (  
      <div className='timer'>
        {Number(minutes) > 9 ?Number(minutes) : `0${Number(minutes)}`} 
        :
        {Number(seconds) > 9 ? Number(seconds) : `0${Number(seconds)}`}
      </div>
      )
  
    }