var input = document.querySelector("#your-input-id")
var buttons = document.querySelectorAll("button.number-button")


for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    input.value = input.value + event.currentTarget.value
   var style =event.target.classList;
    if(style.contains('clear'))
    document.getElementById('your-input-id').value="";

  })
}

function calc(){
  input= document.getElementById("your-input-id").value;
  if (input.includes('+'))
  {
    var nums=input.split('+');
    document.getElementById('your-input-id').value=parseInt(nums[0])+parseInt(nums[1])

  }
  if (input.includes('-'))
  {
    var nums=input.split('-');
    document.getElementById('your-input-id').value=parseInt(nums[0])-parseInt(nums[1])

  }

  if (input.includes('*'))
  {
    var nums=input.split('*');
    document.getElementById('your-input-id').value=parseInt(nums[0])*parseInt(nums[1])

  }
  if (input.includes('/'))
  {
    var nums=input.split('/');
    document.getElementById('your-input-id').value=parseInt(nums[0])/parseInt(nums[1])
  }
 
}

