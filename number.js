document.getElementById('che').addEventListener("click", tahmin)


const sayi = 40;
const you = document.getElementById("you");
var counter = 0;

function tahmin(){
    let guess = document.getElementById("num").value;
    counter += 1;
    if (counter ===6){
        if (window.confirm("Do you want a tip?"));
      you.style.visibility="visible";
    }
    else{

    if (guess < sayi){
        document.getElementById('mes').innerHTML =  "Please higher";
        document.getElementById("deneme").innerHTML =  "you tried "  +counter + " times";
       
        
        }
    else if (guess> sayi){
        document.getElementById('mes').innerHTML =  "Please lower";
        document.getElementById("deneme").innerHTML = "you tried "  +counter + " times";
    
          
        }
    else{
            document.getElementById('deneme').innerHTML = 'Deneme sayısı : ' + counter;
            document.getElementById('mes').innerHTML = 'Bravo';
            
           
    }
    return

    }}