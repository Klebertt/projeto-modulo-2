document.getElementById('botao').addEventListener('click', getData);

function getData() {

    fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json())
        .then(data => {


            let author = data.results;
            let output = "";

            author.forEach(function (lists) {
                
                
                
                output +=`

                <tr>

                    <td>${lists.name.first}</td>
                    <td>${lists.cell}</td>
                    <td>${lists.dob.date}</td>
                    <td>${lists.dob.age}</td>
                    <td>${lists.email}</td>
                    <td>${lists.gender}</td>
                    <td>${lists.location.city}</td>
                    <td>${lists.location.country}</td>
                    <td>${lists.location.postcode}</td>
                </tr>

                `;

            });

            document.getElementById('output').innerHTML = output;

        });
};