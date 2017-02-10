'use strict'

const express 	= require('express');
const path 			= require('path');
const logger		= require('morgan');
const PORT    	= process.argv[2] || process.env.port || 3000;

const app 			= express();
const router 		= express.Router()

app.listen(PORT, ()=> console.log('server started, listening on', PORT));
app.use(express.static(path.join(__dirname, 'dist')));


// app.get('/', (req, res) => {
// 	res.send('HEY THERE')
// })


//This is a catch all route that will send the user back to index.html('/') and then use browserHistory to render the correct component
app.use('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
})
