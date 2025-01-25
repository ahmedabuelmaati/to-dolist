
let input=document.querySelector(`[name=text]`)
let form=document.querySelector("form")
let script=document.querySelector(".script")
let arr=[]
form.addEventListener("submit",(e)=>{
    script.innerHTML=""
    e.preventDefault()
    arr.push(input.value)
    let vv=[]
    for(let i=0 ; i<arr.length ;i++){
        script.innerHTML+=`
    <div class="deletebtn">${i+1}- ${arr[i]} <button>delete</button> </div>`
   
    vv.push(`{
        id:${i+1},
        name:${arr[i]}
    }`)
    window.localStorage.aa=vv
    }
    
    
      
          
        
   
    
    console.log(arr)
})
