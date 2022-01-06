function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#resultado');
    if (fano.value.length == 0 || Number(fano.value)> ano){
        alert('[ERRO] verifique os dados  e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
       
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homen';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','foto-menino.png');
            } else if (idade < 21) {
                //joven
                img.setAttribute('src','foto-jovem.png');
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto-adulto.png');
            }else{
                //idoso
                img.setAttribute('src','foto-idoso.png');
            }
        }else if (fsex[1].checked) {
            genero = 'mulher';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','foto-menina.png');
            } else if (idade < 21) {
                //joven
                img.setAttribute('src','foto-moça.png');
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto-mulher.png');
            }else{
                //idoso
                img.setAttribute('src','foto-idosa.png');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}
