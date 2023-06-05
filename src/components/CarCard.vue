<script>

import { store } from '../store.js';

export default {
    name: 'CarCard',
    data(){
        return{
            store
        }
    },
    props:['car'],
}

</script>

<template>
   <div class="card bg-black text-white text-center">
        <div class="card-body card-wrapper">
            <h5 class="card-title py-3">{{car.model}}</h5>
            <p class="card-text">{{car.price}}</p>
            <p class="card-text">{{car.cc}}</p>
            <p class="badge text-bg-primary">{{car.optionals?.name}}</p>
            <router-link :to="{name: 'single-cars', params: {id:car.id}}" class="btn btn-primary">
                Vedi card completa
            </router-link>

        </div>
    </div>
</template>