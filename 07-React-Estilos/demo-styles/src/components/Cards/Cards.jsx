import style from './Cards.module.css';

//import style from 'styled-components';

// const ComponenteEstilizado = style.div`
// width: 80%;
// display: flex;
// flex-direction: row;
// justify-content: space-around;
// background-color: pink;
// padding: 1rem;
// border: 1px solid palevioletred;
// border-radius: 1rem;
// gap: 1rem;
// margin: 1rem;`

const Cards = ()=> {

        return(
           // <ComponenteEstilizado>
           <div className={style.contenedor}>
                <div className={style.card}>Esto es una Card</div>
                <div className={style.card}>Esto es una Card</div>
                <div className={style.card}>Esto es una Card</div>
                <div className={style.card}>Esto es una Card</div>
           </div>
            //</ComponenteEstilizado>
        )
}

export default Cards;