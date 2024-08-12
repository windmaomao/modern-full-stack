import { writeFileSync, readFileSync } from 'node:fs'

const users = [{ name: 'Fang Jin', email: 'windmaomao@gmail.com' }]

const usersJson = JSON.stringify(users)

writeFileSync('backend/users.json', usersJson)

const readUsersJson = readFileSync('backend/users.json')
const readUsers = JSON.parse(readUsersJson)

console.log(readUsers)
