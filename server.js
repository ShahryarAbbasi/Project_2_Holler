const express = require('express')
const methodOverride = require('method-override');

const app = express()
const PORT = 4000
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(methodOverride('_method'));

app.get('/', (req, res)=> {
    res.render('home.ejs')
})

app.listen(4000, () => console.log('starting server at port:', PORT))