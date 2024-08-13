import mongoose from 'mongoose'

export function initDatabase() {
  const DATABASE_URL = 'mongodb://localhost:27017/test'

  mongoose.connection.on('open', () => {
    console.info('successfully connected to database:', DATABASE_URL)
  })

  const connection = mongoose.connect(DATABASE_URL)
  return connection
}
