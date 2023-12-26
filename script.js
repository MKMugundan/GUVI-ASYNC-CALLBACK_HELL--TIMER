// Variable

let backScreen = document.querySelector('#timer')
let content = document.querySelector('.content');
let button = document.querySelector('#start');

const change_color = function()
{
  const hex = '0123456789ABCDEF';
  let color = '#';
for(let i=0;i<6;i++)
{
  color += hex[Math.floor(Math.random()*16)];
}
return color;
};

button.addEventListener("click",function()
{
  setTimeout(()=>
  {content.innerHTML = "10";
    setTimeout(()=>{content.innerHTML = "9";},500)
    setTimeout(()=>{content.innerHTML = "8";},1000)
    setTimeout(()=>{content.innerHTML = "7";},2000)
    setTimeout(()=>{content.innerHTML = "6";},3000)
    setTimeout(()=>{content.innerHTML = "5";},4000)
    setTimeout(()=>{content.innerHTML = "4";},5000)
    setTimeout(()=>{content.innerHTML = "3";},6000)
    setTimeout(()=>{content.innerHTML = "2";},7000)
    setTimeout(()=>{content.innerHTML = "1";},8000)
    setTimeout(()=>
    {
      content.style.fontSize = '20px';
      content.innerHTML = "HAPPY INDEPENDENCE DAY";
      colorChange();
    },10000)
  },150)
});

const colorChange = ()=> setInterval(()=>
{
  backScreen.style.backgroundColor = change_color();
},200)