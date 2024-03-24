const text_element = document.querySelector('.status');
const image = document.getElementById('image');
const body = document.querySelector('body');

const setOnline = () => {
    image.src = "./images/online.png";
    text_element.textContent = "You're Online!!! Connection looks good.";
    body.style.backgroundColor = 'green';
}
const setOffline = () => {
    image.src = "./images/offline.png";
    text_element.textContent = "You're OFFline!!! Connection not working.";
    body.style.backgroundColor = 'red';
}

const connectionStatus = async () => {
    try{
        //async await fetch ra status 200-300 vaye return true
       const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/674px-Cat_November_2010-1a.jpg?time='+(new Date()).getTime());
       setOnline();
       console.log(fetchResult);
       return fetchResult.status >= 200 && fetchResult.status < 300;
    }
    catch(err){
        setOffline();
    }
}

setInterval(async ()=>{
    //Fetch after each 5 secs
    const status = await connectionStatus();
    if(status){
        setOnline();
    }else{
        setOffline();
    }
},5000);

window.addEventListener('load', async (event)=>{
    if(connectionStatus()){
        setOnline();
    }else{
        setOffline();
    }

})