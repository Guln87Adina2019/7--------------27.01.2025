// let contain = document.getElementById('container')
// let btn = document.getElementById('btn')
// let box=document.createElement('box')

// Math.floor(Math.random()*data.record.tasks.length)


// async function tapsirma(){
//     let responce=fetch.await ('https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7');
    
    
//     let btn = (('click'),()=>{
//         btn.textContent=prompt('Деректер алынуда...')
//     })
    
//     if (!responce){
//        prompt = ('Қате!')
    
//      } else {
//         prompt= ('Деректер сәтті алынды!')

//         box.appendChild = ('div')
//         box.textContent = ('10сұрақтық JavaScript викторинасына өту')
//         } 
//         ((dbclick),()=>{
//             box.textContent= ("JSON деректерін JavaScript көмегімен шығару ")
//         })  
//     }   



    
// tapsirma();


let silteme = "https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7"
let btn = document.getElementById('btn')
let questions = document.getElementById('title')


async function fetchData(){
    try{
        let user = await fetch(silteme)
        if(!user.ok){
            throw new Error("Деректер алынбады");

        }
        let data = await user.json()
        console.log(data);

        let qwix = Math.floor(Math.random()*data.record.tasks.length)

        console.log(qwix);
        


        btn.addEventListener("click",function(){
            questions.textContent = data.record.tasks[Math.floor(Math.random()*data.record.tasks.length)].title

        })
        
    }catch(err){
        console.log(err);

    }
}

fetchData()