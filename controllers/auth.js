const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

exports.register = (req, res) => {
    console.log(req.body)

    const { name, email, password } = req.body

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if(error) {
            console.log(error)
        } 
        
        if( results.length > 0 ) {
            return res.render('register', {
                message: 'That Email is already in use!'
            })
        }

        let hashedPassword = await bcrypt.hash(password, 8)
        console.log(hashedPassword)

        db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword}, (error, results) => {
            if(error) {
                console.log(error)
            } else {
                return res.render('register', {
                    message: 'User Registered!'
                })
            }
        })

    })



    res.send("Form Submitted!")
}