const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;
app.use(bodyParser.json());

let users = []
let counter = 1

/*
Get /users สำหรับ get ข้อมูลทั้งหมดที่บันทึกไว้
POST /users สำหรับสร้าง users ใหม่เข้าไป
Get /users/:id สำหรับดึง users รายคนออกมา
PUT /users/:id สำหรับแก้ไขusers รายคน
DELETE /user/:id ใช้สำหรับลบข้อมูล user ตาม id ที่ระบุ
*/

//path = GET /users ใช้สำหรับแสดงข้อมูล user ทั้งหมด
app.get('/users', (req, res) => {
  res.json(users);
})

//path = POST /user ใช้สำหรับสร้างข้อมูล user ใหม่
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({
        message: "Create new user successfully",
        user: user
    });
})

//path =  PUT /user/:id ใช้สำหรับแแก้ข้อมูล user ตาม id ที่ระบุ
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;

    //หา users จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id)
 
    //แก้ไขข้อมูล users ที่หาเจอ
    if(updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname
    }

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

app.listen(port, (req, res) => {
    console.log('Http Server is running on port' + port);
});