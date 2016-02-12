# node-kodi-api

<i>Please consider it as a draft.</i>

Kodi API is written in Node.js, with the [Sails](http://sailsjs.org) framework.

Prerequisites
-------------
- [Node.js](http://nodejs.org) ( >= v4.2.2)
- [MySQL](http://www.mysql.com/)
- [Kodi](http://kodi.tv/) ( >= v14)

Getting Started
---------------

The easiest way to get started is to install Kodi API with Git :

```bash
$ git clone https://github.com/nicowww/node-kodi-api.git
$ cd node-kodi-api
$ npm install
```
#### Connect Kodi API to MySQL
To connect Kodi API to your database, you need to enter your connections informations in the `config/connections.js` file.

Modify the following lines with your own informations :
```
 kodiDb: {
   adapter: 'sails-mysql',
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'MyVideos90'
 },
```

#### Start Kodi API
```
# via node
$ node app.js
# via pm2 (sudo npm install -g pm2)
$ pm2 start app.js
```

#### Visit Kodi API
If you are on localhost, browse : `http://localhost:1337`
