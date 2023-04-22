const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents, theme }){
    addComponents({
        ".mainContainer":{
            maxWidth: "120rem",
            margin: "2rem auto 6rem auto",
            //minHeight: '100vh',
            display :"flex",
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "space-between",
            height: "auto",
            minHeight: "60rem",
            borderRadius: '2rem',
            backgroundColor: theme("colors.palette.500"),
            ".mainContainer__textBoxes":{
                maxWidth: "60%",
                margin: "8rem 4rem 8rem 4rem",
                display :"flex",
                flexDirection: 'column',
                rowGap: '4rem',
            },
            ".mainContainer__image":{
                margin: "0 auto 0 auto",
            },
        }
    })
})

