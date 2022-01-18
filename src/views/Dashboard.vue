<template>
    <div>
        <v-system-bar
        class="pb-3"
        height="70"
        color="#F0FBFF"
        >
            <v-col
                class="d-flex justify-space-between align-center"
            >
                <div>
                    <v-list-item two-line>
                        <v-list-item-avatar style="border:1px solid #0171A1" class="">
                        <v-img max-height="28"
                            max-width="28"
                            class="pa-0 ma-0"
                            src="../assets/icons/bullhorn.svg"
                        ></v-img>
                    </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="top-head">Fintech meets Logtech!</v-list-item-title>
                            <v-list-item-subtitle class="top-head-secondary">Shifl announces a industry first Logtech-Fintech solution along their digital supply chain platform.</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </div>
                <div>
                    <v-btn
                        color="#0171A1"
                        elevation="0"
                        rounded
                        class="text-capitalize mx-1"
                        >Learn More
                    </v-btn>
                </div>
            </v-col>
        </v-system-bar>
        
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
    </div>
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
.top-head{
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #0171A1;
}
.top-head-secondary{
    font-size: 12px;
    line-height: 18px;
    color:#4A4A4A !important;

}
</style>
