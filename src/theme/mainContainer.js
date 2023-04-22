const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents, theme }){
    addComponents({
        ".mainContainer":{
            maxWidth: "120rem",
            margin: "0 auto 0 auto",
            //minHeight: '100vh',
            display :"flex",
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "60rem",
            borderRadius: '2rem'
        }
    })
})

