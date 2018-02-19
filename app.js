window.onload=()=>{
    //variables
    const input=document.querySelector('.calc');
    const btns=document.querySelectorAll('button');

   //events
    btns.forEach(btn=>{
        btn.addEventListener('click',e=>{
            let obj = e.target.innerHTML;
            switch (obj) {
                case '=':
                    input.innerHTML = eval(input.innerHTML).toFixed(1);
                    break;
                case 'AC':
                    input.innerHTML = '0';
                    break;
                case 'CE':
                    input.innerHTML=input.innerHTML.slice(0,-1);
                    break;
                default:
                    if (input.innerHTML == '0') {
                        input.innerHTML = obj;
                    } else {
                        input.innerHTML += obj;
                    }
                    break;
            }
        });
    });
    window.addEventListener('keyup',e=>{
        const reg =/[0-9]|[\/\+\-\*\.]/;
        let obj = e.key
        switch (obj) {
            case '=':
            case 'Enter':
                input.innerHTML = eval(input.innerHTML).toFixed(1);
                break;
            case 'Backspace':
                input.innerHTML = input.innerHTML.slice(0, -1);
                break;
            default:
            if(reg.test(obj)){ 
                if (input.innerHTML == '0') {
                    input.innerHTML = obj;
                } else {
                    input.innerHTML += obj;
                }
                break;
            }
        }
    });

};