<script setup>
    import navbar from "../components/container/NavBar.vue"
    import {ref} from 'vue'
    import  Card from "../components/container/Card.vue"

    const showMichis= ref(false)

    const toggleMichis= () =>{
        showMichis.value= !showMichis.value
    }
</script>

<template>
    <navbar ></navbar>
    <h1 class="h1title">Sobre mí:</h1>
    <div class="mainContainer sm:flex-col md:flex-row p-6">
        <div class="mainContainer__textBoxes gap-y-3">
            <div class="">
               <p>Hola, soy Luis Eduardo Pérez Osorio, soy un estudiante de ingeniería en computación en la facultad de ingeniería de la UNAM y 
                estoy participando en el programa de prebecarios de UNICA.
               </p> 
               <p>No me hagan escribir, barqué redacción</p>
            </div>

            <div >
                <ul class="list-inside list-disc">
                    <p class="">Mis gustos:</p>
                    <li >VideoJuegos</li>
                    <li >Musica</li>
                    <li >Monos chinos</li>
                </ul>
            </div>

            <div class="list-inside">
                <p class="">Experiencia profesional:</p>
                <p class="list-item list-inside">lol</p>
            </div>

        </div>
        <div class="mainContainer__image">
            <img class="object-scale-down max-h-96 max-w-96 aspect-square rounded-3xl border"
             src="../../src/assets/images/AmigaPiedra.jpg" alt="">
        </div>
    </div>
    
    <div class="flex-col mx-auto text ">
        <button 
        class="flex mx-auto border py-2 px-[5rem] bg-gray-950 border-gray-800 rounded-2xl text-pink-500
        transition ease-in-out hover:border-pink-500 "
        @click="toggleMichis()">
            Click para ver michis
        </button>
        
        <div v-if="showMichis" class=" mainContainer mt-0 flex-col justify-evenly transition-all ease-in-out scroll-m-6">
            
            <div>
                <h1 class="text-6xl">Los michis:</h1>
            </div>
            <div class="overflow-x-auto max-w-[100%] max-h-[80rem]mx-auto flex m-12">
            
                <div></div>
            <card class="min-w-[25rem] h-[31rem]"
            :url="'../src/assets/images/Elmichi.jpg'"
            :title="'El Michi'"
            >
            </card>

            <card class="min-w-[25rem] h-[31rem]"
            :url="'../src/assets/images/marcelo.jpg'"
            :title="'Marcelo'"
            >
            </card>

            <card class="min-w-[25rem] h-[31rem]"
            :url="'../src/assets/images/jolyne.jpg'"
            :title="'Jolyne'"
            >
            </card>

            <card class="min-w-[25rem] h-[31rem]"
            :url="'../src/assets/images/rei.jpg'"
            :title="'Rei Chiquita'"
            >
            </card>

            <card class="min-w-[25rem] h-[31rem]"
            :url="'../src/assets/images/Motomami.jpg'"
            :title="'La Motomami'"
            >
            </card>
            
            </div>
            
        </div>
    </div>
    

</template>

