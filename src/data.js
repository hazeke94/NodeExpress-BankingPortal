const fs = require('fs')
const path = require('path')

// Read Account
const accountData = fs.readFileSync(`${__dirname}/json/accounts.json`, "utf8");
const accounts = JSON.parse(accountData);

// Read User
const userData = fs.readFileSync(`${__dirname}/json/users.json`, "utf8");
const users = JSON.parse(userData);

const writeJSON = () => {
    // Write JSON Function Body
    const accountsJSON = JSON.stringify(accounts, null, 4);
    fs.writeFileSync(
        path.join(__dirname, "json/accounts.json"),
        accountsJSON,
        "utf8"
    );
};

module.exports = { accounts, 
    users, 
    writeJSON }