var count = 0


const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn)
{
    btn.addEventListener("click", function (btn)
    {
        const styles =btn.currentTarget.classList;
        if (styles.contains("decrease")) {
            count-=10;
        }
        else if (styles.contains("increase")) {
            count+=10;
        }
        else {
            count = 0
        }
        if (count > 0) {
            value.style.color="green"
        }
        if (count < 0) {
            value.style.color="red"
        }
        if (count === 0) {
            value.style.color="#222"
        }
    
        value.innerHTML=count;
    })



})