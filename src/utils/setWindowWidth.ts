export const setWidth = () =>{
    window.addEventListener('resize' , ()=>{
        document.body.style.width = `${window.innerWidth}px`
    })
}