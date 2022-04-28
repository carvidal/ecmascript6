const clients = [ 
    { id: 1, taxNumber: '86620855', 
    name: 'HECTOR ACUÑA BOLAÑOS'},
    { id: 2, taxNumber: '7317855K',
    name: 'JESUS RODRIGUEZ ALVAREZ'},  
    { id: 3, taxNumber: '73826497',
     name: 'ANDRES NADAL MOLINA'},
    { id: 4, taxNumber: '88587715', 
    name: 'SALVADOR ARNEDO MANRIQUEZ'},  
    { id: 5, taxNumber: '94020190', 
    name: 'VICTOR MANUEL ROJAS LUCAS'},  
    { id: 6, taxNumber: '99804238', 
    name: 'MOHAMED FERRE SAMPER' } ]; 
// 1 Arreglo con los ids de clientes ordenados por rut
function listClientsIdsSortByTaxNumber(ascendente = true) {
    let clientsAux_ = clients.slice(0, clients.length);
    let clientsOrderByRut = clientsAux_.sort(function(a, b) {
        let aSinDigitoVerificador = a.taxNumber.slice(0, a.taxNumber.length - 1);
        let bSinDigitoVerificador = b.taxNumber.slice(0, b.taxNumber.length - 1);
        if (ascendente) {
            return aSinDigitoVerificador - bSinDigitoVerificador;
        } else {
            return bSinDigitoVerificador - aSinDigitoVerificador;
        }
    });
    return clientsOrderByRut.map((clientsOrderByRut) => clientsOrderByRut.id);
};

 
    console.log(listClientsIdsSortByTaxNumber(clients));
   const accounts = [ 
    { clientId: 6, bankId: 1, balance: 15000 }, 
    { clientId: 1, bankId: 3, balance: 18000 }, 
    { clientId: 5, bankId: 3, balance: 135000 }, 
    { clientId: 2, bankId: 2, balance: 5600 }, 
    { clientId: 3, bankId: 1, balance: 23000 }, 
    { clientId: 5, bankId: 2, balance: 15000 }, 
    { clientId: 3, bankId: 3, balance: 45900 }, 
    { clientId: 2, bankId: 3, balance: 19000 }, 
    { clientId: 4, bankId: 3, balance: 51000 }, 
    { clientId: 5, bankId: 1, balance: 89000 }, 
    { clientId: 1, bankId: 2, balance: 1600 }, 
    { clientId: 5, bankId: 3, balance: 37500 }, 
    { clientId: 6, bankId: 1, balance: 19200 }, 
    { clientId: 2, bankId: 3, balance: 10000 }, 
    { clientId: 3, bankId: 2, balance: 5400 }, 
    { clientId: 3, bankId: 1, balance: 9000 }, 
    { clientId: 4, bankId: 3, balance: 13500 }, 
    { clientId: 2, bankId: 1, balance: 38200 }, 
    { clientId: 5, bankId: 2, balance: 17000 }, 
    { clientId: 1, bankId: 3, balance: 1000 }, 
    { clientId: 5, bankId: 2, balance: 600 }, 
    { clientId: 6, bankId: 1, balance: 16200 }, 
    { clientId: 2, bankId: 2, balance: 10000 } 
   ] 
   const banks = [ 
    { id: 1, name: 'SANTANDER' }, 
    { id: 2, name: 'CHILE' }, 
    { id: 3, name: 'ESTADO' } 
   ];
   
   // 0 Arreglo con los ids de clientes 
function listClientsIds(clients) { 
    return clients.map((clients) => clients.id);     
};
console.log(listClientsIds(clients));

// 1 Arreglo con los ids de clientes ordenados por rut 
function listClientsIdsSortByTaxNumber(clients) { 
    clients.sort((a, b) => a.taxNumber > b.taxNumber ? 1 : -1)
} 

const container = document.getElementById('container'); 

const url = 'https://gist.githubusercontent.com/lomefin/907bab0a42231d3ecaf4a2d4559b8e53/raw/bfdb5f2fbcbeb88e3b0ae5ec4f32fcd4aa5e768d/movements.txt';

fetch(url)
.then(response => response.text())
  .then(data => console.log(data));

