<script setup>
</script>

<template>
  <header>
        <!--Referencia a las clases en el archivo css (sin punto)-->
        <h1 class="titulo">Luis Eduardo Perez Osorio <span class="titulo_pequenio">Ing. Computacion</span></h1>
        <!--span: subseccion de un texto-->
    </header>

    <div class="nav__bg">
    <nav class="navegacion__principal">
        <a  href="#">Inicio</a>
        <a  href="#">Sobre mí</a>
        <a  href="#">Clientes</a>
        <a  href="#">Contactos</a>
    </nav>
    </div>
    
    <!--Banner-->
    <section class="banner">
    <div class="contenido__banner">
        <h2>Diseño y desarrollo web freelancer </h2>

        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff5252" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg><br>
        <p> CDMX, México</p>
        <a href="">Contactar</a>

    </div>
    </section>

    <main class="contenedor sombra">
        
        <h2>Mis servicios</h2>
        <div class="servicios">
            <section class="servicio">
                <h3>Diseño web</h3>
                <div class="iconos">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brush" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                        <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
                        <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
                        <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                    </svg>
                </div>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, eum.</p>
                
            </section>
            
            <section class="servicio">
                <h3>Web apps</h3>
                <div class="iconos">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-chrome" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="12" y1="9" x2="20.4" y2="9" />
                        <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(120 12 12)" />
                        <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(240 12 12)" />
                      </svg>

                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-firefox" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4.028 7.82a9 9 0 1 0 12.823 -3.4c-1.636 -1.02 -3.064 -1.02 -4.851 -1.02h-1.647" />
                        <path d="M4.914 9.485c-1.756 -1.569 -.805 -5.38 .109 -6.17c.086 .896 .585 1.208 1.111 1.685c.88 -.275 1.313 -.282 1.867 0c.82 -.91 1.694 -2.354 2.628 -2.093c-1.082 1.741 -.07 3.733 1.371 4.173c-.17 .975 -1.484 1.913 -2.76 2.686c-1.296 .938 -.722 1.85 0 2.234c.949 .506 3.611 -.995 4.545 .354c-1.698 .102 -1.536 3.107 -3.983 2.727c2.523 .957 4.345 .462 5.458 -.34c1.965 -1.52 2.879 -3.542 2.879 -5.557c-.014 -1.398 .194 -2.695 -1.26 -4.75" />
                      </svg>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, tenetur?</p>

                
            
            </section>

            <section class="servicio">
                <h3>E-Commerce</h3>
                <div class="iconos">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-paypal" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a0.5 .5 0 0 1 -.5 -.6l.2 -1.4" />
                      </svg>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, rerum!</p>
                
            </section>

            <!--
            <style>
                p{
                    color: blue; ejemplo de estilo, no es mejor practica
                }
            </style>    
            -->

        </div>
    </main>
    
    <section>
        <!--Contacto-->
       <h2>Contacto</h2>
       <form class="formulario">
        <fieldset>
            <legend>Contactame llenando con tus datos</legend>
        <div class="contenedor_campos">
            <div class="campo">
                <label>Nombre</label><br>
                <input type="text" placeholder="Nombre"><br>
            </div>
            
            <div class="campo">
                <label>Telefono</label><br>
                <input type="tel" placeholder="55 1234 5678"><br>
            </div>
            
            <div class="campo">
                <label>Correo</label><br>
                <input type="email" placeholder="correo@dominio.com"><br>
            </div>
            
            <div class="campo">
                <label>Mensaje</label><br>
                <textarea class="input_text" placeholder="Mensaje"></textarea><br>
                <!--<input type="text" placeholder="Mensaje"><br> -->
            </div>
            
            <div>
                <br><br>
                <input class="boton" value="enviar" type="submit">
            </div>
            
        </div>
        </fieldset>
       </form> 
    </section>
</template>

<style scoped>

</style>
