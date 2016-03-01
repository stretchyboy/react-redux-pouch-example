# react-redux-pouch-example
Sample project using react, redux, react-router and pouchdb

# Database configuration
PouchDB is set up in `src/configureDB.js`:

```js
const db = new PouchDB('http://127.0.0.1:5984/sync-note')
```

By default, this pouchdb instance will connect to a remote server.
Please run CouchDB or PouchDB server background listening `127.0.0.1:5984` and create a database called `sync-note`.  
Or change this configuration to use a local database:

```js
const db = new PouchDB('sync-note')
```

# Run
This project requires `gulp`, `webpack` and `webpack-dev-server` globally installed.
If not, please run:

``` bash
npm install -g gulp webpack webpack-dev-server
```

When installed, please run:

```bash
$ npm install
$ gulp build
$ webpack-dev-server
```

Then access to http://localhost:8080/
