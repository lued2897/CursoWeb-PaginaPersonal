<script setup>
    defineProps({
        url: String,
        title: String,
        description: String,
        link: String,
        buttonText: String,
    })
</script>

<template>
    <div class="card mx-12 justify-center border-[1px] rounded-[2rem] overflow-clip my-14 border-gray-800 bg-slate-950
    transition ease-in-out hover:border-pink-500 hover:border-[1px] hover:shadow-2xl hover:shadow-pink-500/10">
        <img class="card__img aspect-square" :src="url" alt="">
        <div class="card__container shadow-md">
            <section class="card__container--headline">
                <h3 class="headline--title">{{ title }}</h3>
            </section>
            <p class="card__container--description">{{ description }}</p>
            <section class="card__container--footer">
                <a v-if="buttonText" :href="link"
                class="footer--git bg-pink-500 hover:bg-pink-400 p-3 text-center"
                >{{ buttonText }}</a>
            </section>
        </div>
    </div>
</template>