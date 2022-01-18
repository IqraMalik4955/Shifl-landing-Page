<template>
<div>
    <div  class="bg-img fill-height">
        <v-row class="px-15 pt-10 mt-0">
            <v-img
                max-height="100"
                max-width="150"
            src="../assets/images/logo.png"
            ></v-img>

        </v-row>
        <v-carousel 
            hide-delimiter-background
            :show-arrows="false"
            hide-delimiters>
            <v-carousel-item
            >
            <v-sheet
            class="t-sheet"
                height="100%"
                tile
            >
                <v-row
                class="fill-height"
                align="center"
                justify="center"
                >
                <v-spacer></v-spacer>
                <v-col>
                    <h1 class="text-center" style="font-size:44px; color:white; white-space: nowrap;">
                    CFintech meets Logtech!
                </h1>
                <p 
                class="text-center white--text" style="font-size:20px; line-height: 30px;">
                    Shifl announces a industry first Logtech-Fintech solution
                    along their digital supply chain platform
                </p>
                <div class="d-flex justify-center">
                <v-btn
                color="#F9C91F"
                elevation="0"
                @click="joinwaitinglist"
                rounded
                class="black--text text-capitalize mx-1"
                >Join Waiting List
                </v-btn>
                <v-btn
                    elevation="0"
                    rounded
                    class="text-capitalize mx-1"
                    text
                    >Learn More
                    <v-icon
                        right
                        dark
                    >
                        mdi-chevron-down
                    </v-icon>
                </v-btn>
                </div>
                </v-col>
                <v-spacer>

                </v-spacer>
                </v-row>
            </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
    <div>
        <v-row>
            <v-spacer></v-spacer>
            <v-col
            class="pa-15"
            lg="6"
            >
            <p class="font-weight-thin">
                Shifl is furthering it's goal of bringing the supply chain industry into today's innovative technology age while helping alleviate issues brought on by recent supply chain disruptions.
            </p>
            <p class="border-left my-7">Supply chain moves around the movement of funds.</p>
            <p>
                With the traditional processes which is still overwhelmingly utilized today, it takes about 2 to 4 days to get funds transferred from one party to another, is highly labor intensive and costly.
            </p>
            <p>
                This contributes to a suite of problems. Such as delayed releases, lost checks, endless hours spent for release follow ups, all that result in increased congestion and demurrage costs to our already strained industry.
            </p>
            <p>
                In addition, lack of information and traditional payment speeds can contribute to earlier then necessary payments resulting in reduced cash flows at a time when vessels are sitting for days waiting to unload.
            </p>

            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row class="mb-15">
            <v-spacer></v-spacer>
            <v-col lg="6">
                <v-card
                    color="#F0FBFF"
                    class="pa-15"
                    elevation="0"
                >

                    <h2 class="text-center mb-5">
                        <span style="color:#4A4A4A">Meet </span>shifl.capital
                    </h2>
                    <p class="text-center">A full suite, supply chain integrated checking account with shiflPay which enables free fast payments for shippers and all industry providers
                        between them and other major contributing parties
                    </p>
                    <div class="d-flex justify-center"
                    >
                        <v-btn
                        justify="center"
                        color="#0171A1"
                        elevation="0"
                        rounded
                        class="white--text text-capitalize mx-1"
                        >Join Waiting List
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row class="grey lighten-5">
            <v-spacer></v-spacer>
            <v-col 
            cols="6"
            class="pa-15"
            >
                <h2 class="mb-4">How it works</h2>
                <p>For International Shipments</p>
                <p>designing...</p>
                <template>
                    <div>
                        <v-card
                        class="d-flex flex-row align-start grey lighten-5"
                        flat
                        tile
                        >
                            <v-card
                                elevation="0"
                                class="pa-2 grey lighten-5"
                            >
                            <v-icon
                            large
                            color="green darken-2"
                            >
                            mdi-domain
                            </v-icon>
                            </v-card>
                            <v-card
                                elevation="0"
                                class="px-2 grey lighten-5"
                            >
                                <h4 style="margin-top:0px !important">Enter MBL number</h4>
                            </v-card>
                        </v-card>
                        <v-card
                        class="d-flex flex-row align-start ma-o"
                        flat
                        tile
                        >
                            <v-card
                                elevation="0"
                                class="pa-2 ml-5"
                                style="border-left: 1.5px dashed #0171A1"
                            >
                            </v-card>
                            <v-card
                                elevation="0"
                                class="pa-2"
                            >
                                <h4 style="margin-top:0px !important"></h4>
                            </v-card>
                        </v-card>
                    </div>
                </template>
                <template>
                    <v-timeline
                    align-top
                    dense
                    >
                    <v-timeline-item
                        fill-dot
                        class="white--text"
                        color="#0171A1"
                    >
                        <template v-slot:icon>
                        <span>1</span>
                        </template>
                        <h4>Enter MBL number</h4>
                    </v-timeline-item>
                    <v-timeline-item
                        fill-dot
                        class="white--text"
                        color="#0171A1"
                    >
                        <template v-slot:icon>
                        <span>2</span>
                        </template>
                        <h4>Issue payment</h4>
                    </v-timeline-item>
                    <v-timeline-item
                        fill-dot
                        class="white--text"
                        color="#0171A1"
                    >
                        <template v-slot:icon>
                        <span>3</span>
                        </template>
                        <h4>Shifl's automatic Cargo tracking is then initiated</h4>
                        <p>
                            At any point you can then issues Same Day payments to all carriers, terminals, and other important providers with the click of a button.
                        </p>
                        <p>
                            Instant transfer and/or instant releases available for participating providers.
                        </p>
                    </v-timeline-item>
                    <v-timeline-item
                        fill-dot
                        class="white--text"
                        color="#0171A1"
                    >
                        <template v-slot:icon>
                        <span>4</span>
                        </template>
                        <h4>Terminal release</h4>
                        <p>
                            The payment receipt is automatically forwarded to the provider,  shifl's powerful tracking will follow up to make sure the terminal release is then posted. 
                        </p>
                    </v-timeline-item>
                    <v-timeline-item
                        fill-dot
                        class="white--text"
                        color="#0171A1"
                    >
                        <template v-slot:icon>
                        <span>5</span>
                        </template>
                        <h4>
                            Monitor release
                        </h4>
                        <p>
                            You can continue to monitor releases, availability and out gate. As well as demurrage alerts on case of any shipments left after last free day.
                        </p>
                    </v-timeline-item>

                    </v-timeline>
                </template>
                <template>
                    <!-- <v-stepper
                        alevation="0"
                        vertical
                    >
                        <v-stepper-step
                        step="1"
                        >
                        Enter MBL number
                        </v-stepper-step>
                        <v-stepper-content></v-stepper-content>
                        <v-stepper-step
                        step="2"
                        color="#F9C91F"
                        >
                        Shifl's automatic Cargo tracking is then initiated
                        </v-stepper-step>
                        <v-stepper-content></v-stepper-content>
                        <v-stepper-step
                        step="3"
                        >
                        Issue Payment
                        <small class="pt-2">At any point you can then issues Same Day payments to all carriers, terminals, <br> and other important providers with the click of a button.</small>
                        <small class="pt-2">Instant transfer and/or instant releases available for participating providers.</small>
                        </v-stepper-step>
                        <v-stepper-content></v-stepper-content>
                        <v-stepper-step step="4">
                        Terminal release
                        <small class="pt-2">
                            The payment receipt is automatically forwarded to the provider, shifi's <br> powerful tracking will follow up to make sure the terminal release is then posted.
                        </small>
                        </v-stepper-step>
                        <v-stepper-content></v-stepper-content>
                        <v-stepper-step step="5">
                        Monitor release
                        <small class="pt-2">
                            You can continue to monitor releases, availability and out gate. As well as <br> demurrage alerts on case of any shipments left after last free day.
                        </small>
                        </v-stepper-step>
                    </v-stepper> -->
                </template>
                <p style="font-size: 14px; line-height: 20px;">
                    * For any other vendors, shiflpay allows free next day payments at no cost.
                </p>
                <p style="font-size: 14px; line-height: 20px;">
                    ** Instant payments available for any participating vendors within the Shifl platform.
                </p>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-col
            class="pa-15"
            lg="6"
            >
            <h2 class="mb-10">Pricing and other features</h2>
            <template>
                <v-simple-table>
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Monthly Fees</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >$0.00</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <h4>Shifl Pay</h4>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Instant payments to any participating party on the Shifl platform</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >Free</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Next day payments to any vendor period</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >Free</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Same day for any major industry vendor</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >$0.00</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <h4>Other Facilties</h4>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Remote check deposits</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >Free</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >ACH transfers from/to other owned accounts</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >Free</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >ATM cash withdrawl and deposit from thousands of ATM machines around three country (Show in Map)</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >Free</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >API blank integrations</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >Free</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <h4>Low cost traditional payment methods</h4>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >International wire</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >$30.00</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Domestic wire</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >$15.00</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Same day ACH</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >$1.00</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Next day ACH</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >$0.25</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Instant transfer from/to owned account by using debit card</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >$5.00</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <h4>Additional services available with added visibility & automation</h4>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Domestic wire</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >Inquire</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Item classifications integrated with customs clearance processing</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >Inquire</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <v-simple-table style="padding-top:2px">
                    <template v-slot:default>
                    <tbody>
                        <tr
                        >
                        <td
                        align="start"
                        class="t-col t-border"
                        width="80%"
                        >Origin booking control with carriers and forwarders</td>
                        <td class="t-col-2 white--text t-border"
                        align="center"
                        >Inquire</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </template>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row class="bg-row lighten-5">
            <v-spacer></v-spacer>
            <v-col 
            cols="6"
            class="pa-15"
            >
                <template>
                    <h2 class="mb-10" style="color: #4A4A4A;">
                        Shifl.Capital is in beta now and will be rolling out gradually, starting with shippers and further expanding to other industry providers.
                    </h2>
                    <v-btn
                    color="#0171A1"
                    elevation="0"
                    rounded
                    class="white--text text-capitalize mx-1 mb-10"
                    >Join Waiting List
                    </v-btn>
                    <p>Shifl will continue rolling out it's suite of useful tools to accelerate innovation for shippers and industry providers.
                    </p>
                    <p>
                        Stay tuned for <strong>some exciting new projects and features</strong> on our Roadmap scheduled for release soon.
                    </p>
                </template>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row class="bg-row lighten-5">
            <v-spacer></v-spacer>
            <v-col 
            cols="6"
            >
                <template>
                    <v-card
                        class="pa-15 mb-15 text-center"
                        elevation="0"
                    >
                        <p style="font-size: 20px; line-height: 30px;">
                            For any ocean, air, land Carriers, cargo terminals, CES, CFS, forwarders, or any other provider looking to participate and accept
                            free instant payments and/or setup instant releases email
                        </p>
                        <a href="#">
                            <h1 class="link">shiflpay@shifl.com</h1>
                        </a>
                    </v-card>
                </template>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </div>
        <v-dialog v-model="dialog" max-width="560px" max-height="550px" content-class="add-supplier-dialog" :retain-focus="false">
        <v-card class="add-supplier-card pa-2">
            <v-form ref="form"  @submit.prevent="dsuccess">
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
                                class="d-flex align-start text-fields"
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
                        <template>
                            <v-container
                                class="px-0"
                                fluid
                            >
                                <v-checkbox
                                v-model="checkbox"
                                label="Sign up for Shifl mailing list & product updates"
                                ></v-checkbox>
                            </v-container>
                        </template>

                        </v-col>

                    </v-row>
                </v-card-text>

                <v-card-actions style="border:none !important">
                    <v-btn
                        type="submit"
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
    <!-- <JoinDialog
    :dialog.sync="dialog"
    /> -->
</div>
</template>
<script>
import axios from "axios"
import VueTelInputVuetify from "../../node_modules/vue-tel-input-vuetify/lib/vue-tel-input-vuetify";
//import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue"
    // import JoinDialog from './Join.vue'
  export default {
     components: {
        // JoinDialog
        VueTelInputVuetify

    },
    data: () => ({
   
    //   model: 0,
      items: ['Shipper','Carrier','Cargo Terminal','Forwarder/Customs', 'Trucker/Broker', 'Warehouse', 'Other'],
      checkbox: false,
      step: 1,
      phone: null,
      e6: 1,
      dialog: false,
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
                showFlags: true,
                showDialCodeInList: true,
                validCharactersOnly: true
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
    }),
      methods:{
      close(){
          this.dialog=false;
      },
      joinwaitinglist(){
        this.dialog=true;
        },
        dsuccess(){
            this.dialog=false;
            axios.post('https://beta.shifl.com/api/join-waiting-list', this.data)
            .then(res => {
                this.dialog=false;
                setTimeout(5000);
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

  }
  }
</script>

<style scoped lang="scss">
.bg-img{   
    background-image: url("../assets/images/hero.png");
    background-size: cover !important;
}
.v-stepper{
    background-color: transparent !important;

}
.t-sheet{
    background-color: transparent !important;
}
.t-col {
    background-color: #F0FBFF;
}
.t-col-2 {
    background-color: #0171A1;
}
.t-border{
    border: 1px white  !important;

}
.bg-row{
    background-color: #F0FBFF !important;
}
p{
    font-size:16px;
    line-height: 24px;
}
h2{
    font-weight: 600;
    line-height: 34px;
    color:#0171A1
}
h4{
    margin-bottom: 10px;
    margin-top:18px;
    color:#0171A1;
    font-weight: 600;
}
.border-left{
    border-left: 6px solid #0171A1;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    padding: 10px 20px;
}
strong{
    color: #EB9B26 !important;
}
.link{
    color: #0171A1 !important;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
}
a{
    text-decoration: none;
}
.v-btn{
    font-size: 14px;
    font-weight: 600 !important;
    line-height: 20px !important;
    padding:14px 24px !important;

}
td{
    font-size: 16px !important;
}
@import '../assets/scss/pages_scss/globalDialog.scss';
@import '../assets/scss/pages_scss/AddDialog.scss';

.v-autocomplete__content.v-menu__content {
    border-radius: 4px !important;
}
.modal-p{
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
}
.modal-h{
    font-size: 20px;
    line-height: 30px;
    color: #4A4A4A;
    margin: 8px 0px;
}
.v-timeline-item h4{
   color: #4A4A4A !important;
   margin-top: 0px !important;
}
.v-timeline-item p{
   font-size: 14px;
    line-height: 20px;
    /* or 143% */


    /* Dark Grey */

    color: #6D858F;
}
.v-timeline{
    padding-top: 0px !important;
    
    border-left: 1.5px dashed #0171A1;
}
</style>
