const { doublezero } = require("./Doublezero");

module.exports.GetDate=()=>{
    let x=new Date();
    const date = `${doublezero(x.getDate())}-${doublezero(x.getMonth())}-${doublezero(x.getFullYear())}`
    return date
}

module.exports.GetTime=()=>{
    let x=new Date();
    const Time = `${doublezero(x.getHours())}:${doublezero(x.getMinutes())}:${doublezero(x.getSeconds())}`
    return Time
}

module.exports.GetTime2=()=>{
    let x=new Date();
    const Time = `${doublezero(x.getHours())}:${doublezero(x.getMinutes())}`
    return Time
}