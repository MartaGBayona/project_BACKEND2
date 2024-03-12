import User from "../../models/User.js"
import bcrypt from "bcrypt";
import { fakerES as faker } from "@faker-js/faker"

const seedUsers = async () => {
    const users = [
        {
            _id: "65eb741d9e2ac607835397d0",
            name: "superAdmin",
            email: "superAdmin@superAdmin.com",
            password: await bcrypt.hash("123456", 5),
            role: "super_admin"
        },
        {
            _id: "65eb74259e2ac607835397d3",
            name: "admin",
            email: "admin@admin.com",
            password: await bcrypt.hash("123456", 5),
            role: "admin"
        },
        {
            _id: "65eb742b9e2ac607835397d6",
            name: "user",
            email: "user@user.com",
            password: await bcrypt.hash("123456", 5),
            role: "user"
        }
        
    ]

    for (let i = 0; i < 10; i++) {
        const hashedPassword = await bcrypt.hash("123456", 5);
        const user = {
            name: faker.person.firstName(),
            email: faker.internet.email(),
            password: hashedPassword,
            role: "user"
        };
        users.push(user)
    }
    await User.create(users)


}

export default seedUsers;