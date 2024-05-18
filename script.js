var img1=document.getElementById('img1'),
    hh=document.querySelector('header'),
    bac=document.querySelector('body');
    
var ip=document.getElementById('i');

var ff=document.getElementById('f');

var or=document.querySelector('.ot');





    img1.onclick = function() {
        
        if (img1.classList.contains("img11")) {
           img1.setAttribute('src','img/moon.svg')
           img1.classList.remove('img11')
           bac.style.backgroundColor='rgb(20, 32, 31)'
           hh.style.backgroundImage="url('img/bg-desktop-dark.jpg')"
           ip.style.backgroundColor="rgb(20, 32, 31)"
           ip.style.color="beige"
            
        } else {
            img1.setAttribute('src','img/sun.svg')
            img1.classList.add('img11')
            bac.style.backgroundColor='bisque'
            hh.style.backgroundImage="url('img/bg-desktop-light.jpg')"
            ip.style.backgroundColor='beige'
            ip.style.color='black'
            
        }
    };

    ff.addEventListener('submit',(e)=>{
        e.preventDefault()
        addtolist()


    }
    )
 function addtolist(){
var tp=ip.value;
var ti=document.createElement('div');
ti.innerHTML=`
<div class='ind'>
<div class='check'>
<img id="ci"  src="img/icon-check (1).svg" alt="">
</div>
<p class='rp'>${tp}</p>
<button class='cc'  id='cro2'><img id='cro' src='img/icon-cross.svg' alt=''></button>
</div>
<hr class='ch'>`

ip.value=""
or.appendChild(ti)
var c2=document.getElementById('cro2');
c2.onclick=function re(){
    ti.remove()
}

    }

   

  
        
    
        
    