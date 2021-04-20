export class Orden_backend{


insertar_orden= async (orden)  =>{
    let response 
    response = await fetch('http://localhost:3600/orden', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.  
        mode: 'cors',      
        headers: {
            'access-token': localStorage.getItem('token'),
            'Content-Type': 'application/json',
          
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(orden)             
      }) 

      return response.json()
  }


  traer_ordenes= async ()  =>{
    let response 
    response = await fetch('http://localhost:3600/orden', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.  
        mode: 'cors',      
        headers: {
            'access-token': localStorage.getItem('token'),
            'Content-Type': 'application/json',
          
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
                   
      }) 

      return response.json()
  }

}