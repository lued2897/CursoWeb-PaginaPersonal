<script setup>
</script>

<template>
    <nav class="navbar items-center rounded-b-3xl bg-palette-600">
        <a href="https://www.ingenieria.unam.mx/unica/"><img class="navbar__logo " src="../../assets/images/logo_unicaA.png" alt="UNICA"></a>

        <div class="navbar__button hover:bg-palette-700">
            <router-link to="/">Sobre mí</router-link>
        </div>

        <div class="navbar__button hover:bg-palette-700">
            <router-link to="/Proyectos">Proyectos</router-link>
        </div>

        <div class="navbar__button hover:bg-palette-700">
            <router-link to="/Contacto">Contacto</router-link> 
        </div>
        
        
        
        <div></div>
        <!--
        <div class="navbar__buttons">
            <Button :icon="'icon_shopping_bag_dark'"></Button>
            <Button :icon="'icon_user'"></Button>
        </div>
        -->
    </nav>
</template>