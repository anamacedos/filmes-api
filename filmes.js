'use strict'

function criarImagem (link){
    const galeria = document.getElementById('galeria')
    const novaImagem = document.createElement('img')
    novaImagem.src = link
    galeria.appendChild(novaImagem)

}

async function pesquisarFotos(filme){
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${filme}`
    const response = await fetch(url)
    const data = await response.json()
    const dataDesc = data.description
    const imgEncontrada = []

    dataDesc.forEach(function(item){
        imgEncontrada.push(item['#IMG_POSTER'])
    })

    return imgEncontrada

    
}

async function preencherFotos(){
    const filme = document.getElementById('filme').value
    const fotos = await pesquisarFotos(filme)


    const galeria = document.getElementById('galeria')

    galeria.replaceChildren('')

    fotos.forEach(criarImagem)

    console.log(fotos)

}

document.getElementById('pesquisar').addEventListener('click', preencherFotos)