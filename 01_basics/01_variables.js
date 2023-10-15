const accountId=14455;
let accountEmail="vishesh@gmail.com";
var accountPassword="12345"
accountCity="Gwalior"
let accountState

//accountId=2 - not allowed for const
accountEmail ='vs@sm.com'
accountPassword='22222'
accountCity='Indore'

/*
Prefer not to use var because of block and functional scope issues.
*/

//console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])