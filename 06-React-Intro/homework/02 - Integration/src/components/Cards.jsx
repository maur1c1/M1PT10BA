import Card from './Card';

export default function Cards({characters}) {//destructuring
 //  const { characters } = props;
   return (<div>
      { characters.map(({id, name, species, gender, image})=>{//
      return <Card className = "cards" 
            key={id}
            name = {name}
            species = {species}
            gender = {gender}
            image = {image}
            onClose = {() => window.alert("Emulamos que se cierra la card")}
       />
   })}</div>);
}
