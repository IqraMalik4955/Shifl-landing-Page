<template>
<div>
    <v-btn  @click="joinwaitinglist">
        clik me
    </v-btn>
    <v-dialog v-model="dialog" max-width="560px" max-height="550px" content-class="add-supplier-dialog" v-resize="onResize" :retain-focus="false">
        <v-card class="add-supplier-card pa-2">
            <v-form ref="form"  action="#">
                <v-card-title class="v-flex justify-space-between" style="border:none !important">
                    <span class="headline">Join Waiting List</span>

                    <button icon dark class="btn-close" @click="close">
                        <v-icon>mdi-close</v-icon>
                    </button>
                </v-card-title>

                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" class="pb-0">
                            <label class="text-item-label capitalize">Company Name</label>
                            <v-text-field 
                                v-model="data.company_name"
                                placeholder="e.g. Abc corporation ltd" 
                                outlined 
                                class="text-fields"
                                :rules="rules"
                                hide-details="auto">
                            </v-text-field>
                        </v-col> 
                        <v-col cols="12" sm="12" md="12" lg="6" class="pb-0">
                            <label class="text-item-label">Business Type</label>
                            <v-select
                                :items="items"
                                v-model="data.business_type"
                                placeholder="Select Type" 
                                outlined 
                                class="text-fields"
                                :rules="bussinessRules"
                                hide-details="auto">
                            </v-select>
                        </v-col>                      
                        <v-col cols="12" sm="12" md="12" lg="6" class="pb-0">
                            <label class="text-item-label">Approximate Annual Shipments</label>
                            <v-text-field
                                v-model="data.approximate_annual_shipments"
                                type="number"
                                placeholder="Enter no of shipment" 
                                outlined 
                                class="text-fields"
                                :rules="numberRules"
                                hide-details="auto">
                            </v-text-field>
                        </v-col> 
                        <v-col cols="12" sm="12" md="12" lg="6" class="pb-1">
                            <label class="text-item-label">Phone</label>
                            <vue-tel-input-vuetify
                                class="d-flex align-start text-fields  vue-tel-input"
                                type="number"
                                outlined
                                dense
                                single-line
                                hide-details="auto"
                                :valid-characters-only="true"
                                :rules="numberRules"
                                v-bind="telProps"
                                v-model="data.phone_number" />
                        </v-col>

                        <v-col cols="12" sm="12" md="12" lg="6" class="pb-0">
                            <label class="text-item-label">Email Address</label>
                            <v-text-field
                                v-model="data.email"
                                placeholder="example@gmail.com" 
                                outlined 
                                class="text-fields"
                                :rules="arrayNotEmptyRules"
                                hide-details="auto">
                                </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6" class="pb-0">
                            <label class="text-item-label">Contact Person</label>
                            <v-text-field
                                v-model="data.contact_person"
                                placeholder="Type Name" 
                                outlined 
                                class="text-fields"
                                :rules="rules"
                                hide-details="auto">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="pb-0">
                            <v-checkbox
                                v-model="checkbox"
                                :label="Checkbox"
                            ></v-checkbox>
                        </v-col>

                    </v-row>
                </v-card-text>

                <v-card-actions style="border:none !important">
                    <v-btn
                        @click="dsuccess"
                        color="#0171A1"
                        elevation="0"
                        class="white--text text-capitalize mx-1"
                        >Join Waiting List
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogSuccess" max-width="360px" content-class="">
        <template>
            <div class="pa-5 white">
                <div class="d-block white pa-2 text-center">
                    <img style="max-width:44px; max-height:44px;" src="../assets/icons/checkmark.svg" alt="">
                </div>
                <div class="d-block white text-center">
                    <h2 class="modal-h">
                    <!--  Success -->
                    You are on the list
                </h2>
                <p class="modal-p">
                    Thank you for joining the waiting list. A team members will reach out to you as soon as we are ready to take you onboard.
                </p>
                </div>
                <div class="d-block pa-2 white text-center">
                    <v-btn
                        block
                        color="#0171A1"
                        elevation="0"
                        @click="successclose"
                        class="white--text text-capitalize mx-1"
                        >Close
                    </v-btn>
                </div>
            </div>
        </template>
    </v-dialog>
</div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue"
// import globalMethods from '../../utils/globalMethods'
import axios from "axios"

export default {
    name: 'Join Waiting List Dialog',
    props: ['dialog'],
    components: {
        VueTelInputVuetify,
    },
    data: () => ({
        items: ['Shipper','Carrier','Cargo Terminal','Forwarder/Customs', 'Trucker/Broker', 'Warehouse', 'Other'],
        checkbox: false,
        dialogSuccess: false,
        data:{
            company_name:'',
            business_type:'',
            approximate_annual_shipments:'',
            phone_number:'',
            email:'',
            contact_person:'',
        },
        errorMessage:'',
        // valid: true,
        // telInputOptions: {
        //     showDialCodeInSelection: true,
        //     showDialCodeInList: true,
        //     showFlags: true,
        // },
        // options: [],
        // value: [],
        rules: [
            (v) => !!v || "Input is required."
        ],
        telProps: {
            mode: "international",
            defaultCountry: "US",
            placeholder: "Type phone number",
            label: 'Type phone number',
            autocomplete: "off",
            maxLen: 25,
            preferredCountries: ["US", "CN"],
            enabledCountryCode: true,
            dropdownOptions: {
                showDialCodeInSelection: true,
                showFlags: true
            },
            validCharactersOnly: true
        },
        numberRules: [
            (v) => !!v || "Input is required.",
            (v) => /^(?=.*[0-9])[- +()0-9]+$/.test(v) || "Letters are not allowed."
        ],
        arrayNotEmptyRules: [
            (v) => !!v || "Email is required",
            (v) =>  !!v.includes("@") || "Include @",

        ],
        bussinessRules: [
            (v) => !!v || "Business type is required",
        ],
    }),
    methods: {
        joinwaitinglist(){
        alert(this.dialog)
        this.dialog=true;
        },
        close(){
            this.dialog=false;
        },
        dsuccess(){
            this.dialog=false;
            axios.post('https://beta.shifl.com/api/join-waiting-list', this.data)
            .then(res => {
                this.dialogSuccess=true;
                console.log(res)
            }
            )
            .catch(error => {
                this.errorMessage = error.message;
                console.log(error.response.data.email)
            }
            )
        },
        successclose(){
            this.dialogSuccess=false;
        },
    },
}
</script>

<style lang="scss">

.v-autocomplete__content.v-menu__content {
    border-radius: 4px !important;
.vue-tel-input input::placeholder {
    color: #B4CFE0 !important;
}
.vue-tel-input {
    min-height: 45px !important;
    border: 1px solid #B4CFE0 !important;
    font-size: 14px !important;
    background-color: #fff !important;
}

.vue-tel-input .vti__dropdown-arrow {
    margin-left: 8px !important;
}

.vue-tel-input .vti__dropdown.open .vti__dropdown-list.below {
    z-index: 99999 !important;
    padding-left: 0 !important;
}
.vue-tel-input .fieldset{
    margin-right:5px !important;
}

.vue-tel-input .vti__dropdown.open .vti__dropdown-list.below .vti__dropdown-item {
    padding: 4px 8px !important;
}
@import '../assets/scss/pages_scss/globalDialog.scss';
@import '../assets/scss/pages_scss/AddDialog.scss';
}
</style>
