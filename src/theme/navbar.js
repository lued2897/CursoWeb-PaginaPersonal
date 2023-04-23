const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents, theme }){
    addComponents({
        ".navbar": {
            height: 'auto',
            /*margin-top se usa como marginTop*/
            //marginTop: '24px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            color: theme("colors.pink.500"),
            marginBottom: "6rem",
            borderWidth: "1px",
            //borderColor: theme("colors.gray.900"),
            ".navbar__logo":{
                width: 'auto',
                height:'4.5rem',
                marginLeft: '3rem',
            },
            ".navbar__button": {
                marginTop: '1rem',
                marginBottom: '1rem',
                //display: 'flex',
                //justifyContent: 'space-between',
                //gap:'35px',
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '16rem',
                height:'4.5rem',
                alignItems: "center",
                verticalalign: "middle",
                borderRadius: "1rem",
            }
        }
    })
})

