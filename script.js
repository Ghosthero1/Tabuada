function tabuada(){
    let num = document.querySelector('input#num')
    let select = document.getElementById('iselect')
    if(num.value.length == 0 ){
        window.alert('Digite um número!')
    }else{
     let n = Number(num.value)
     let c = 1
     select.innerHTML = ''
     while(c <= 10){
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n * c}`
        select.appendChild(item)
        c++
     }
    }
}