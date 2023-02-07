const NodeRSA = require("node-rsa")

// const key = new NodeRSA({b : 1024});
let secret = "this is secret"


const public = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCEwp8jjwu976oHAHUn4gQJm+lbyHZ5959W/SvjmPqUWJThejFfB99Y3f8NnqPNLE/qR2Oiq26U25Ko1S3pvXjapXP1ncDFj3QUgXNF2etH6ruRlNtKBVdf32GeA3hE3wwDIBZwFk9M3ShzR2uckIJMkCJvhQsrM/hZ9SMkNYBg8wIDAQAB-----END PUBLIC KEY-----"
const private = "-----BEGIN RSA PRIVATE KEY-----MIICXAIBAAKBgQCEwp8jjwu976oHAHUn4gQJm+lbyHZ5959W/SvjmPqUWJThejFfB99Y3f8NnqPNLE/qR2Oiq26U25Ko1S3pvXjapXP1ncDFj3QUgXNF2etH6ruRlNtKBVdf32GeA3hE3wwDIBZwFk9M3ShzR2uckIJMkCJvhQsrM/hZ9SMkNYBg8wIDAQABAoGAXKSHcsPumLN2/f3Ww2cYFDCFjrP74S7oNUbkaqWlLwIFmravXzZaKGR6CGIMwi9K8RyyLaDdwOjclg51RKggfclyntA+qTnXytEzrzMQqtq/WEM1xoJ+T1xNepctdPp+hvs7x9PrcFYWoTJRgEQ6+fDbth20MgcSP5jinpGPAekCQQDGx0pdba+CNYZMbLXi+6VN24k4TdPbSBBNCW6A+5Ms8dubycGM7haMLsiaVZQdOq4qQ635q4xSxRhEjckfdG89AkEAqvo0+mDnfLeOtgFWY1HUpfyxYCmzZtc6a4rEXxqMcua1cUNYLrZQDTcWuS81TmaUJkJ9lJAup8Qk2YHOWmcT7wJBAJiJR+yoBf2Ce1tcNLtI5lH3vLYDKybjhvbG3RCHfSoJMr+6tBckgRLzt6aPM0i2xf3Sz8d+uACwFG5O616C5/UCQG753G0vfNFcq0rDb3kj4iyi6daK+qEjzg2DkpZQOx1RVi/gEFqxhyAsw5kLZUQwHLUAr1ZAh6fpDioHsRLImQ0CQARlpQEptzdS/RasrwINghhCKFyCifev2jU6Qsby57jB7DwL+CLxLAgYpH/fghKtVEA0+tPV9vvPtjt2K+p45fA=-----END RSA PRIVATE KEY-----"

let public_key = new NodeRSA(public)
let private_key = new NodeRSA(private)


var encry = public_key.encrypt(secret,'base64');


var decrypt = private_key.decrypt(encry,"utf8")
console.log(decrypt);