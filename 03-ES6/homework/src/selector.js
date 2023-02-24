let traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  // if (typeof startEl === "undefined") {
  //   startEl = document.body;
  // }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
  if(matchFunc(startEl)) resultSet.push(startEl);

  for(let i=0; i<startEl.children.length; i++){

    let aux = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
    resultSet = [...resultSet, ...array];
    
  }
  return resultSet;
};

//#--> id
//. --> class
// div.class --> tag.class
// h1 --> tag

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


let selectorTypeMatcher = function(selector) {
  // tu código aquí
  
  //if(selector.includes('#'))
  if(selector[0] === '#'){

    return 'id';

  }else if(selector[0] === '.'){

    return 'class';

  }else if(selector.split('.').length > 1){

      return 'tag.class';

  }else{

     return 'tag';

  }

  // for(let i=1; i<selector.length; i++){
  //     if(selector[i] === '.'){
  //       return 'tag.class';
  //     }
  // }

  // return 'tag';

  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

let matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 

      matchFunction = (elem) => `#${elem.id}` === selector;
      

  } else if (selectorType === "class") {// <div class="pepito hola ondas"> </div>
    
        matchFunction = (elem) =>{
          let classes = elem.classList; // ['pepito', 'hola', 'ondas/]

          for(let i=0; i<classes.length; i++){
                if(`.${classes[i]}` === selector) return true;
          }
          return false;
        }

  } else if (selectorType === "tag.class") { // "header.pepito"
    
    matchFunction = (elem)=>{

      
         let [t,c]= selector.split('.');//['header', 'pepito']
         // t ='header'
         //c = 'pepito'
         // let result = matchFunctionMaker(t);  matchFunction = (elem) => elem.tagName === selector.toUpperCase()    
        // return result(elem);

         return matchFunctionMaker(t)(elem) && matchFunctionMaker(`.${c}`)(elem);
        //  if(`${tagClass[0]}.${tagClass[1]}` === selector){
        //     return true;
        //  }else{
        //    return false;
        //  }
    }


  } else if (selectorType === "tag") {
        matchFunction = (elem) => elem.tagName === selector.toUpperCase();
  }
  return matchFunction;
};

let $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
