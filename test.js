const assert = require('assert');

describe('Testes API', () => {
  it('getData deve retornar os dados da API', async () => {
    const data = await getData();
    assert.ok(data); 
    assert.ok(data.length > 0); 
  });

  it('tab deve retornar os dados da API da pagina 1', async () => {
    const data = await tab();
    assert.ok(data);
    assert.ok(data.length > 0);
  });

  it('tab1 deve retornar os dados da API da pagina 2', async () => {
    const data = await tab1();
    assert.ok(data);
    assert.ok(data.length > 0);
  });

  it('tab2 deve retornar os dados da API da pagina 3', async () => {
    const data = await tab2();
    assert.ok(data);
    assert.ok(data.length > 0);
  });

});
