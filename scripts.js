const row = document.getElementById("row")

for (i = 0; i < 6; i++) {
    row.innerHTML += `<div class='card'>
                        <div>
                            <img src="https://static.biologianet.com/2020/03/covid.jpg" alt='Imagem Covid'>
                        </div>
                        <div class='card-container'>
                            <h3>Coronavírus: Como a doença é transmitida?</h3>
                            <h4>Saiba o que é o coronavírus, em quanto tempo a doença pode se manifestar e quais são os principais</h4>
                            <a href="#">Ler mais</a>
                        </div>
                    </div>`
    
}

const tr = document.getElementById("aside-tbody")

for (i = 0; i < 4; i++) {
    tr.innerHTML += `<tr>
                        <td>Lorem ipsum dolor</td>
                    </tr>`
    
}