function myEach(collection, cb){

    for(const item of Object.values(collection)){
         cb(item);
    }

    return collection;
}

function myMap(collection, cb){

   const newArray = Object.values(collection).map(num => cb(num));
   
   return newArray;
}

function myReduce(collection, cb, acc){

   
    let collection2 = Object.values(collection);
    if(!acc){
       acc = collection2[0];
       collection2 = collection2.slice(1); 
      }

    const result = collection2.reduce(cb , acc);
    return result;
}

function myFind(collection, predicate){

    const element = collection.find(predicate);
    console.log(element);
    return element;
}

function myFilter(collection, predicate){

    const array = Object.values(collection).filter(predicate);
    
    return array;
}

function mySize(collection){

    const size = Object.values(collection).length;

    return size;
}


// ARRAY FUNCTIONS

function myFirst(array, integer){

    let array1 = array;
    if(!integer){
        array1 = array[0];
    }else{
        array1 = array.slice(0, integer);
    }
    return array1;
}

function myLast(array, integer){

    let array1 = array;
    if(!integer){
        array1 = array[array.length -1];
    }else{
        array1 = array.slice(array.length - integer);
    }

    return array1;
}


// OBJECT FUNCTIONS

function myKeys(object){

    const array = Object.keys(object);

    return array;
}

function myValues(object){

    const array = Object.values(object);

    return array;
}



