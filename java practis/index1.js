const btns=document.querySelectorAll('button');
const bdy=document.querySelector('body')
let h1 = document.createElement('h1')
bdy.append(h1)

for(const btn of btns){
    const color=btn.innerText.toLowerCase();
    console.log(color);
    btn.style.backgroundColor=color;

    btn.addEventListener('click',function(){
        bdy.style.backgroundColor = this.style.backgroundColor
    
    })

    btn.addEventListener('mouseover',function(){
        bdy.style.backgroundColor = this.style.backgroundColor
    
    })

    btn.addEventListener('click',function(){
        h1.innerText = `your color is ${btn.style.backgroundColor.toUpperCase()}`
    })


    btn.addEventListener('mouseover',function(){
        h1.innerText = `your color is ${btn.style.backgroundColor.toUpperCase()}`
    })
    
    h1.addEventListener('mouseout',function(){
        h1.style.color='black'
    })

    h1.addEventListener('mouseover',function(){
        h1.style.color='white'
    })
};