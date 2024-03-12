import Post from "../../models/Post.js"
import User from "../../models/User.js"
import { fakerES as faker } from "@faker-js/faker"



const seedPosts = async () => {
    const posts = [
        {
            _id: "65f0670d581b26d7f7fdfaac",
            user: "65eb742b9e2ac607835397d6",
            title: "Soy el título del primer post",
            description: "Soy la descripción del primer post",
        },
        {
            _id: "65f0670d581b26d7f7fdfaab",
            user: "65eb742b9e2ac607835397d6",
            title: "Soy el título del segundo post",
            description: "Soy la descripción del segundo post",
        },
        {
            _id: "65f0670d581b26d7f7fdfaaa",
            user: "65eb742b9e2ac607835397d6",
            title: "Soy el título del tercer post",
            description: "Soy la descripción del tercer post",
        }
    ];
    const users = await User.find();
    for (let i = 0; i < 10; i++) {
        const randomUserIndex = Math.floor(Math.random() * users.length);
        const post = {
            user: users[randomUserIndex]._id,
            title: faker.lorem.words({ min: 1, max: 15 }),
            description: faker.lorem.words({ min: 1, max: 150 })
        }
        posts.push(post)
    }
    await Post.create(posts)
}

export default seedPosts