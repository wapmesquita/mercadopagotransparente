const request = require('request');
const keys = require('./keys');

function getToken() {
    let card = {
        email: "bruno@gmail.com",
        cardNumber: "4509953566233704",
        securityCode: "123",
        cardExpirationMonth: 12,
        cardExpirationYear: 2024,
        cardholderName: "Bruce Wayne",
        docType: "DIN",
        docNumber: "123456789",
        paymentMethodId: "visa"
    }

    return new Promise(function (resolve, reject) {
        request.post(`https://api.mercadopago.com/v1/card_tokens?public_key=${keys.publicKey}`, {
            json: card
        }, (error, res, body) => {
            if (error) {
                console.log(error)
                reject(error);
                return
            }
            resolve(body);
        })
    });
}

getToken().then((body) => {
    console.log(`Card Token ===> ${JSON.stringify(body)}`);
});


var response_example = {
    "id": "284c7ea664320174ec3a9dfcf51dd36e",
    "public_key": "TEST-bd39e6fb-c304-42b8-8e03-ac4431b633c9",
    "first_six_digits": "450995",
    "last_four_digits": "3704",
    "cardholder": { "identification": {} },
    "status": "active",
    "date_created": "2019-05-15T20:28:56.385-04:00",
    "date_last_updated": "2019-05-15T20:28:56.385-04:00",
    "date_due": "2019-05-23T20:28:56.386-04:00",
    "luhn_validation": true,
    "live_mode": false,
    "require_esc": false,
    "card_number_length": 16,
    "security_code_length": 3
}