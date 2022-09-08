let changeName = document.getElementById('name');
let inputName = document.getElementById('input_name');
let inputNumber = document.getElementById('input_number');
let addBtn = document.getElementById('addBtn');
let boxPortion = document.getElementById('boxPorstion');
let alertData = '';
window.addEventListener("load",()=>{
   alertData = prompt('please enter your name');
   document.getElementById('name').innerHTML = `Hey ! ${alertData} Add Your Freinds`
})
var count = 0; 
addBtn.addEventListener('click',()=>{
    var countNum = 0;
    
        if(inputName.value == '' && inputNumber.value == ''){
            return
    }else{
    let creatDiv = document.createElement('div');
        creatDiv.classList.add('freinds_box');
    let creatH3 = document.createElement('h3');
    let creatp = document.createElement('p');
    let creatI = document.createElement('i');
    creatH3.innerHTML = inputName.value;
    creatp.innerHTML = inputNumber.value;
    creatI.innerHTML = 'x';
    creatDiv.append(creatH3);
    creatDiv.append(creatp);
    creatDiv.append(creatI);
    console.log(creatDiv)
    let f ;
    boxPortion.append(creatDiv)
    
    console.log(boxPortion);
    let boxX  = document.getElementsByClassName('freinds_box');
    count += boxX.length;
    inputName.disabled = false;
        countNum += 1;
    creatI.addEventListener('click', ()=>{
        creatDiv.remove();
        console.log(boxX.length)
         if(boxX.length <= 0){
            document.getElementById('info').innerHTML = `Empty Friends List`
    
        }
        if(boxX.length <= 5 ){
            inputName.disabled = false;
            inputNumber.disabled =false;        
        }
    })
    
    inputName.value = '';
    inputNumber.value = '';
    console.log(boxX.length)
    if(boxX.length > 0){
        document.getElementById('info').innerHTML = `Added Friend(s)`
    }
    if(boxX.length > 5 ){
        alert('Friend list is full please delete some friends')
        inputName.disabled = true;
        inputNumber.disabled = true;        
    }
    
    
    }

})
