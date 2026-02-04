// The address of this server connected to the network is
import express from 'express'
import path,{dirname} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express()
const PORT = process.env.PORT || 5000

//Get the file path from the url of the module
const __filename = fileURLToPath(import.meta.url)
// Get the directory name of the file path
const __dirname = dirname(__filename)

//Middleware
app.use(express.json())
// Serves the HTML file from the /public direcotry
// Tell express to serve all files from the /public directory as static assests / files
// Any requests for the css files will be resolved by the public directory

app.use(express.static(path.join(__dirname, '../public')))


// Serving Up HTML files from the .public directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'))
})

//Routes
app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})
