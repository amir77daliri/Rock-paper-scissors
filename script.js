let userSelect = document.querySelectorAll('.img-item');
let cpuSelect = document.querySelectorAll('.cpu-img');
let title = document.querySelector('#section-title')


for(let i=0;i<userSelect.length;i++){
    userSelect[i].addEventListener('click', ()=>{
        hiddenUserSelect(i);
        randNum = Number(Math.floor((Math.random()*10)/4));
        console.log(randNum)
        cpuSelect[randNum].classList.remove('hidden')
        let choose = '';
        if (i==0){choose = 'you choose paper'}
        else if (i==1){choose = 'you choose rock'}
        else {choose = 'you choose scissors'}
        title.innerHTML = choose
        gameLogic(i, randNum)
        
    })
}

function hiddenUserSelect(i){
    for(let j=0;j<userSelect.length;j++){
        if(i!=j){
            userSelect[j].classList.add('hidden')
        }
    }
}

function gameLogic(i,randNum){
    if (i!=randNum){
        if(i==0){
            if(randNum == 1){
                document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1
            }
            else{
                document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1
            }
        }

        if(i==1){
            if(randNum == 0){
                document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1
            }
            else{
                document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1
            }
        }
        if(i==2){
            if(randNum == 0){
                document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1
            }
            else{
                document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1
            }
        }
    }
}

document.addEventListener('keydown', e=>{
    if (e.key == 'R'){
        refresh()
    }
})


function refresh(){

    for(let i=0;i<userSelect.length;i++){
        userSelect[i].classList.remove('hidden');
        cpuSelect[i].classList.add('hidden');

    }
    title.innerHTML = "select your choose:"
}