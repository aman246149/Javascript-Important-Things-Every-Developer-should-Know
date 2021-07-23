
let modal=document.querySelector(".modal");
let showButton=document.querySelector(".showModal");
let closeBtn=document.querySelector("#close")
let overlay=document.querySelector("#overlay");
let formdata=document.querySelector(".form");

function showModal(){
    showButton.addEventListener('click',()=>{
        console.log("clicl")
        modal.classList="modal-active";
        overlay.classList.add("active");
    })
}

function closeButton(){
    closeBtn.addEventListener('click',()=>{
        modal.className="modal";
    })
}

showModal();
closeButton();

overlay.addEventListener('click',()=>{
    console.log("overlay")
    modal.className="modal";
    overlay.classList.remove("active")
})



function getdatafromFrom(){
    formdata.addEventListener('submit',(e)=>{
        e.preventDefault();
        let name=document.querySelector("#name").value;
        let message=document.querySelector("#message").value;
        let data={
            name:name,
            message:message
        }
        console.log(data);
    });
}

getdatafromFrom();
 