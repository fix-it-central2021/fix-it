import {User}  from './user'


export class Orden_backend{


insertar_orden= async (orden)  =>{
    let response 
    const user =new User()
        user.re_sigin(sessionStorage.getItem("user"))
    response = await fetch('http://localhost:3600/orden', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.  
        mode: 'cors',      
        headers: {
            'access-token': sessionStorage.getItem('token'),
            'Content-Type': 'application/json',
          
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(orden)             
      }) 

      if(response.status===401){
        return {"mensaje" : "no autorizado"}
      }else{
        return response.json()
      }  }


  traer_ordenes= async ()  =>{
    let response 
    const user =new User()
    await user.re_sigin(sessionStorage.getItem("user"))
    response = await fetch('http://localhost:3600/orden/'+sessionStorage.getItem("user"), {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.  
        mode: 'cors',      
        headers: {
            'access-token': sessionStorage.getItem('token'),
            'Content-Type': 'application/json',
          
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }       
      }) 

      if(response.status===401){
        return {"mensaje" : "no autorizado"}
      }else{
        return response.json()
      }  }

}