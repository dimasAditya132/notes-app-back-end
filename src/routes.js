const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
} = require('./handler');

const routes = [
    //Menambahkan note
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },

    //Menampilkan semua daftar note
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },

    //Menampilkan detail isi note
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },

    //Mengubah isi note
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },

    //Menghapus note
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;
