
export class User{
   
    async login(user, password)  {  
        let response    /*aca obtengo datos de bases de datos*/ 
        response = await fetch(process.env.REACT_APP_PRO_USER+'/login', {
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
  response = await fetch(process.env.REACT_APP_PRO_USER+'/login/re_sign', {
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

async buscar_user(user) {


  let res = await fetch(process.env.REACT_APP_PRO_USER+'/users/' + user, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.  
    mode: 'cors',
    headers: {
     
      'Content-Type': 'application/json',

    }
  })

  return res.status===200? true : false


}

async registrar_user(user) {


  let res = await fetch(process.env.REACT_APP_PRO_USER+'/users', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.  
    mode: 'cors',
    headers: {
     
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(user)
  })

  let data = await res.json()    
  console.log(data) 

  if(res.status===200){
    sessionStorage.setItem('token',data.token)
    sessionStorage.setItem('user',user.user)
    
  }

  return res.status


}


}


  