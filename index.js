const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const categories = require('./data/categories.json')
const news = require('./data/news.json')
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(cors())
// categories
app.get('/categories', (req, res) => {
    res.send(categories)
})
// 1. news
app.get('/news', (req, res) => {
    res.send(news)
})
// 2. specific id wala news
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})
// 3. category wise data load
app.get('/categories/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    if (id == 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews)
    }
})

app.listen(port, () => {
    console.log(`Dragon is running on port: ${port}`)
})