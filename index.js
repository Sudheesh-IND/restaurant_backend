//import json server

const jsonserver=require('json-server')

//2 create server
const server=jsonserver.create()

//setup path for ddb.json
const router=jsonserver.router('db.json')

//return middleware used by json server
const middleware=jsonserver.defaults()

//setup port
const PORT=process.env.port||3001

server.use(middleware)
server.use(router)

//settingg up the server
server.listen(PORT,()=>{
    console.log('Server connected to post 3001')
})