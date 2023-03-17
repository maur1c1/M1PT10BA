//componente de clases

import React from "react";

class Boton2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <button>{this.props.text}</button>
            </>
        )
    }
}

export default Boton2;