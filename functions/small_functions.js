function validateHour(hora, minuto) {
    if(hora < 1 || hora > 24 || minuto < 0 || minuto > 60)
    {
        return false
    }
    else
    {
        return true
    }
}

function audioCondition(hora, minuto) {
    const data = new Date()
    const horaSys = data.getHours()
    const minutosSys = data.getMinutes()
    const segundosSys = data.getSeconds()
    
    if (hora == horaSys && minuto == minutosSys && segundosSys == 0)
    {
        return true
    }
    else
    {
        return false
    }
}