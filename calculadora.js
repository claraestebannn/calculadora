var PrimerNumero = 0;
        var SegundoNumero = 0;
        var SignoMulti = false;
        var SignoSuma = false;
        var PulsaRepe = false;
        var resultado =0;
        const vaciar = () => {
            document.getElementById("input").value = "";
        }

        

        //OPERACIONES BINARIAS
        // Se introduce un primer numero, se pulsa la operación
        // se introduce un segundo numero y se pulsa al igual
        

        function mul(){
            //MULTIPLICIÓN
            PrimerNumero = parseFloat(document.getElementById("input").value);
            SignoMulti= true;
            PulsaRepe = false;
            vaciar();
        }
    
        function add(){
            //SUMA
            PrimerNumero = parseFloat(document.getElementById("input").value);
            SignoSuma = true;
            PulsaRepe = false;
            vaciar();
            
            
        }
        function eq(){
            //IGUAL. calculo adecuado segun se haya pulsado antes en multiplicar o sumar
            //mostrando el resultado en el input
            if (SignoMulti){
                //Funcion mul; si se activa SignoMulti, multiplica el PrimerNumero* SegundoNumero
                SegundoNumero = parseFloat(document.getElementById("input").value);
                var result = PrimerNumero * SegundoNumero;
                document.getElementById("answer").innerHTML = result;
                SignoMulti = false;
                
            } else if (SignoSuma){
                //Funcion add; si se activa SignoSuma, suma PrimerNumero + SegundoNumero
                SegundoNumero = parseFloat(document.getElementById("input").value);
                var result = PrimerNumero + SegundoNumero;
                document.getElementById("answer").innerHTML = result;
                SignoSuma = false;
                 
            }
            SegundoNumero = parseFloat(document.getElementById("answer").value);
            PulsaRepe = false;
        } 
        
        



        //OPERACIONES UNITARIAS

        function mod(){
            //MOD calcula el modulo del numero X introducido en el "input"
            //Si numero = positivo lo deja como esta si numero = negativo devuelve como resultado -X 
            var X = parseFloat(document.getElementById("input").value);
            if(X <= 0){
                var result = X * -1;
                document.getElementById("answer").innerHTML = result;
                
            }else{
                var result = X;
                document.getElementById("answer").innerHTML= result;
                
            }
            PulsaRepe = false;
        
        }
        
        function fact(){
            //Funcion fact. Calcula el factorial del numero X introducido en el "input"
            //Fact = X*(X-1)*(x-2)*...*3*2*1
            var total = 1;
            var X = parseFloat(document.getElementById("input").value);
            //Bucle for
            for (i = 1; i <= X; i++){
                total = total * i
            }
            document.getElementById("answer").innerHTML = total;
            PulsaRepe = false;
        }

        


        function square(){
            //Funcion square. Calcula el cuadrado del numero X introducido en el "input"
            // Square = X*X

            if (PulsaRepe == false){
            var X = parseFloat(document.getElementById("input").value);
            var result=X*X;
            document.getElementById("answer").innerHTML = result;
            result2 = result;
            
            }else if(PulsaRepe == true){
            
           
            var result= result2*result2;
            document.getElementById("answer").innerHTML = result;
            result2 = result;
            }
            PulsaRepe = true;
        }
    

    
        
        

        //OPERACIONES EN FORMATO CSV

        function sumatorio(){
            //Funcion sumatorio. Calcula la suma de los elementos introducidos en el "input" introducidos por comas 

            var sumatorio = 0;
            
            var input = document.getElementById("input").value;
            
            var lista = input.split(",");

            lista = Array.from(lista);

            lista = lista.map(function (x){
                return parseFloat(x,10);
            })


            sumatorio = lista.reduce((a,b) => a+b,0);
            document.getElementById("answer").innerHTML = sumatorio;
            PulsaRepe = false;
        }


        function ordenar(){
    
        //Funcion ordenar. Ordena de forma ascendente los elementos introducidos en el "input"

            var input = document.getElementById("input").value;
            
            var lista = input.split(",");

            lista = Array.from(lista);

            lista = lista.map(function (x){
                return parseFloat(x,10);
            })

            var result = lista.sort((a,b) => a-b);
            document.getElementById("answer").innerHTML = result;
            PulsaRepe = false;
        }


        function revertir(){
        
        // Funcion revertir. Invierte el orden de los elementros introducidos en el "input"
            var input = document.getElementById("input").value;
            
            var lista = input.split(",");

            lista = Array.from(lista);

            lista = lista.map(function (x){
                return parseFloat(x,10);
            })

            var result = lista.reverse();
            document.getElementById("answer").innerHTML = result;
            PulsaRepe = false;
        


        }


        function quitar(){
        
        //Funcion que quita el ultimo numero y la coma de los introducidos en el "input"

            var input = document.getElementById("input").value;
            
            var lista = input.split(",");

            lista = Array.from(lista);

            lista = lista.map(function (x){
                return parseFloat(x,10);
            })

            lista.pop();
            document.getElementById("answer").innerHTML = lista;
            repeatSquare = false;
        }


        