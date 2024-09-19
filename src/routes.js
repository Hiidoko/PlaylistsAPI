const express = require('express')
const playlistsController = require('./controllers/playlists-controller')

const playListsRouter = express.Router()

playListsRouter.get('/', playlistsController.index)
playListsRouter.get('/:id', playlistsController.show)
playListsRouter.post('/', playlistsController.save)
playListsRouter.put('/:id', playlistsController.update)
playListsRouter.delete('/:id', playlistsController.delete)

playListsRouter.post('/:id/musics', playlistsController.addMusic)
playListsRouter.delete('/:playlistId/musics/:musicId', playlistsController.removeMusic)


module.exports = playListsRouter