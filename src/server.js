const express = require('express')
const playListsRouter = require('./routes')
const app = express()

app.use(express.json())

app.use('/api/playlists', playListsRouter)

const PORT = 3000
app.listen(PORT, () => console.log('Servidor iniciado!'))
