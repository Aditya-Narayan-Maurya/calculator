let string="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{


//for adding audio click button
// const audio=new Audio("click-button-140881.mp3")
// buttons.forEach(button => {
//     button.addEventListener("click",()=>{
//         audio.play();
//     })  
// });
button.addEventListener('click',(event)=>{
    try {
        if(event.target.innerHTML== '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(event.target.innerHTML== 'C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(event.target.innerHTML=='Del'){
        let a=()=>{
            string=string.slice(0,(string.length-1));
            document.querySelector('input').value=string
        }
        a()
        }
        else if(event.target.innerHTML=='sqr'){
            let a=()=>{
                
                document.querySelector('input').value=(string)*(string);
                string=''
            }
            a()
            }
           

        else{
            console.log(event.target);
            string=string + event.target.innerHTML;
            document.querySelector('input').value=string;
        }
    
    } catch (error) {
        document.querySelector('input').value="error"
        string=''

        
    }
    

})
})