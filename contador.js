window.addEventListener("load", () => {
    const botao = document.getElementById("botao");

    botao.addEventListener("click",() => {
    //window.addEventListener("load", () => {

    // Tempo, sem segundos, que queremos.
    let sec = 360;
    
    const countDiv = document.getElementById("timer");
    
    const secpass = () => {
    
        let min = Math.floor(sec/60);
        let segundosRestantes = sec % 60;
    
        if (segundosRestantes < 10) {
            segundosRestantes = "0" + segundosRestantes;
    
        }
    
        if (min < 10) {
            min = "0" + min;
        }
        
        // Vai gerar o formato 02:59
        countDiv.innerHTML = min + ":" + segundosRestantes;
        
        
        // Condição final
        if (sec > 0){
            sec = sec - 1;
        }
        else{
            countDiv.innerHTML = "Acabou!";
        }
    
    };
    
    const countDown = setInterval(() => secpass(), 1000);
    
    });
})