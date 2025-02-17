const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;
app.use(bodyParser.json());

let users = []


let conn = null

const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8820
    })
}


/*
app.get('/testdbnew', async (req, res) => {

    try{
        const results = await conn.query('SELECT * FROM users')
        res.json(results[0])

    }catch (error){
        console.log('error', error.message)
        res.status(500).json({error: 'Error fetching users'})
    }
  
})
*/

//path = GET /users ใช้สำหรับแสดงข้อมูล user ทั้งหมด
app.get('/users', async (req, res) => {
  const results = await conn.query('SELECT * FROM users')
  res.json(results[0])
})

//path = POST /user ใช้สำหรับสร้างข้อมูล user ใหม่
app.post('/users', async (req, res) => {
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user)
    console.log('results', results)
    res.json({
        message: "Create user successfully",
        data: results[0]
    })
})

//path = GET /users/:id ใช้สำหรับดึงข้อมูล user รายคนออกมา
app.get('/users/:id', (req, res) => {
   let id = req.params.id;

   let selectedIndex = users.findIndex(user => user.id == id)

   res.json(users[selectedIndex])
})

//path =  PUT /users/:id ใช้สำหรับแแก้ข้อมูล user รายคน (ตาม id ที่ระบุ)
app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id)
 
        users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
        users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname
        users[selectedIndex].age = updateUser.age || users[selectedIndex].age
        users[selectedIndex].gender = updateUser.gender || users[selectedIndex].gender

    //users ที่ update ใหม่ update กลับไปเก็บใน users เดิม
    res.json({
        message: "Update user successfully",
        data:{
            user: updateUser,
            indexUpdate: selectedIndex
        }
    })
})

//path = DELETE /user/:id ใช้สำหรับลบข้อมูล user ตาม id ที่ระบุ
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    //หา users จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id)
    
    //ลบ
    users.splice(selectedIndex, 1)
    res.json({
        message: "Delete user successfully",
        indexDelete: selectedIndex
    })
})

app.listen(port, async (req, res) => {
    await initMySQL()
    console.log('Http Server is running on port' + port);
});