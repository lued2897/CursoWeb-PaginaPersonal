<script setup>
import navbar from "../components/container/NavBar.vue"
</script>

<template>
    <navbar></navbar>
    <h1 class="h1title"> Contacto:</h1>
    <div class="mainContainer min-h-[30rem] flex-col justify-around">
        <div>
            <h1 class="h1title mt-8 text-white text-[3rem] start"> Puedes encontrarme en:</h1>
        </div>

        <div class="mt-8 mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 gap-y-24">
            <a
                class="block w-[33rem] rounded-xl border-[1px] border-gray-800 p-8 hover:bg-gradient-to-t bg-gray-950 transition ease-in-out
         from-gray-800/25 to-gray-950 to-70% hover:border-pink-500 hover:border-[1px] hover:shadow-lg hover:shadow-pink-500/25"
                href="/"
            >
                <h2 class="text-pink-500">GitHub</h2>
                <img src="../assets/images/github-mark-white.svg"  alt="GitHub" class="h-10 mx-auto">
                <p class="text-center">Aqui puedes encontrar mis proyectos de programacion y diseño web</p>
            </a>

            <a
                class="block w-[33rem] rounded-xl border-[1px] border-gray-800 p-8 hover:bg-gradient-to-t bg-gray-950 transition ease-in-out
         from-gray-800/25 to-gray-950 to-70% hover:border-pink-500 hover:border-[1px] hover:shadow-lg hover:shadow-pink-500/25"
                href="/"
            >
                <h2 class="text-pink-500">Correo</h2>
                <img src="../assets/images/icons8-gmail.svg"  alt="GitHub" class="h-10 mx-auto">
                <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quidem rerum facere quae placeat culpa quaerat!</p>
            </a>

            <a
                class="block w-[33rem] rounded-xl border-[1px] border-gray-800 p-8 hover:bg-gradient-to-t bg-gray-950 transition ease-in-out
         from-gray-800/25 to-gray-950 to-70% hover:border-pink-500 hover:border-[1px] hover:shadow-lg hover:shadow-pink-500/25"
                href="/"
            >
                <h2 class="text-pink-500">Facebook</h2>
                <img src="../assets/images/icons8-facebook.svg"  alt="GitHub" class="h-10 mx-auto">
                <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut provident quas quidem amet! Necessitatibus, aliquam!</p>
            </a>

            <a
                class="block w-[33rem] rounded-xl border-[1px] border-gray-800 p-8 hover:bg-gradient-to-t bg-gray-950 transition ease-in-out
         from-gray-800/25 to-gray-950 to-70% hover:border-pink-500 hover:border-[1px] hover:shadow-lg hover:shadow-pink-500/25"
                href="/"
            >
                <h2 class="text-pink-500">Twitter</h2>
                <img src="../assets/images/icons8-twitter.svg"  alt="GitHub" class="h-10 mx-auto">
                <p class="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum laudantium vitae veniam ullam molestiae dicta.</p>
            </a>

        </div>
    </div>
</template>