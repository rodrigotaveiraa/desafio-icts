const connection = require('./database/index')

async function checkPolitica(volume) {
    let {otimo, critico} = await connection("politicas").where('id', 1).first()

    if(otimo.includes(" até ") === true){
        let arr = otimo.split(" até ")
        if(arr[0] >= volume && volume >= arr[1]){
            return "Ótimo"
        }
    }
    else {
        if(eval(volume + otimo)){
            return  "Ótimo"
        }
    }

    if(critico.includes(" até ")){
        let arr = critico.split(" até ")
        if(arr[0] >= volume && volume >= arr[1]){
            return "Crítico"
        }

    }else {
        if(eval(volume + critico)){
            return  "Crítico"
        }
    }

    return "Bom"
}

module.exports = checkPolitica