const users = [
  {
    user: "user",
    pass: "pass",
    role: "admin",   /*เข้าในสถานะใด */
    token: "user",   
  },
  {
    user: "userBoss",
    pass: "passboss",
    role: "boss",   /*เข้าในสถานะใด */
    token: "user",   
  },
  {
    user: "user11",
    pass: "pass11",
    role: "other",   /*เข้าในสถานะใด */
    token: "user",   
  },
];

export function verifyUser(user, pass){
    const userFound = users.find( (u) => {         /*ไว้ค้นหา */
        return u.user === user && u.pass === pass;  /*ถ้าเจอมีค่า..กลับมา */
    })

    return userFound? { role: userFound.role, token: userFound.token} : null   /*เช็คว่ามี userFound หรือป่าว ถ้ามีมีข้อมูล ถ้ามีเจอ return เป็น null */
}
