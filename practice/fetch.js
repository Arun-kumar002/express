// let url='https://api.tvmaze.com/search/shows?q=postman';

// // window.fetch(url).then(x=>{
// //     x.json().then(x=>{console.log(x[1].show.url)}).catch(err=>{
// //         console.log('err');
// //     })
// // }).catch(err=>console.log(err))
// let promise=new Promise((resolve,reject)=>{
//     resolve('ok')
// })


// Promise.reject([promise]).then(x=>{console.log(x)}).catch(err=>{
//     console.log(err);
// })

let video=document.querySelector('video')
let btn=document.querySelector('button')

btn.addEventListener('click',camera);

function camera(){
    window.navigator.mediaDevices.getUserMedia({audio:true,video:{width:400,height:500}}).then(e=>{
        video.srcObject=e;
        video.onloadeddata=()=>{
            video.play()
        }
       
    }).catch(err=>console.log(err))
}