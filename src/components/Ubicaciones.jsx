import  { Component } from 'react'
import {GoogleMap,withScriptjs,withGoogleMap} from 'react-google-maps'





 class Ubicaciones extends Component{
render(props){
return(

    <GoogleMap defaultZoom={16}
    defaultCenter={{lat:14.649950,lng: -90.547863}}
    >

    </GoogleMap>
)

}


}

export default withScriptjs(
    withGoogleMap(
        Ubicaciones
    )

)