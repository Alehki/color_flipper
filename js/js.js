const primary_color = document.getElementById(`Primary-color`) 
const secondary_color = document.getElementById(`Secondary-color`) 
// const tertiary_color = document.getElementById(`Tertiary-color`) 
const hexadecimal_color = document.getElementById(`Hexadecimal-color`) 
const color = document.getElementById(`color`);

const list_primary = [`red`, `blue`, `yellow`]
const list__secondary = [`green`, `orange`, `violet`]
const list__hexadecimal = [`#FF7F00`, `#FF007F`, `#7F00FF`, `#007FFF`, `#00FF7F`, `#7FFF00`]

const style_property = document.documentElement.style

primary_color.addEventListener(`click`, ()=>{
    let random = Math.floor(Math.random() * list_primary.length)
    let element = list_primary[random]
    console.log(element)
    while(color.textContent == element){
        random = Math.floor(Math.random() * list_primary.length)
        element = list_primary[random]
    } 
    style_property.setProperty(`--background-color-body`, element)
    color.textContent = element
    console.log(element)
})

secondary_color.addEventListener(`click`, ()=>{
    let random = Math.floor(Math.random() * list__secondary.length)
    let element = list__secondary[random]
    while(color.textContent == element){
        random = Math.floor(Math.random() * list__secondary.length)
        element = list__secondary[random]  
    }
    style_property.setProperty(`--background-color-body`, element)
    color.textContent = element
})

hexadecimal_color.addEventListener(`click`, ()=>{
    let random = Math.floor(Math.random() * list__hexadecimal.length)
    let element = list__hexadecimal[random]
    while(color.textContent == element){
        random = Math.floor(Math.random() * list__hexadecimal.length)
        element = list__hexadecimal[random]
    }
    style_property.setProperty(`--background-color-body`, element)
    color.textContent = element
})