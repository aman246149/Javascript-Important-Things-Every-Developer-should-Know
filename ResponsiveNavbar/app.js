
const navSlid=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li')

    burger.addEventListener('click',()=>{
        //togglle
        nav.classList.toggle('nav-active');
        console.log("clicked")

            //animate links

        navLinks.forEach((link,index)=>{
            console.log(index)
            if (link.style.animation) {
                link.style.animation=""
            }else{
                link.style.animation = `navlinksfade 0.5s ease forwards ${index /7+1}s`;
    
            }
    
        })

        // BURGER ANIMATION

        burger.classList.toggle('toggle');

    })

  
}

navSlid();