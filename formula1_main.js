let des = document.getElementById('des').getContext('2d')

let c1 = new Carro(225,450,50,80,'darkblue')
let carro = new Carro(600,225,100,45,'./assets/f1.png')
// let c2 = new Carro2(400,-40,50,80,'orange')
let c2 = new Carro2(-40,400,100,45,'./assets/carro2.png')
// let c3 = new Carro2(200,-280,50,80,'red')
let c3 = new Carro2(-280,200,100,45,'./assets/carro1.png')
let c4 = new Carro2(-280,200,100,45,'./assets/carro4.png')
let c5 = new Carro2(-280,200,100,45,'./assets/carro6.png')
let estrada = new Estrada(0,0,700,500,'./assets/pista.png')
let estrada2 = new Estrada(-700,0,700,500,'./assets/pista.png')
let coin = new Coin(-20,300, 25, 25, './assets/senna.png')
let drive = new Estrada(0,0, 700, 500, './assets/win.png')
let crash = new Estrada(0,0, 700, 500, './assets/carro5.png')
let t1 = new Text()
let t3 = new Text()
let t4 = new Text()
let t5 = new Text()
let t6 = new Text()
let t7 = new Text()
let t8 = new Text()

cap = 10

let level = 1
let jogar = 1
let musica = new Audio('./assets/batida.mp3')
musica.volume = 0.8
musica.loop = true



document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'w'){
        carro.dir = -7
    }else if(e.key === 's'){
        carro.dir = 7
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'w'){
        carro.dir = 0
    }else if(e.key === 's'){
        carro.dir = 0
    }
})

function pause(){

}

function game_over(){
    if(carro.vida <=0){
        jogar = 0
        musica.pause()
    }
}



function colisao(){
    if(carro.colid(c2)){
        carro.vida -= 1
        c2.recomeca()
    }else if(carro.colid(c3)){
        carro.vida -= 1
        c3.recomeca()
    } else if(carro.colid(coin)){
        carro.pts += 1
        coin.recomeca_coin()
    }
}
function nextlevel(){
    if ((carro.pts >= cap) && (level <=2)){
        cap += 5
        estrada.velocidadeEstrada += 2
        estrada2.velocidadeEstrada += 2
        c2.velocidadeCarro += 2
        c3.velocidadeCarro += 2
        level += 1
        carro.pts = 0
        t8.des_text("Level: " + level,350,250,'red','40px Times')
        t8.des_text('',350,250,'red','0px Times')
    } else if ((carro.pts >= cap) && (level == 3)){
        jogar = 2
    }
}
function desenha(){
    
    if(jogar == 1){
        estrada.des_estrada_img()
        estrada2.des_estrada_img()
        c2.des_car_img()
        c3.des_car_img()
        coin.des_coin_img()
        t1.des_text('Pontos: ' + carro.pts,24,100,'yellow','26px Times')
        t3.des_text('Vida: ' + carro.vida,24,60,'yellow','26px Times')
        t7.des_text("Level: " + level,24, 140, 'yellow', '26px Times')
        carro.des_car_img()

        if(level>=2){
            c4.des_car_img()
        }
        if(level==3){
            c5.des_car_img()
        }

    }else if (jogar == 0){
        crash.des_estrada_img()
        t5.des_text('Game Over',280,120,'yellow','46px Times')
    } else{
        drive.des_estrada_img()
        t5.des_text('You win',280,120,'yellow','46px Times')
    }
    

}
function atualiza(){
    if(jogar == 1){
        musica.play()
        estrada.mov_est()
        estrada2.mov_est()
        c2.mov_carro2()
        c3.mov_carro2()
        coin.mov_coin()
        carro.mov_carro()
        colisao()
        nextlevel()
        game_over()
        if(level>=2){
            c4.mov_carro2()
        }
        if(level==3){
            c5.mov_carro2()
        }
    }
    
}
function main(){
    des.clearRect(0,0,1400,500)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()