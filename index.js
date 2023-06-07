const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

const PUERTO = 3000

const conexion = mysql.createConnection(
    {
        host:'localhost',
        database:'horariostec.sql',
        user:'root',
        password:''
    }
)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

conexion.connect(error => {
    if(error) throw error
    console.log('Conexión exitosa a la base de datos');
})

app.get('/', (req, res) => {
    res.send('API')
})
/*
app.get('/profesores', (req, res) => {
    const query = `SELECT * FROM profesores;`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
            
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.get('/profesores/:numero_emp', (req, res) => {
    const { numero_emp } = req.params

    const query = `SELECT * FROM profesores WHERE numero_emp=${numero_emp};`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.post('/profesores/agregar', (req, res) => {
    const profesor = {
        nombre: req.body.numero_emp,
        email: req.body.nombre,
        email: req.body.ap_paterno,
        email: req.body.ap_materno
    }

    const query = `INSERT INTO profesores SET ?`
    conexion.query(query, profesor, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se insertó correctamente el profesor`)
    })
})

app.put('/profesores/actualizar/:numero_emp', (req, res) => {
    const { numero_emp } = req.params
    const { nombre, ap_paterno, ap_materno } = req.body

    const query = `UPDATE profesores SET nombre='${nombre}', ap_paterno='${ap_paterno}', ap_materno='${ap_materno}' WHERE numero_emp='${numero_emp}';`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se actualizó correctamente el profesor`)
    })
})

app.delete('/profesores/borrar/:numero_emp', (req, res) => {
    const { numero_emp } = req.params

    const query = `DELETE FROM profesores WHERE numero_emp=${numero_emp};`
    conexion.query(query, (error) => {
        if(error) console.error(error.message)

        res.json(`Se eliminó correctamente el profesor`)
    })
})
*/

app.get('/materias', (req, res) => {
    const query = `SELECT * FROM materias;`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
            
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.get('/materias/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM materias WHERE id_materia=${id};`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.post('/materias/agregar', (req, res) => {
    const materia = {
        cve_materia: req.body.cve_materia,
        descripcion: req.body.descripcion,
        ht: req.body.ht,
        hp: req.body.hp,
        credito: req.body.credito,
        reticula: req.body.reticula
    }

    const query = `INSERT INTO materias SET ?`
    conexion.query(query, materia, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se insertó correctamente el materia`)
    })
})

app.put('/materias/actualizar/:id', (req, res) => {
    const { id } = req.params
    const { cve_materia, descripcion, ht, hp, credito, reticula  } = req.body

    const query = `UPDATE materias SET cve_materia='${cve_materia}', descripcion='${descripcion}', ht='${ht}' , hp='${hp}' , credito='${credito}', reticula='${reticula}' WHERE id_materia='${id}';`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se actualizó correctamente la materia`)
    })
})

app.delete('/materias/borrar/:id', (req, res) => {
    const { id } = req.params

    const query = `DELETE FROM materias WHERE id_materia=${id};`
    conexion.query(query, (error) => {
        if(error) console.error(error.message)

        res.json(`Se eliminó correctamente la materia`)
    })
})