const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents, theme }){
    addComponents({
        ".navbar": {
            height: '5rem',
            /*margin-top se usa como marginTop*/
            //marginTop: '24px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            color: 'white',
            marginBottom: "2rem",
            ".navbar__logo":{
                width: 'auto',
                height:'5rem'
            },
            ".navbar__button": {
                //display: 'flex',
                //justifyContent: 'space-between',
                //gap:'35px',
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '16rem',
                height:'5rem',
                alignItems: "center",
                verticalalign: "middle",
            }
        }
    })
})

