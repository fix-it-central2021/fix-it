import React,{useState, useEffect} from 'react'
import Orden from './Orden'
import { Orden_backend } from '../backend/orden'





export default function Ordenes(){

    const[state, setstate] = useState({ orders: [], is_fetching:true})

    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () =>{
        const orden_backend = new Orden_backend()
        let ordenes
        ordenes=  await orden_backend.traer_ordenes()
        setstate({orders: ordenes , is_fetching:false })       
        
      },[])
    
    



    let ordenes=state.orders
    
    console.log(ordenes)

  
    if(!state.is_fetching){

    
    if (ordenes != null) {

        if (ordenes.length !== 0) {
            let items = []
           
            ordenes.forEach(item => {
                console.log(item)
                items.push(
                    <Orden orden={item}></Orden>);
            });

            //por cada elemento agrego al array un componente item
            return (
                <div style={{
                    width: '85%',
                    marginTop: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '15%',
                    marginRight: 0

                }}>
                    {items}
                </div>
            )
        } else {
            return (<h1
                style={{
                    marginTop: 200
                }}
            >Todavía no tienes ninguna orden :(  </h1>)
        }


    } else {
        return (<h1
            style={{
                marginTop: 200
            }}
        >Todavía no tienes ninguna orden :(  </h1>)
    }






}
return (<h1
    style={{
        marginTop: 200
    }}
>Obteniendo ordenes ...(  </h1>)

}


