const fs = require('fs')
const path = require('path')
const express = require('express');
const app = express()
const { accounts, users, writeJSON } = require("./data");
// Require account routes
const accountRoutes = require("./routes/accounts");

// Require service routes
const servicesRoutes = require("./routes/services");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// // Read Account
// const accountData = fs.readFileSync(`${__dirname}/json/accounts.json`, "utf8");
// const accounts = JSON.parse(accountData);

// // Read User
// const userData = fs.readFileSync(`${__dirname}/json/users.json`, "utf8");
// const users = JSON.parse(userData);

app.get('/', (req, res) => {
    res.render('index', { title: 'Account Summary', accounts: accounts })
});

app.use("/account", accountRoutes);
app.use("/services", servicesRoutes);

// app.get('/savings', (req, res) => {
//     res.render('account', { account: accounts.savings })
// })

// app.get('/checking', (req, res) => {
//     res.render('account', { account: accounts.checkings })
// })

// app.get('/credit', (req, res) => {
//     res.render('account', { account: accounts.credit })
// })

app.get('/profile', (req, res) => {
    res.render('profile', { user: users[0] })
})

// app.get("/transfer", (req, res) => {
//     res.render("transfer");
// });

// app.post('/transfer', (req, res) => {
//     accounts[req.body.from].balance -= req.body.amount;
//     accounts[req.body.to].balance += parseInt(req.body.amount, 10);
//     const accountsJSON = JSON.stringify(accounts, null, 4);

//     // fs.writeFileSync(
//     //     path.join(__dirname, "json/accounts.json"),
//     //     accountsJSON,
//     //     "utf8"
//     // );
//     writeJSON()
//     res.render("transfer", { message: "Transfer Completed" });
// })

// app.get('/payment', (req, res) => {
//     res.render('payment', { account: accounts.credit })
// })

// app.post('/payment', (req, res) => {
//     accounts.credit.balance -= req.body.amount;
//     accounts.credit.available += parseInt(req.body.amount, null, 10);
//     const accountsJSON = JSON.stringify(accounts, null, 4);

//     // fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON, "utf8");
//     writeJSON()

//     res.render("payment", { message: "Payment Successful", account: accounts.credit });
// })

app.listen(3000, () => {
    console.log('PS Project Running on port 3000!')
})