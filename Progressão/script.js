function contar() {
 var ini = document.getElementById('txti')
 var fim = document.getElementById('txtf') 
 var passo = document.getElementById('txtp')
 var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0 ) {
        res.innerHTML = 'impossível contar!'
        window.alert('[ERRO] Faltam dados!')


    } else {
       res.innerHTML ='contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (i < f) {
         //contagem crescente (1-2-3-4...)
            for(let c = i; c <= f; c +=p) {
            res.innerHTML += `${c}\u{1F64A}`
        }


    } else {
        // contagem regressiva (4-3-2-1...)
        for(let c = i; c >= f; c -= p)
        res.innerHTML += `${c} \u{1F64A}`
    }
    res.innerHTML += `\u{1F3C1}`
    }





}
