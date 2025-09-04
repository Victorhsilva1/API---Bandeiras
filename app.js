function exibirDadosPais(infoPais) {
    console.log(infoPais)
    //Indo na API conferindo quais são os dados e parametros a ser pegos 
     document.getElementById('country-flag').src = infoPais.flags.png
     document.getElementById('country-name').textContent = infoPais.name.common 
     document.getElementById('country-capital').textContent = infoPais.capital[0]
}
//Função para obter os dados do país a partir da API, porém só funcionaria como assincrona
async function obterPais(pais) {
    //API url que seria a API do restcountries
    const url = `https://restcountries.com/v3.1/name/${pais}`

    //assincrona - fetch
    const response = await fetch(url)

    const data = await response.json()

    //Pegando o primeiro elemento do array retornado pela API
    return data[0]

}

//Capturando o evento de pressionar a tecla Enter no input
//Passando uma função callback assincrona
document.getElementById('country-input').addEventListener('keydown' , async (evento)=> {
    
    //Verificando se a tecla pressionada é o Enter
    if (evento.key == 'Enter') {
        const infoPais = await obterPais(evento.target.value)

        //responsável por preencher o formulário com os dados do país
        exibirDadosPais(infoPais)
    }

    
})
