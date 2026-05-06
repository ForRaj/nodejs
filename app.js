app.get('/user', (req,res)=>{
 let id = req.query.id;
 let query = "SELECT * FROM users WHERE id=" + id;
 db.query(query);
});
// aws.js
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";     // ❌ SECRET
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"; // ❌ SECRET
