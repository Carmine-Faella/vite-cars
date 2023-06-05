<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        name: 'SingleCar',
        data() {
            return {
                store,
                cars:null
            }
        },
        mounted() {
            const id = this.$route.params.id;
            
            axios.get(`${this.store.url}/api/cars/${id}`)
            .then(response => {
                if(response.data.success == true){
                    this.cars = response.data.results;
                }else{
                    this.$router.push({name:'NotFound'});
                }
                console.log(response)
            });

        }
    }
</script>

<template>

    <div v-if="cars" class="text-center">
        <h5 class="">{{cars.model}}</h5>
        <div class="badge text-bg-primary">{{cars.optionals?.name}}</div>
        <p>{{cars.brand}}</p>
        <p>{{cars.price}}</p>
        <p>{{cars.cc}}</p>
        <p>{{cars.year_release}}</p>
    </div>

</template>