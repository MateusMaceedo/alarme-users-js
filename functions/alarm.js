const res = document.getElementById("res")

function defin(){
    
    let hora = Number(document.getElementById("inH").value)
    let minuto = Number(document.getElementById("inM").value)
    const audioAtivar = document.getElementById("ativar")

    
    if(validateHour(hora, minuto) == false){
        alert("Horário Invalido! ")
        res.innerHTML = ""
    }
    else {
        setInterval(() => {
            if (audioCondition(hora, minuto) == true) {
                audioAtivar.play()  
            }
        }, 1000)
        
        if(minuto < 10){
            res.innerHTML = `Horário Definido para ${hora}:0${minuto}`
        }else{
            res.innerHTML = `Horário Definido para ${hora}:${minuto}`
        }
    }
}  

function desativar(){
    const audioAtivar = document.getElementById("ativar")
    const audioDesativar =  document.getElementById("desativar")
    
    audioAtivar.pause() 
    audioDesativar.play()
    
    res.innerHTML = ""
}