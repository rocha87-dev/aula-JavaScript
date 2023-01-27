function verificar(){
    var data=new Date()
    var ano = data.getFullYear()//puxa o ano atual da maquina
    var fano= document.getElementById('txtano') //puxa do input do ano de nasc
    var res= document.querySelector('div#res')//puxa do onclick do botao
    if(fano.value.length ==0 || Number(fano.value) >ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex') //pega dados do radio
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){  //se o radio masc for escolhido
            gênero = 'Homem'
            if(idade >=0 && idade <11){
                //Criança
              img.setAttribute('src', 'foto-crianca-m.png')                
            }else if(idade <21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png') 
            }else if(idade <60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png') 
            }else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png') 
            }
        }else if(fsex[1].checked){//se o radio fem for escolhido
            gênero = 'Mulher'
            if(idade >=0 && idade <11){
                //Criança
                img.setAttribute('src', 'foto-crianca-f.png') 
            }else if(idade <21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png') 
            }else if(idade <60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png') 
            }else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png') 
            }
        }
        res.style.textAlign='center'
        res.innerHTML+=`Detectamos um(a) ${gênero} com ${idade} anos`
        res.appendChild(img) //para puxar a imagem do img.Attribute('id', 'foto')
        document.body.style.background = img.setAttribute('id', 'foto-fundo-crianca.jpg') 
    }
}
