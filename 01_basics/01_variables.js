const accountId =  144553
let accountEmail = "juned@google.com"
var accountPassword = "12345"
accountCity = "Dewas"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword ="21212121"
accountCity = "Bangluru"

console.log(accountId);

/*
prefer not to use var
beouse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
