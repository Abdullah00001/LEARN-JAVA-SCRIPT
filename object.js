/* let a = {
    userName: "", userAge: 0, userRole: ""
}
a.userName = "Abdullah"
a.userAge = 20
a.userRole = "learner"
console.log(a.userName, a.userAge, a.userRole) */
let b = {
    carModel: "", carName: "", carPrice: 0, carNO: 0,
    carReg: function () {
        return this.carModel + this.carNO
    }
}
b.carModel = "1er56t", b.carNO = 111456
console.log(b.carReg())