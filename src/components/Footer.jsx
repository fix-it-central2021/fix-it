import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone ,faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook , faGooglePlus, faLinkedin , faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { Link  } from 'react-router-dom'


export default class Footer extends Component {






  render() {


    return (

      <div className="App-footer">
     
        <div class="container-fluid footer">
          <div class="row">
            <div class="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
              <ul class="list-unstyled">
                <Link to='/'  >Inicio    </Link>
                <Link to={{ pathname: '/tienda', state: {
                  reload_ : false
                } }}>Tienda    </Link>
                <Link to='/ofertas' >Ofertas    </Link>
                <Link to='/ubicacion' >Ubicaciones    </Link>
              </ul>
            </div>
            <div class="col-7 col-sm-5">
              <h5>Dirección</h5>
              <address>
                12 avenida 21-65 Ciudad de Oro <br></br>
                  Gutemala, Guatemala<br></br>                   
                    <FontAwesomeIcon icon={faPhone}  />  45879648<br></br>
                        
                    <FontAwesomeIcon icon={faEnvelope}  /> <a
                            href="mailto:atencion_liente@fixit.net">atencion_cliente@fixit.net</a>
                  </address>
              </div>
              <div class="col-12 col-sm-4 align-self-center">
                    <div class="text-center redes">
                        <a  href="http://google.com/+"> <FontAwesomeIcon icon={faGooglePlus}  /></a>
                        <a  href="http://www.facebook.com/profile.php?id="><FontAwesomeIcon icon={faFacebook}  /></a>
                        <a  href="http://www.linkedin.com/in/"><FontAwesomeIcon icon={faLinkedin}  /> </a>
                        <a href="http://twitter.com/"><FontAwesomeIcon icon={faTwitter}  /></a>
                        <a  href="http://youtube.com/"><FontAwesomeIcon icon={faYoutube}  /> </a>
                       
                    </div>
                </div>
                    
          </div>
                    
                      <div class="col-auto text-center">
                        <p>© Copyright 2021 FIX IT</p>
                      </div>
                   
      </div>
    
  </div>
                )
  }

}