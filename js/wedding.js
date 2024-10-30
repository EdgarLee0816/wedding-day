document.addEventListener("DOMContentLoaded", ()=>{

    const slideArea = document.querySelector("#slide");
    const popup = [...document.querySelectorAll("#notice ul li a")];
    const popimg = document.getElementById("popup");
    const popbtn = document.querySelector("#popup button")
  

    //alert(slideArea); //object HTML Element

        const toLeft = () => {
            slideArea.style.left = "-100%";
            slideArea.style.transition = "1s";
            setTimeout( next, 1000);
        };

        const next = () => {
            slideArea.style.left = "0px";
            slideArea.style.transition = "none";            
            slideArea.append(slideArea.firstElementChild);
        };

    setInterval( toLeft, 2800 );

    /* alert (popup); */

    popup.forEach( i =>{

        i.addEventListener("click", ()=>{

            popimg.style.display = "block";

            popbtn.addEventListener("click",()=>{

                popimg.style.display = "none";

            });

        });
    });




});//////////////끝