
export class User{
   
    async login(user, password)  {  
        let response    /*aca obtengo datos de bases de datos*/ 
        response = await fetch('http://localhost:3600/login', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.  
            mode: 'cors',      
            headers: {
                'Content-Type': 'application/json',
              
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({usuario: user, contrasena: password})             
          }) 

          if(response.status===200){
            let data = await response.json()           

          sessionStorage.setItem('token',data.token)
          sessionStorage.setItem('user',user)

          }
           
          return response.status   
          


          
}

async re_sigin(user)  {  
  let response    /*aca obtengo datos de bases de datos*/ 
  response = await fetch('http://localhost:3600/login/re_sign', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.  
      mode: 'cors',      
      headers: {
          'Content-Type': 'application/json',
        
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({usuario: user})             
    }) 

    if(response.status===200){
      let data = await response.json()           

    sessionStorage.setItem('token',data.token)
    sessionStorage.setItem('user',user)

    }
     
    return response.status   
    


    
}


}


  