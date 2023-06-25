// -----------------------------Objetos / metodos / funções ----------------------------------------------------

//Realiza as conversões de comprimento
//o toFixed(3) faz com que o resultado tenha sempre 3 casas decimais
var conversoesComprimento = {
    metroPolegada: function (valorPartida) {
        var saidaCompr = parseFloat(valorPartida) * 39.3701
        return (valorPartida + " metros = " + saidaCompr.toFixed(3) + " polegadas")
    },
    metroCentimetro: function (valorPartida) {
        saidaCompr = parseFloat(valorPartida) * 100
        return (valorPartida + " metros = " + saidaCompr.toFixed(3) + " centímetros")
    },
    cmMetro: function (valorPartida) {
        saidaCompr = parseFloat(valorPartida) * 0.01
        return (valorPartida + " centímetros = " + saidaCompr.toFixed(3) + " metros")
    },
    cmPolegada: function (valorPartida) {
        saidaCompr = parseFloat(valorPartida) * 0.393701
        return (valorPartida + " centímetros = " + saidaCompr.toFixed(3) + " polegadas")
    },
    polegadaMetro: function (valorPartida) {
        saidaCompr = parseFloat(valorPartida) * 0.0254
        return (valorPartida + " polegadas = " + saidaCompr.toFixed(3) + " metros")
    },
    polegadaCm: function (valorPartida) {
        saidaCompr = parseFloat(valorPartida) * 2.54
        return (valorPartida + " polegadas = " + saidaCompr.toFixed(3) + " centímetros")
    }
}

//Realiza as conversões de peso
var conversoesPeso = {
    kgGramas: function (valorPartida) {
        var saidaPeso = parseFloat(valorPartida) * 1000
        return (valorPartida + " quilogramas = " + saidaPeso.toFixed(3) + " gramas")
    },
    kgLibras: function (valorPartida) {
        saidaPeso = parseFloat(valorPartida) * 2.20462
        return (valorPartida + " quilogramas = " + saidaPeso.toFixed(3) + " libras")
    },
    gramaKg: function (valorPartida) {
        saidaPeso = parseFloat(valorPartida) * 0.001
        return (valorPartida + " gramas = " + saidaPeso.toFixed(3) + " quilogramas")
    },
    gramaLibras: function (valorPartida) {
        saidaPeso = parseFloat(valorPartida) * 0.00220462
        return (valorPartida + " gramas = " + saidaPeso.toFixed(3) + " libras")
    },
    libraKg: function (valorPartida) {
        saidaPeso = parseFloat(valorPartida) * 0.453592
        return (valorPartida + " libras = " + saidaPeso.toFixed(3) + " quilogramas")
    },
    libraGrama: function (valorPartida) {
        saidaPeso = parseFloat(valorPartida) * 453.592
        return (valorPartida + " libras = " + saidaPeso.toFixed(3) + " gramas")
    }
}

//Realiza as conversões de temperatura
var conversoesTemperatura = {
    celsiusFah: function (valorPartida) {
        var saida = (parseFloat(valorPartida) * (9 / 5)) + 32
        return (valorPartida + " °C = " + saida.toFixed(3) + " °F")
    },
    celsiusK: function (valorPartida) {
        saida = parseFloat(valorPartida) + 273.15
        return (valorPartida + " °C = " + saida.toFixed(3) + " K")
    },
    FahCelsius: function (valorPartida) {
        saida = (parseFloat(valorPartida) - 32) * (5 / 9)
        return (valorPartida + " °F = " + saida.toFixed(3) + " °C")
    },
    FahK: function (valorPartida) {
        saida = ((parseFloat(valorPartida) - 32) * (5 / 9)) + 273.15
        return (valorPartida + " °F = " + saida.toFixed(3) + " K")
    },
    KCelsius: function (valorPartida) {
        saida = parseFloat(valorPartida) - 273.15
        return (valorPartida + " K = " + saida.toFixed(3) + " °C")
    },
    KFah: function (valorPartida) {
        saida = ((parseFloat(valorPartida) - 273.15) * (9 / 5)) + 32
        return (valorPartida + " K = " + saida.toFixed(3) + " °F")
    }
}

//recarrega a página - será utilizada para recarregar a página quando forem utilizadas unidades de partida e destino iguais
function recarregaPagina(){
    location.reload();
}

//Exibe somente a resposta do formulário, o botão serve para voltar para a pagina inicial
//a função recarregaPagina foi utilizada para extinguir a necessidade de criação de nova página html
function escondeForms(){
    document.querySelector("#formulario").style.display = "none"
    document.querySelector("#secaoResultado").style.display = "flex"
    var botao = document.querySelector("#botaoVoltar")
    botao.addEventListener("click", function(){
        recarregaPagina()
    })
    
}

// -------------------------Código principal -------------------------------------------------------------------------------


//seleciona os valores da categoria
var selecionaElemento = document.querySelector("#categoria")

//esconde a opções de unidade de medida do formulário no momento em que o usuário ainda não escolheu a categoria de medição
document.querySelector("#unidadePartida").style.display = "none"
document.querySelector("#unidadeDestino").style.display = "none"

//esconde o botão de voltar, este aparecerá somente quando houver resultado de conversao
document.querySelector("#secaoResultado").style.display = "none"

//evento manipulador para selecionar o valor escolhido 
//as condicionais fazem com que apareça somente as opções de unidade de medida referente a categoria de medição escolhida
selecionaElemento.addEventListener("change", function () {
    //adiciona o valor selecionado à variável
    var selecionaValor = selecionaElemento.value
    document.querySelector("#unidadePartida").style.display = "flex"
    document.querySelector("#unidadeDestino").style.display = "flex"

    if (selecionaValor === "comprimento") {
        document.querySelector("#opcoesComprimento").style.display = "block"
        document.querySelector("#opcoesPeso").style.display = "none"
        document.querySelector("#opcoesTemperatura").style.display = "none"
        document.querySelector("#opcoesComprimentoDestino").style.display = "block"
        document.querySelector("#opcoesPesoDestino").style.display = "none"
        document.querySelector("#opcoesTemperaturaDestino").style.display = "none"
    }

    else if (selecionaValor === "peso") {
        document.querySelector("#opcoesComprimento").style.display = "none"
        document.querySelector("#opcoesPeso").style.display = "block"
        document.querySelector("#opcoesTemperatura").style.display = "none"
        document.querySelector("#opcoesComprimentoDestino").style.display = "none"
        document.querySelector("#opcoesPesoDestino").style.display = "block"
        document.querySelector("#opcoesTemperaturaDestino").style.display = "none"
    }
    else {
        document.querySelector("#opcoesComprimento").style.display = "none"
        document.querySelector("#opcoesPeso").style.display = "none"
        document.querySelector("#opcoesTemperatura").style.display = "block"
        document.querySelector("#opcoesComprimentoDestino").style.display = "none"
        document.querySelector("#opcoesPesoDestino").style.display = "none"
        document.querySelector("#opcoesTemperaturaDestino").style.display = "block"
    }
     })

    // -------------------------------- Manipulações de comprimento ------------------------------

    //seleciona os valores de partida e destino escolhidos
    var selecionaUnComprPart = document.querySelector("#opcoesComprimento")
    var selecionaUnComprDest = document.querySelector("#opcoesComprimentoDestino")

    var imprimeResultado = document.getElementById("resultado")

    //Evento manipulador para selecionar as unidades de medida de partida e destino
    selecionaUnComprPart.addEventListener("change", function () {
        var valorComprPart = selecionaUnComprPart.value
        selecionaUnComprDest.addEventListener("change", function () {
            var valorComprDest = selecionaUnComprDest.value

            //Seleciona o formulario e adiciona um evento para o submit
            document.getElementById("formularioEnvio").addEventListener("submit", function (evento) {
                evento.preventDefault() //retira o envio padrão do formulario

                //seleciona o valor a ser convertido
                var selecionaValorEntrada = document.getElementById("valor")
                var valorEntrada = selecionaValorEntrada.value

                if (valorComprPart === "metros" && valorComprDest === "polegadas") {
                    imprimeResultado.innerHTML = conversoesComprimento.metroPolegada(valorEntrada)
                }
                else if (valorComprPart === "metros" && valorComprDest === "centimetros") {
                    imprimeResultado.innerHTML = conversoesComprimento.metroCentimetro(valorEntrada)
                }
                else if (valorComprPart === "centimetros" && valorComprDest === "metros") {
                    imprimeResultado.innerHTML = conversoesComprimento.cmMetro(valorEntrada)
                }
                else if (valorComprPart === "centimetros" && valorComprDest === "polegadas") {
                    imprimeResultado.innerHTML = conversoesComprimento.cmPolegada(valorEntrada)
                }
                else if (valorComprPart === "polegadas" && valorComprDest === "metro") {
                    imprimeResultado.innerHTML = conversoesComprimento.polegadaMetro(valorEntrada)
                }
                else if (valorComprPart === "polegadas" && valorComprDest === "centimetros") {
                    imprimeResultado.innerHTML = conversoesComprimento.polegadaCm(valorEntrada)
                }
                else{
                    alert("As unidades de partida e destino devem ser diferentes")
                    recarregaPagina()
                }
                escondeForms()
            })
        })
    })


    // ------------------------- Manipulações de Peso ----------------------------------------------------------------

    //seleciona os valores de partida e destino escolhidos
    var selecionaUnPesoPart = document.querySelector("#opcoesPeso")
    var selecionaUnPesoDest = document.querySelector("#opcoesPesoDestino")

    var imprimeResultadoPeso = document.getElementById("resultado")

    //Evento manipulador para selecionar as unidades de medida de partida e destino
    selecionaUnPesoPart.addEventListener("change", function () {
        var valorPesoPart = selecionaUnPesoPart.value
        selecionaUnPesoDest.addEventListener("change", function () {
            var valorPesoDest = selecionaUnPesoDest.value

            //Seleciona o formulario e adiciona um evento para o submit
            document.getElementById("formularioEnvio").addEventListener("submit", function (evento) {
                evento.preventDefault() //retira o envio padrão do formulario

                var selecionaValorEntradaPeso = document.getElementById("valor")
                var valorEntradaPeso = selecionaValorEntradaPeso.value

                if (valorPesoPart === "kg" && valorPesoDest === "gramas") {
                    imprimeResultadoPeso.innerHTML = conversoesPeso.kgGramas(valorEntradaPeso)
                }
                else if (valorPesoPart === "kg" && valorPesoDest === "libras") {
                    imprimeResultadoPeso.innerHTML = conversoesPeso.kgLibras(valorEntradaPeso)
                }
                else if (valorPesoPart === "gramas" && valorPesoDest === "kg") {
                    imprimeResultadoPeso.innerHTML = conversoesPeso.gramaKg(valorEntradaPeso)
                }
                else if (valorPesoPart === "gramas" && valorPesoDest === "libras") {
                    imprimeResultadoPeso.innerHTML = conversoesPeso.gramaLibras(valorEntradaPeso)
                }
                else if (valorPesoPart === "libras" && valorPesoDest === "kg") {
                    imprimeResultadoPeso.innerHTML = conversoesPeso.libraKg(valorEntradaPeso)
                }
                else if (valorPesoPart === "libras" && valorPesoDest === "gramas") {
                    imprimeResultadoPeso.innerHTML = conversoesPeso.libraGrama(valorEntradaPeso)
                }
                else{
                    alert("As unidades de partida e destino devem ser diferentes")
                    recarregaPagina()
                }
                escondeForms()
            })
        })
    })

    // ------------------------- Manipulações de Temperatura ----------------------------------------------------------------

    //seleciona os valores de partida e destino escolhidos
    var selecionaUnTemperaturaPart = document.querySelector("#opcoesTemperatura")
    var selecionaUnTemperaturaDest = document.querySelector("#opcoesTemperaturaDestino")

    var imprimeResultadoTemperatura = document.getElementById("resultado")

    //Evento manipulador para selecionar as unidades de medida de partida e destino
    selecionaUnTemperaturaPart.addEventListener("change", function () {
        var valorTemperaturaPart = selecionaUnTemperaturaPart.value
        selecionaUnTemperaturaDest.addEventListener("change", function () {
            var valorTemperaturaDest = selecionaUnTemperaturaDest.value

            //Seleciona o formulario e adiciona um evento para o submit
            document.getElementById("formularioEnvio").addEventListener("submit", function (evento) {
                evento.preventDefault() //retira o envio padrão do formulario

                var selecionaValorEntradaTemperatura = document.getElementById("valor")
                var valorEntradaTemperatura = selecionaValorEntradaTemperatura.value

                if (valorTemperaturaPart === "celsius" && valorTemperaturaDest === "fah") {
                    imprimeResultadoTemperatura.innerHTML = conversoesTemperatura.celsiusFah(valorEntradaTemperatura)
                }
                else if (valorTemperaturaPart === "celsius" && valorTemperaturaDest === "kelvin") {
                    imprimeResultadoTemperatura.innerHTML = conversoesTemperatura.celsiusK(valorEntradaTemperatura)
                }
                else if (valorTemperaturaPart === "fah" && valorTemperaturaDest === "celsius") {
                    imprimeResultadoTemperatura.innerHTML = conversoesTemperatura.FahCelsius(valorEntradaTemperatura)
                }
                else if (valorTemperaturaPart === "fah" && valorTemperaturaDest === "kelvin") {
                    imprimeResultadoTemperatura.innerHTML = conversoesTemperatura.FahK(valorEntradaTemperatura)
                }
                else if (valorTemperaturaPart === "kelvin" && valorTemperaturaDest === "celsius") {
                    imprimeResultadoTemperatura.innerHTML = conversoesTemperatura.KCelsius(valorEntradaTemperatura)
                }
                else if (valorTemperaturaPart === "kelvin" && valorTemperaturaDest === "fah") {
                    imprimeResultadoTemperatura.innerHTML = conversoesTemperatura.KFah(valorEntradaTemperatura)
                }
                else {
                    alert("As unidades de partida e destino devem ser diferentes")
                    recarregaPagina()
                }
                escondeForms()
            })
        })
    })
// })