import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/api/hello', (req, res) => {
  res.send('Hello World!');
});

app.get("/api/users",(req,res)=>{
    res.json([  
        {id:1,name:"Alice"},
        {id:2,name:"Bob"},
        {id:3,name:"Charlie"}
    ]);
})

app.get('/api/goodbye', (req, res) => {
  res.send('Goodbye World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
