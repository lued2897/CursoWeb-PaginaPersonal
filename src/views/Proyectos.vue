<script setup>
import navbar from "../components/container/NavBar.vue"
import  Card from "../components/container/Card.vue"
</script>

<template>
    <navbar></navbar>
    <h1 class="h1title">Proyectos</h1>
    <div class="mainContainer justify-center">
        <section class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div>
                <card class="h-auto"
                :url = "'../../../src/assets/images/tictactoe.png'"
                :title = "'Juego de Gato (tic-tac-toe)'"
                :description="'Juego de gato (tic-tac-toe) para el curso de desarrollo web'"
                :link = "'https://github.com/KamCarrillo/ProyectoSemanal_TicTacToe/'"
                :buttonText= "'GitHub'">
                    
                </card>
            </div>
            <div>
                <card class=""
                :url = "'../../../src/assets/images/proyectopy.png'"
                :title = "'Maquina expendedora (Python)'"
                :description="'Proyecto para el curso de fundamentos de python'"
                :link = "'https://github.com/Francisco-Galindo/ideal-potatodb'"
                :buttonText= "'GitHub'">
                
                </card>
            </div>
            <div>
                <card
                :url = "'../../../src/assets/images/proyectobd.png'"
                :title = "'Base de datos Dystromachines'"
                :description="'Proyecto para el curso de bases de datos'"
                :link = "'https://github.com/Francisco-Galindo/UNICA-Proyecto-DB'"
                :buttonText= "'GitHub'">
                    
                </card>
            </div>
            <div>
                <card 
                :url = "'../../../src/assets/images/makinita.jpg'"
                :title = "'Maquina expendedora (HTML)'"
                :description="'Proyecto para el curso de diseño web'"
                :link = "'https://github.com/lued2897/Proyecto-disenoWeb'"
                :buttonText= "'GitHub'">
                    
                </card>
            </div>
            <div>

            </div>
            <div>

            </div>
        </section>
    </div>
</template>