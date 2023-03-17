import React from "react";

class Count extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    aumentar = ()=>{
     //   this.counter += 1;
          this.setState({counter: this.state.counter + 1 }, ()=> console.log(this.state.counter))
    }

    decrementar = () =>{
        this.state.counter > 0 && this.setState({counter: this.state.counter - 1})
    }

    reiniciar = () => {
        this.setState({counter: 0})
    }

    componentDidMount(){
        console.log('Soy el componente, me monte');

    }

    componentDidUpdate(){
        console.log('Ciao, me actualice!');
    }

    render(){
        return(
            <div>
                <h3>Maurizzio</h3>
                <p>{this.state.counter}</p>
                <div>
                    <button onClick={this.decrementar}>Decrementar</button>
                    <button onClick={this.reiniciar}>Reiniciar</button> 
                    <button onClick={this.aumentar}>Aumentar</button>

                </div>
            </div>

        )
    }
}

export default Count;