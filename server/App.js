const express = require('express');
const database = require('./database')
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());

const main = async () => {
    try {
        const result = await database.run();
        app.get('/api1', (req, res) => {
            res.json(result);
        })

        app.post('/api2', (req, res) => {
            const data = req.body.Data;

            console.log(data)
            
            let text = 'correct';

            if(data != 10) {
                app.get('/api3', (req, res) => {
                    res.json({
                        text: 'wrong'
                    })
                })
            } else {
                app.get('/api3', (req, res) => {
                    res.json({
                        text: 'correct'
                    })
                })
            }
        })
        

    } catch (error) {
        console.log(error)
    }
}


main();

const port = 3000;
app.listen(port, (err) => {
    if(err) throw err;
    console.log('The server is running on port ' + port);
})