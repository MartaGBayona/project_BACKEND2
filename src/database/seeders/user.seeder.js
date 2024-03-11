import User from "../../models/User.js"
import { fakerES as faker } from "@faker-js/faker"

const seedUsers = async () => {
    const users = [
        {
            name: "superAdmin",
            email: "superAdmin@superAdmin.com",
            password: "123456",
            role: "super_admin"
        },
        {
            name: "admin",
            email: "admin@superadmin.com",
            password: "123456",
            role: "admin"
        },
        {
            name: "user",
            email: "usern@suser.com",
            password: "123456",
            role: "user"
        }
        
    ]

    for (let i = 0; i < 10; i++) {
        const user = {
            name: faker.person.firstName(),
            email: faker.internet.email(),
            password: "123456",
            role: "user"
        };
        users.push(user)
    }
    await User.create(users)


}

export default seedUsers;