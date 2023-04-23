<script setup>
import navbar from "../components/container/NavBar.vue"
import  Card from "../components/container/Card.vue"
</script>

<template>
    <navbar></navbar>
    <h1 class="h1title">Proyectos</h1>
    <div class="mainContainer justify-center">
        <section class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <card
                :url = "'../../../src/assets/images/jill-stingray-va11halla.gif'"
                :title = "'titulo1'"
                :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt voluptate sit incidunt, porro non illum officia numquam consequatur asperiores.'"
                :link = "'https://github.com/lued2897'">
                    
                </card>
            </div>
            <div>
                <card
                :url = "'../../../src/assets/images/jill-stingray-va11halla.gif'"
                :title = "'titulo2'"
                :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt voluptate sit incidunt, porro non illum officia numquam consequatur asperiores.'"
                :link = "'https://github.com/lued2897'">
                
                </card>
            </div>
            <div>
                <card
                :url = "'../../../src/assets/images/jill-stingray-va11halla.gif'"
                :title = "'titulo3'"
                :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt voluptate sit incidunt, porro non illum officia numquam consequatur asperiores.'"
                :link = "'https://github.com/lued2897'">
                    
                </card>
            </div>
        </section>
    </div>
</template>