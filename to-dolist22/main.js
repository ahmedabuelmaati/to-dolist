





let input=document.querySelector(`[name=text]`)
let form=document.querySelector("form")
let script=document.querySelector(".script")
let aa=window.localStorage.getItem("aa")


let arr=aa?JSON.parse(localStorage.getItem("aa")):[]
let draw=function(a){
  a.map(ele=>{
    script.innerHTML+=`<div class="deletebtn">${ele["id"]}-${ele["name"]} <button onClick=deleteitem(${ele["id"]}) >delete</button></div>`
 })
}
let allbrt=document.querySelectorAll(".btn")
allbrt.forEach(ele=>ele.addEventListener("click",deleteitem()))
console.log(allbrt)
aa?draw(arr):""
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let x={"id":arr.length+1,"name":input.value}
  arr.push(x)
  window.localStorage.setItem("aa",JSON.stringify(arr))
  script.innerHTML=""
  draw(JSON.parse(localStorage.getItem("aa")))

})
deleteitem=(id)=>{

  let nar=arr.filter(ele=>ele.id!=id)
  window.localStorage.setItem("aa",JSON.stringify(nar))
  script.innerHTML=""
  draw(JSON.parse(localStorage.getItem("aa")))
  window.location.reload()

}