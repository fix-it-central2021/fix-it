
export class Repuesto{

    async obtener_items   ()  {      /*aca obtengo datos de bases de datos*/ 
        let response 
        response = await fetch('http://localhost:3600/repuesto', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.  
            mode: 'cors',      
            headers: {
                'access-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
              
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }             
          });
          const data=response.json()
          
          return data; // parses JSON response into native JavaScript objects
        }

        traer_repuesto= async (id)  =>{
            let response 
            response = await fetch('http://localhost:3600/repuesto/'+id, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.  
                mode: 'cors',      
                headers: {
                    'access-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                  
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                }             
              });
        
              return response.json()
          }

          
}


  