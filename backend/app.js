const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json()); // Tells Express to treat body as JSON

app.post('/sum', function (req, res, next) {
    console.log(`Summing ${req.query.num1} with ${req.query.num2}`);
    res.json({
        sum: +req.query.num1 + +req.query.num2,
    });
});
app.get('/minus', function (req, res, next) {
    console.log(`Minus ${req.query.num1} with ${req.query.num2}`);
    res.json({
        minus: req.query.num1 - req.query.num2,
    });
});
app.put('/multiply/num1/:num1/num2/:num2', function (req, res, next) {
    // Extract from req.params instead of req.query
    console.log(`Multiply ${req.params.num1} with ${req.params.num2}`);
    res.json({
        multiply: req.params.num1 * req.params.num2,
    });
});
app.delete('/divide', function (req, res, next) {
    // Extract from req.body instead of req.query
    // NOTE: need to configure express to handle json body (see on top)
    console.log(`Divide ${req.body.num1} with ${req.body.num2}`);
    res.json({
        divide: req.body.num1 / req.body.num2,
    });
});

app.listen(port, function () {
    console.log('listening to port http://localhost:' + port);
});
