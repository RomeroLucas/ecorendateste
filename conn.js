const mysql = require('mysql')
// const conn = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'ecorenda'
// })

const conn = mysql.createConnection({
    host : 'bcb4zitmaou2stkgdpv6-mysql.services.clever-cloud.com',
    user : 'utqonpx5q16xfxeg',
    password : 'Pf2cvnak5D4W8rQj7aR0',
    database : 'bcb4zitmaou2stkgdpv6'
})


module.exports = conn