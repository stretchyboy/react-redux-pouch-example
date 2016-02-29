import PouchDB from 'pouchdb'

const db = new PouchDB('http://127.0.0.1:5984/sync-note')

export { db }
