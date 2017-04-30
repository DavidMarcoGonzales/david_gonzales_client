export const getJWT = () => {
  try{
    const serializedJWT = localStorage.getItem("jwt");
    if( serializedJWT === null){
      return undefined;
    }
    return JSON.parse(serializedJWT);
  } catch(err){
    return undefined;
  }
}

export const saveJWT = (jwt) => {
  try{
    const serializedJWT = JSON.stringify(jwt)
    localStorage.setItem('jwt',serializedJWT)
  }catch(err){

  }
}