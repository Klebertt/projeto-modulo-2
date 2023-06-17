document.getElementById('botao1').addEventListener('click', getData);

function getData() {

    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => {


            let author = data.results;
            let output = "";

            author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Nome: ${lists.name.first}</h2></li>
                            <li id="foto" class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Contato: ${lists.cell}</li>
                            <li class="list-group-item">Data de Nascimento: ${lists.dob.date}</li>
                            <li class="list-group-item">Idade: ${lists.dob.age}</li>
                            <li class="list-group-item">Email: ${lists.email}</li>
                            <li class="list-group-item">Sexo: ${lists.gender}</li>
                            <li class="list-group-item">Cidade: ${lists.location.city}</li>
                            <li class="list-group-item">País: ${lists.location.country}</li>
                            <li class="list-group-item">Caixa Postal: ${lists.location.postcode}</li>
                        </ul>
                    </div>
                </div> `;
            });

            document.getElementById('output').innerHTML = output;

        });
};

