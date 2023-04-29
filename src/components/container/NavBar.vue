<script setup>
</script>

<template>
    <nav class="navbar items-center rounded-b-3xl bg-gray-950 border-gray-700  border-t-0 mx-4 sm:flex-col md:flex-row">
        <a href="https://www.ingenieria.unam.mx/unica/"><img class="navbar__logo " src="../../assets/images/logo_unicaBlanco.png" alt="UNICA"></a>

        <router-link to="/">
            <div class="navbar__button hover:bg-gradient-to-t bg-gray-950 transition ease-in-out
            from-gray-800/40 to-gray-950 to-70% hover:border-pink-500 hover:border-[1px] hover:shadow-lg hover:shadow-pink-500/10">
                Sobre mí
            </div>
        </router-link>

        <router-link to="/Proyectos">
            <div class="navbar__button hover:bg-gradient-to-t bg-gray-950 transition ease-in-out
            from-gray-800/40 to-gray-950 to-70% hover:border-pink-500 hover:border-[1px] hover:shadow-lg hover:shadow-pink-500/10">
                Proyectos
            </div>
        </router-link>  


        <router-link to="/Contacto">
            <div class="navbar__button hover:bg-gradient-to-t bg-gray-950 transition ease-in-out
            from-gray-800/40 to-gray-950 to-70% hover:border-pink-500 hover:border-[1px] hover:shadow-lg hover:shadow-pink-500/10">
                Contacto
            </div>
        </router-link> 
        
        
        
        <div></div>
        <!--
        <div class="navbar__buttons">
            <Button :icon="'icon_shopping_bag_dark'"></Button>
            <Button :icon="'icon_user'"></Button>
        </div>
        -->
    </nav>
</template>