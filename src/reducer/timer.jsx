const Timer = (state = {}, action) =>{
  switch(action.type) {
    case "start" :
      return (isRunning = true );
    case "stop" :
      return (isRunning = false);
    default:
      return state;
  }
}