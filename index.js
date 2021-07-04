// var a = 2
// let b = 3 //number
// const c = 'hello' //string
// let f = 1.56 //float
// let boolean = true || false //boolean
// let array = [[1,2],[3,1]] //array



let object = {

    Human: {
        head: 'Черная',
        hand: '20см',
        comanda: 'Стреляет человек'
        },

    UFO: {
        head: 'Green',
        hand: '30см',
        comanda: 'Стреляет пришелец'
    },

    getItem(x = this.UFO.head) {
        console.log(x)
    }
}

// object.getItem()

// function start(a1 , b1) {
//     let sum = a1 / b1
//     let asd = 'boom'

//     return sum
// }




// for ( let i = 1; i <= 10; i++ ) {
//     if(i === 4) {
//         console.log(`${i + ' Мы молодцы'}`)
//     } else {
//         console.log(i)
//     }
// }


window.onload = () => {
   
    let x = 0

    let box1 = window.document.getElementsByClassName('colorBox1')

    box1[0].addEventListener('click', () => {
        setInterval(()=> {
            box1[0].innerHTML = x + 1
            
            if (x === 9) {
                box1[0].style.background = 'yellow'
                box1[0].innerHTML = object.Human.comanda
            }else if(x === 19) {
                box1[0].style.background = 'red'
                box1[0].innerHTML = object.UFO.comanda
            }else if ( x === 29) {
                box1[0].style.background = 'green'
                x = 0
            }
            x++
        },500)
        
    })

    let count = 0
    let count1 = 0

    window.document.getElementsByClassName('buttonClick1')[0].addEventListener('click', () => {
        count= count + 20
        count1= count1 + 20

    })

    let example = window.document.getElementById("example"),
	ctx = example.getContext('2d');
	
    setInterval(()=>{
        ctx.fillRect(0, 0, example.width, example.height);
        example.width  = 640;
        example.height = 480;
        ctx.fillRect(20,20,150,200)
        
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.moveTo(count, 100);
        ctx.lineTo(100, count1);
        ctx.stroke();

        ctx.fillRect(20,20,20,20)
        ctx.fillStyle = "rgb(255, 0, 0,0)"
    },200)
    

}



