/* function sum(a,b) {
    return a+b
}
let a=10,b=20,c=0
c=sum(a,b)
console.log(c) */
/* function multi(a,b) {
    console.log(a*b)
}
multi(10,5) */
/* function func(a)
{
    if(a==10) return 10
    a+=1
    console.log(a)
    func(a)
}
let a=0
func(a) */
/* function func(a)
{
    if(a==0) return 0
    a-=1
    console.log(a)
    func(a)
}
func(10) */
function func1()
{
    console.log("hello")
}
function func2()
{
    console.log("its Abdullah")
    func1()
}
func2()
func1()