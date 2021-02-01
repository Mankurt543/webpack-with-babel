export class Customer{
    constructor(username,age){
        this.username=username,
        this.age=age
    }
  async  doit(){
      let x=await new Promise((resolve,reject)=>{
          setTimeout(()=>resolve(this.username+" "+this.age),2000)
      })
      return x
    }
}