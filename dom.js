let header=document.getElementById("header-title");
header.style.borderBottom="solid 2px black";
let heading=document.getElementsByClassName("title");
// console.log(heading)
heading[0].style.fontWeight="bold";
heading[0].style.color="green";


//solution of GetElementsbyClassname
var itms=document.getElementsByClassName('list-group-item')
itms[2].style.backgroundColor='green';

for (let i=0;i<itms.length;i++){
    itms[i].style.fontWeight="bold";
    itms[i].style.color='blue';
}

