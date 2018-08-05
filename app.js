// function outer(){
//     var x = 6;


//     function inner() {
//         var a = 5;
//         console.log('i am inner function');
//     }

//     inner();
//     console.log(' i am outter function');
//     x;
// }

// outer();


function add(a, b) {

    function jug(){
        return a+b;
    }

    function mainas(){
        return a-b;
    }
        function div(){
            return a/b;
        }
 function multipy(){
     return a*b;
 }
 
 return jug() + mainas()  + div() + multipy();

}

var result = add(100, 5);
console.log(result); 









