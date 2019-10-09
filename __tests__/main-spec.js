const functionMethods = require('../main');

    it('should get Unique BarCodes', () => {
        const barCodes = ['0001', '0003', '0005', '0003'];
        const uniqueBarcodes = ['0001', '0003', '0005'];
        const result = functionMethods.getUniqueBarCodes(barCodes);
        expect(result).toStrictEqual(uniqueBarcodes);
    });

    it('should Populate Details Array', () => {
        const barCodes = ['0001', '0003', '0005', '0003'];
        const productDetails = [
            {
            id : '0001',
            name: 'Coca Cola',
            price: 3 ,
            count: 1 , 
            subTotal: 3},
            {
            id: '0003',
            name: 'Pepsi-Cola',
            price: 5 ,
            count: 2 , 
            subTotal: 10},
            {
            id: '0005',
            name: 'Dr Pepper',
            price: 7 ,
            count: 1 , 
            subTotal: 7}
           ];
	    const result = functionMethods.populateProductDetailsArray(barCodes);
        expect(result).toStrictEqual(productDetails);
    });

     it('should print Receipt', () => {

        let actualText = printReceipt(barCodes);

        let expectText =
            'Receipts\n' +
            '------------------------------------------------------------\n' +
            'Coca Cola                       3          1\n' +
            'Pepsi-Cola                      5          2\n' +
            'Dr Pepper                       7          1\n' +
            '------------------------------------------------------------\n' +
            'Price: 20\n';

        expect(actualText).toBe(expectText);
    });