const express = require('express');
const app = express();
const port = 3000;

//enable post results
app.use(express.urlencoded({ extended: true }));

//powers the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


//sends post result
app.post('/', (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let result = (weight / height / height) * 10000;
    let bmiResult = result.toFixed(1);

    if (result < 18.5) {
        res.send(`Your BMI is: ${bmiResult} and according to the BMI, you're underweight.`);
    } else if (result >= 18.5 && result <= 24.9) {
        res.send(`Your BMI is: ${bmiResult} and according to the BMI, you're on the healthy weight.`);
    } else if (result >= 25 && result <= 29.9) {
        res.send(`Your BMI is: ${bmiResult} and according to the BMI, you're overweight.`);
    } else if (result >= 30) {
        res.send(`Your BMI is: ${bmiResult} and according to the BMI, you're obese.`);
    }
})

//listens to the server
app.listen(port, () => {
    console.log(`The server is listening to the port ${port}`)
});