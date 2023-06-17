document.getElementById('botao').addEventListener('click', tab);

function tab() {

    fetch('https://randomuser.me/api/?page=1&results=15&seed=abc')
        .then(res => res.json())
        .then(data => {


            let author = data.results;
            let tabela = "";

            author.forEach(function (lists) {
                
                
                
                tabela +=`

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

            document.getElementById('tabela').innerHTML = tabela;

        });
};

function tab1() {

  fetch('https://randomuser.me/api/?page=2&results=15&seed=abc')
      .then(res => res.json())
      .then(data => {


          let author = data.results;
          let tabela = "";

          author.forEach(function (lists) {
              
              
              
              tabela +=`

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

          document.getElementById('tabela').innerHTML = tabela;

      });
};

function tab2() {

  fetch('https://randomuser.me/api/?page=3&results=15&seed=abc')
      .then(res => res.json())
      .then(data => {


          let author = data.results;
          let tabela = "";

          author.forEach(function (lists) {
              
              
              
              tabela +=`

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

          document.getElementById('tabela').innerHTML = tabela;

      });
};
