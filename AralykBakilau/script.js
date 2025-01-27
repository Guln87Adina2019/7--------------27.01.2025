let contain = document.getElementById('container')
let btn = document.getElementById('btn')
let box=document.createElement('box')



async function tapsirma(){
    let responce=fetch.await ('https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7');
    
    
    let btn = (('click'),()=>{
        btn.textContent=prompt('Деректер алынуда...')
    })
    
    if (!responce){
       prompt = ('Қате!')
    
     } else {
        prompt= ('Деректер сәтті алынды!')

        box.appendChild = ('div')
        box.textContent = ('10сұрақтық JavaScript викторинасына өту')
        } 
        ((dbclick),()=>{
            box.textContent= ("JSON деректерін JavaScript көмегімен шығару ")
        })  
    }   



    
tapsirma();