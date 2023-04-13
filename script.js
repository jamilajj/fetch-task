let form = document.querySelector('form');
let inp = document.querySelector('input');
let img = document.querySelector('.img');

form.addEventListener('submit', async (e)=>{
try{
    e.preventDefault();
    img.src = 'https://i.stack.imgur.com/hzk6C.gif';
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+`${inp.value}`+"&appid={0f6ce4b881c1f12eee74f15bd1189036}"+"&lang = az");
 const result=await response.json();
 await result(value);
   
}catch(err){
    alert("seher yoxdur")
}
})