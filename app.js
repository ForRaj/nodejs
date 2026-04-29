app.get('/user', (req,res)=>{
 let id = req.query.id;
 let query = "SELECT * FROM users WHERE id=" + id;
 db.query(query);
});
