const express = require('express');
const router = express.Router();
const { accounts, writeJSON } = require("../data");

router.get("/transfer", (req, res) => {
    res.render("transfer");
});

router.post('/transfer', (req, res) => {
    accounts[req.body.from].balance -= req.body.amount;
    accounts[req.body.to].balance += parseInt(req.body.amount, 10);
    const accountsJSON = JSON.stringify(accounts, null, 4);

    // fs.writeFileSync(
    //     path.join(__dirname, "json/accounts.json"),
    //     accountsJSON,
    //     "utf8"
    // );
    writeJSON()
    res.render("transfer", { message: "Transfer Completed" });
})

router.get('/payment', (req, res) => {
    res.render('payment', { account: accounts.credit })
})

router.post('/payment', (req, res) => {
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available += parseInt(req.body.amount, null, 10);
    const accountsJSON = JSON.stringify(accounts, null, 4);

    // fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON, "utf8");
    writeJSON()

    res.render("payment", { message: "Payment Successful", account: accounts.credit });
})

module.exports = router