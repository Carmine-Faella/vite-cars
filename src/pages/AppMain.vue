<script>

import {store} from '../store.js';
import axios from 'axios';
import CarCard from '../components/CarCard.vue';

export default {
    name: 'AppMain',
    components:{
        CarCard
    },
    data(){
        return{
            currentPage:1,
            lastPage:null,
            store,
            cars:[]
        }
    },
    methods: {
        getCars(gotoPage) {

            axios.get(`${this.store.url}/api/cars`,
                {
                    params: {
                        page: gotoPage
                    }
                }
            )
            .then(response => {
                this.cars = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            });
        }
    },
    mounted() {
        this.getCars(1);
    }
}

</script>

<template>
   <div class="container">
    <div class="row">

        <div class="col-4" v-for="car,index in cars" :key="index">
            <CarCard :car="car"></CarCard>
        </div>

        <nav aria-label="Page navigation example">
            <ul class="pagination mt-5 d-flex justify-content-center">
                <li class="page-item"><button class="page-link" @click="getCars(currentPage - 1)" :class="{'disabled' : currentPage == 1}">Previous</button></li>
                <li class="page-item"><button class="page-link" @click="getCars(currentPage + 1)" :class="{'disabled' : currentPage == lastPage}">Next</button></li>
            </ul>
        </nav>
    </div>
</div>
</template>