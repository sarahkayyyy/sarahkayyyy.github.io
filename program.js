import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","Kartka.png")
loadSprite("gwiazda","Gwiazda.png")
loadSound("muzyka","Gdy śliczna panna.mp3")

add([
    sprite("kartka"),
    pos(0,0)
])

const gwiazda = add([
    sprite("gwiazda"),
    pos(300,30)
])

onMouseRelease(()=>play("muzyka"))

let lewo=true

onUpdate(()=>{

    if (gwiazda.pos.x < 600 && lewo) gwiazda.pos.x = gwiazda.pos.x + 1

    else if (!lewo && gwiazda.pos.x > 300)

    {
        gwiazda.pos.x=gwiazda.pos.x-1
    }
    
    else if(!lewo && gwiazda.pos.x <=300)

    {
        lewo=true
    }

    else 
    {
        lewo=false
    }
})