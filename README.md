<!--Projeto Cronometro-->
<html
<head>
    <title>Projeto Cronometro - JavaScript</title>
    <style>
        .container{
            text-align: center;
        }
        button{
            background: #069;
            color:white;
            font-size: 32px;
            padding:8px 20px;
            cursor: pointer;
            border:0;
        }
    </style>
</head>
<body>
    <audio id="sound" src="alarm.mp3" style="display: none;"></audio>
    <div class="container">
        <h2>Minutos:</h2>
        <select id="minutos" name="minutos"></select>
        <h2>Segundos:</h2>
        <select id="segundos" name="segundos"></select>
        <br/>
        <br/>
        <button id="comecar">Começar!</button>
        <div id="display">
            <h3></h3>
        </div><!--display-->
    </div><!--container-->
    <script>
        var display = document.getElementById('display');
        var minutos = document.getElementById('minutos');
        var segundos = document.getElementById('segundos');
        var comecar = document.getElementById('comecar');
        var cronometroSeg;
        var minutoAtual;
        var segundoAtual;
        var interval;
        for(var i = 0; i <= 60; i++){
            minutos.innerHTML+='<option value="'+i+'">'+i+'</option>';
        }
        for(var i = 1; i <= 60; i++){
            segundos.innerHTML+='<option value="'+i+'">'+i+'</option>';
        }
        comecar.addEventListener('click',function(){
            minutoAtual = minutos.value;
            segundoAtual = segundos.value;
            display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
            interval = setInterval(function(){
                segundoAtual--;
                if(segundoAtual <= 0){
                    if(minutoAtual > 0){
                        minutoAtual--;
                        segundoAtual = 59;
                    }else{
                        alert("Acabou!");
                        document.getElementById("sound").play();
                        clearInterval(interval);
                    }
                }
                
                display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
            },1000);
        })
    </script>
</body>
</html>
