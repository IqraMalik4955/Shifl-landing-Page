<template>
    <v-row class="dashboard fill-height">

        <!-- <template>
            <v-app-bar
            absolute
            scroll-target="#scrolling-techniques-6"
            >
            <v-app-bar-nav-icon>
                <v-img
            src="../assets/images/logo.png"
            ></v-img>
            </v-app-bar-nav-icon>

            <v-spacer></v-spacer>
            <p>hi i am iqra</p>
            </v-app-bar>

        </template> -->
        <v-col>
            <v-row class="pa-5">
                <v-col class="d-flex align-center justify-space-between">
                    <v-img
                        max-height="100"
                        max-width="150"
                        src="../assets/images/logo.png"
                    ></v-img>
                        <div
                        class="d-flex align-center justify-end mb-6"
                        flat
                        tile
                        >
                        <div class="px-4">
                            Call Me
                        </div>
                        <div class="px-4">
                            Our Concept
                        </div>
                        <div class="px-4">
                            Reasons to shifl
                        </div>
                        <div class="px-4">
                            Features
                        </div>
                        <div  class="pr-10 pl-4" style="border-right: 1px solid white">
                            Contact Us
                        </div>
                        <div class="pl-10">
                            Login
                        </div>
                        </div>
                </v-col>
            </v-row>
            <v-row
                style="height: 500px;"
                align="center"
                justify="center"
            >
                <v-col cols="12" lg="6" class="text-center">
                    <h1 class="mb-2" style="font-size:38px; white-space: nowrap; font-weight:500">Freight Forwarding, Reimagined.</h1>
                    <h2 class="mb-2" style="font-weight:500">One software coordinating, <br> your global supply chain</h2>
                    <div class="mt-10">
                        <v-btn
                        color="#F9C91F"
                        elevation="0"
                        rounded
                        to="/home"
                        class="text-capitalize mx-1"
                        >Sign Me Up
                        </v-btn>
                        <v-btn
                            class="text-capitalize ma-2"
                            outlined
                            elevation="0"
                            rounded
                            color="white"
                            >
                            Subscribe Newsletter
                        </v-btn>
                    </div>
                    
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-col>

    </v-row>
</template>

<script>

export default {
    name: "Dashboard",
    components: {
    },
    data: () => ({

    }),
    methods: {

    },
    mounted() {
    }
};
</script>

<style scoped>
.dashboard {
    color:white;
    background-image: url("../assets/images/image-2.png");
    background-size: cover !important;
    height:100%;
}
h1, h2, .v-btn{
    color:white !important;
}
</style>
