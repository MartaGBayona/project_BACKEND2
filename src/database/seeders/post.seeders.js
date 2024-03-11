import Post from "../../models/Post.js"
import User from "../../models/User.js"
import { fakerES as faker } from "@faker-js/faker"



const seedPosts = async () => {
    const posts = [];
    const users = await User.find();
    for (let i = 0; i < 10; i++) {
        const randomUserIndex = Math.floor(Math.random() * users.length);
        const post = {
            user: users[randomUserIndex]._id,
            title: faker.lorem.words({ min: 1, max: 15 }),
            description: faker.lorem.paragraph(1)
        }
        posts.push(post)
    }
    await Post.create(posts)
}

export default seedPosts