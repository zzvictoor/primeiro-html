function invert() {
let codInverter = 'html {filter: invert(100%);img{filter: invert(0%);}',//Defini o codInverter com os códigos para inverter o css. (É só um css filter.)
head = document.getElementsByTagName('head')[0],//Defini o head que basicamente vai permitir que funcione, futuramente nas linhas abaixo o head vai adicionar esse "codigo" que fiz.
css = document.createElement('style');  //Defini o css, basicamente isso é uma tag <style>.
    if (!window.botaoswitch)    //basicamente criando um contador
        window.botaoswitch = 1;
    else { //vai somar mais 1 ao contador e se for igual a 2 ele vai definir pra 0 novamente e ao mesmo tempo vai definir no codInverter o css novamente.
        window.botaoswitch++;
        if (window.botaoswitch % 2 == 0)
        codInverter = 'html {filter: invert(0%);}img{filter: invert(100%);}'
    }
css.appendChild(document.createTextNode(codInverter)) //Adiciona a tag style, o codInverter que está definido atualmente através do contador.
head.appendChild(css) //Adiciona o css no head.
}