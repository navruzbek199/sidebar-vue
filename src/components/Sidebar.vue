<template>
    <aside :class="`${is_open && 'is-open'}`" class=" flex flex-col overflow-hidden p-4 transition delay-100 ease-out">
        <img src="../assets/logo.svg" alt="vue" class=" mb-4 w-8">
        <div class="menu-toggle-wrap flex justify-end mb-4 relative top-0 transition delay-100 ease-out">
            <button class=" transition delay-100 ease-out" @click="toggleMenu">
                <span class="material-icons text-[32px]">keyboard_double_arrow_right</span>
            </button>
        </div>
        <h3 class=" text-sm mb-2 uppercase">Menu</h3>
        <div class="menu">
            <RouterLink to="/" class="button flex items-center no-underline py-2 px-4">
                <span class="material-icons text-[2rem]">home</span>
                <span class="text">Home</span>
            </RouterLink>
            <RouterLink to="/about" class="button flex items-center no-underline py-2 px-4">
                <span class="material-icons text-[2rem]">visibility</span>
                <span class="text">About</span>
            </RouterLink>
            <RouterLink to="/contact" class="button flex items-center no-underline py-2 px-4">
                <span class="material-icons text-[2rem]">email</span>
                <span class="text">Contact</span>
            </RouterLink>
            <RouterLink to="/settings" class="button flex items-center no-underline py-2 px-4">
                <span class="material-icons text-[2rem]">settings</span>
                <span class="text">Settings</span>
            </RouterLink>
        </div>

        <div class="flexs"></div>

        <div class="menu">
            <RouterLink to="/settings" class="button flex items-center no-underline py-2 px-4">
                <span class="material-icons text-[2rem]">logout</span>
                <span class="text">Log Out</span>
            </RouterLink>
        </div>

    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const is_open = ref<any>(localStorage.getItem('is_open') === "true")
const toggleMenu = () => {
    is_open.value = !is_open.value
    localStorage.setItem('is_open', is_open.value)
}
</script>

<style scoped>
aside {
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    min-height: 100vh;

    .flexs{
        flex: 1 1 0;
    }

    .menu-toggle-wrap {
        transition: .2s ease-out;

        .material-icons {
            color: var(--light);
            transition: .2s ease-out;
        }

        &:hover {
            .material-icons {
                color: var(--primary);
                transform: translateX(0.5rem);
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: .3s ease-out;
    }
    h3{
        color: var(--grey);
    }

    .menu {
        margin: 0 -1rem;

        .button {
            transition: .2s ease-out;

            .material-icons {
                color: var(--light);
                transition: .2s ease-out;
            }
            &:hover, &.router-link-exact-active{
                background-color: var(--dark-alt);

                .material-icons, .text{
                    color: var(--primary);
                }
            }
            &.router-link-exact-active{
                border-right: 5px solid var(--primary);
            }
        }

    }

    &.is-open {
        width: var(--sidebar-width);


        .menu-toggle-wrap {
            top: -3rem;

            button {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button{
            .material-icons{
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>