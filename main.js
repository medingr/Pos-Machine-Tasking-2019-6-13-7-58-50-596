const  productDB = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
	];

const barCodes = ['0001', '0003', '0005', '0003'];

function getUniqueBarCodes (barCodes){
    const listOfUniqueBarCodes = [...new Set(barCodes)]; 
    return listOfUniqueBarCodes;
};

function populateProductDetailsArray (barCodes){
    let uniqueBarCodes = getUniqueBarCodes(barCodes);
   
    let productList=[];
    for(let uniqueBarCode of uniqueBarCodes){
        let product = productDB
        .filter(input=>input.id === uniqueBarCode)
        [0];
        let productCount = barCodes
        .filter(input=> input === uniqueBarCode).length;
        console.log(barCodes);
        let subtotal = productCount * product.price;
        product.subTotal= subtotal;
        product.count= productCount;
        productList.push(product);
    }

    return productList;
};
module.exports =  {
    getUniqueBarCodes : getUniqueBarCodes ,
    populateProductDetailsArray : populateProductDetailsArray
    };
