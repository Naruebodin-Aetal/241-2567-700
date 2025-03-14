const BASE_URL = "http://localhost:8000"


window.onload = async () => {
    await loadData()
}


const loadData = async () => {
    console.log('user page loaded')
    // 1. load user ทั้งหมดจาก api ที่เตรียมไว้
    const response = await axios.get(`${BASE_URL}/users`)

    console.log(response.data)

    const userDOM = document.getElementById('user')
    // 2. นำ user ทั้งหมด โหลดกลับเข้าไปใน html

    let htmlData = `<table class="bgIMG subcontainer">
        <tr class="titleC">
            <th>ID</th>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>`

    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i]
        htmlData += `
            <tr>
                <td>
                    ${user.id}
                </td>
                <td>
                    ${user.firstname} ${user.lastname}
                </td>
                <td>
                    <a href='index.html?id=${user.id}'>
                    <button class='buttonCG'>Edit</button></a>
                </td>
                <td>
                    <button class = 'delete buttonCR ' data-id='${user.id}' >Delete</button>
                </td>
            </tr>
        `
    }
    htmlData += '</table>'
    userDOM.innerHTML = htmlData

    // 3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            // ดึง id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try {
                await axios.delete(`${BASE_URL}/user/${id}`)
                loadData()// recursive function = เรียกใช้ฟังก์ชันตัวเอง
            } catch (error) {
                console.log('error', error)
            }
        })
    }
}