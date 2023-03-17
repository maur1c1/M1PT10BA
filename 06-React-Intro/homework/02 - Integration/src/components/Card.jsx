export default function Card({name, gender, onClose, species, image}) {// podemos hacer destructuring en lugar de Card(props) como sigue
   return ( 
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={image} /> 
      </div>
   );
}
