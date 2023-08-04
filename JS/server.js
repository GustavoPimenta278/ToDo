const express = require('express')
const path = require('path')
const app = express()

const sequelizeModule = require('sequelize')
const sequelize = new sequelizeModule('DB_Tarefas', 'root', 'E$mer@ld@06', {
    host: 'localhost',
    dialect: 'mysql'
});


try {
    sequelize.authenticate().then(
        () => {console.log("Database connected sucessfuly!")}
    
    ).catch(
        (err) => {
            console.log(`Database can not be connected.\n Error: ${err}`)
        }
    )


} catch (error) {
    console.log(error)
}




const principalDir = path.resolve(__dirname, '..')
const styleDir = `${principalDir}/style/index.css`


console.log(styleDir)

// Define a pasta onde os arquivos estáticos (CSS, imagens, etc.) serão servidos
app.use(express.static(path.join(styleDir, '/style/index.css')))

app.get('/', (req, res) => {
    res.sendFile(`${principalDir}/index.html`)
    
})


app.listen(8024, () => {console.log("Server is Running!")})