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




// Define a pasta onde os arquivos estáticos (CSS, imagens, JS, etc...) serão servidos
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})



app.listen(8024, (err) => {
    if (err) console.log(err);
    console.log("Server Open!", );
});