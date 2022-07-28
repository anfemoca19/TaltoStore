import React from 'react'
import "../Header/header.css"

const Header = () => {
    return(
        <div className="container_Header">
            
            <div className="container_user">
                <div className="line">
                    <div class="vertical-line"></div>
                </div>
                <div className="sesion">
                    <div className="container_sesion">
                        <a className="cerra_Sesion">Cerrar Sesión</a>
                    </div>
                    <div className="container_img">
                        <img className="photo" src="https://www.horadecodar.com.br/wp-content/uploads/2019/07/imagem_redonda_com_css_capa.png"/>
                    </div> 
                </div>
            </div>
        </div>
    );
}
export default Header;