function func(a,b,c){
    this.a=a;
    this.b=b
    this.c=c
}
func.prototype.add=function(){
    const {a,b,c}=this;
    return a+b+c
}
func.prototype.sub=function(){
    const {a,b,c}=this;
    return a-b-c
}
let a=new func(1,2,3)
let b=new func(1,2,3)

class naveen{
    constructor(a,b,c){
        this.a=a
        this.b=b
        this.c=c
    }
    add(){
        const {a,b,c}=this;
        return a+b+c
    }
    sub(){
        const {a,b,c}=this;
        return a-b-c
    }
}
const x=new naveen(4,5,6)
const y=new naveen(3,4,5)

class raghu extends naveen{
    constructor(a,b,c ,d=5){
        super(a,b,c);
        this.d=d;
    }
multiplay(){
    return this.a*this.b*this.c*this.d;
}
}
let p=new raghu(1)