
const ratingEls=document.querySelectorAll('.rating');
const btnEL=document.getElementById("btn");
containerEl=document.getElementById("container");

let selectedRating="";
ratingEls.forEach((ratingEls)=>{
    ratingEls.addEventListener('click', (event)=>{
      removeActive();
      selectedRating=event.target.innerText|| event.target.parentNode.innerText;  
    event.target.classList.add("active")
    event.target.parentNode.classList.add("active")
    
    });
});
btnEL.addEventListener("click",()=>{
    if(selectedRating !=="");{
        containerEl.innerHTML=`
        <strong> Thank you</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We will use your Feedback to imporove Our Customer Support</P>
        `
    }
})
function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove('active');
    })
}   