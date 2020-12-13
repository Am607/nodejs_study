var http = require('http')
var fs = require('fs')    // inbuid fs module fs=File ssystem
var url = require('url')    // url npm module for url in build                                                             
const { notDeepEqual } = require('assert')

http.createServer(function(req, res){  
       var q =url.parse(req.url, true)      // for url npm
      // console.log(q.pathname)          //for print which one running

     //   if(req.url=='/') {       old method only check url
    if(q.pathname==='./'){
    fs.readFile('5sample.html',function(err,data){    

       res.writeHead(200,{'Content-Type':'text/html'})                                       // for understating its html content                                                                                           // pass error and data
        res.write(data)                                                             // ctrl + c for quit from server 
        res.end()       
    })


 } else if(q.pathname==='/signup'){       // login routing      
     fs.readFile('6signup.html',(err, data)=>{
     res.writeHead(300,{'Content-Type' : 'text/html'})
     res.write(data)

     res.end()
     })              
   
    }else if(q.pathname==="/signumpaction"){  
        console.log(q.query.lname)   // req value in server
        res.writeHead(300,{'Content-Type' : 'text/html'})          //signup action set but not workng bcz its null user values
        res.write("<h1>" + q.query.fname+ "</h1>")                // res value in browser
        res.end()


 }else{
    res.write('error')                                 // errot routing
    res.end()
 }
      
                                                                                                                          //Server function can also defind here
  }  ).listen(7000, ()=> console.log("server strated..."))                                                                        // 7000 is the port name
                                                                                    // nginX and ache is server applications => other
                                                                                     // request and recive
