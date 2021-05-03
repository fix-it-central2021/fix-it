import {User}  from './user'
import axios from "axios"

export class Repuesto{
 
    async obtener_items   ()  {      /*aca obtengo datos de bases de datos*/ 
        let response 
        
        response = await fetch('http://localhost:3600/repuestos', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.  
            mode: 'cors',      
            headers: {
               
                'Content-Type': 'application/json',
              
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }             
          });

          const data=response.json()
          
          return data; // parses JSON response into native JavaScript objects
        }

        async  traer_repuesto (id)  {
          const user =new User()
        user.re_sigin(sessionStorage.getItem("user"))
            
           let res = await  axios.get('http://localhost:3600/repuesto/'+id,{
             
              headers: {
                'access-token': sessionStorage.getItem('token'),
                    'Content-Type': 'application/json',

              }
            })
            
              console.log(res.data)

              return res.data
            

           
              
              

              
          }

          
}


  