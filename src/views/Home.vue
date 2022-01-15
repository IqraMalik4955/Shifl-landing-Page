<template>
<div>
    <div  class="bg-img">
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
                <template>
                    <v-stepper
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
                        <v-stepper-step step="4">
                        Monitor release
                        <small class="pt-2">
                            You can continue to monitor releases, availability and out gate. As well as <br> demurrage alerts on case of any shipments left after last free day.
                        </small>
                        </v-stepper-step>
                    </v-stepper>
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
    <v-dialog v-model="dialog" max-width="560px" content-class="add-supplier-dialog" v-resize="onResize" :retain-focus="false">
        <v-card class="add-supplier-card">
            <v-form ref="form"  action="#" @submit.prevent="">
                <v-card-title>
                    <span class="headline">Join waiting list</span>

                    <button icon dark class="btn-close" @click="close">
                        <v-icon>mdi-close</v-icon>
                    </button>
                </v-card-title>

                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" class="pb-0">
                            <label class="text-item-label">Company Name</label>
                            <v-text-field 
                                placeholder="e.g. Abc corporation ltd" 
                                outlined 
                                class="text-fields"
                                :rules="rules"
                                hide-details="auto">
                            </v-text-field>
                        </v-col> 
                        <v-col cols="12" sm="12" md="12" lg="6" class="pb-0">
                            <label class="text-item-label">Business Type</label>
                            <v-text-field 
                                placeholder="Select Type" 
                                outlined 
                                class="text-fields"
                                :rules="rules"
                                hide-details="auto">
                            </v-text-field>
                        </v-col>                      
                        <v-col cols="12" sm="12" md="12" lg="6" class="pb-0">
                            <label class="text-item-label">Approximate Annual Shipments</label>
                            <v-text-field 
                                placeholder="Enter no of shipment" 
                                outlined 
                                class="text-fields"
                                :rules="rules"
                                hide-details="auto">
                            </v-text-field>
                        </v-col> 
                        <v-col cols="12" sm="12" md="12" lg="6" class="pb-1">
                            <label class="text-item-label">Phone Number</label>
                            <vue-tel-input-vuetify
                                class="text-fields"
                                type="number"
                                outlined
                                dense
                                single-line
                                hide-details="auto"
                                :valid-characters-only="true"
                                :rules="numberRules"
                                v-bind="telProps"
                            />
                        </v-col>

                        <v-col cols="12" sm="12" md="12" lg="6" class="pb-0">
                            <label class="text-item-label">Email Address</label>
                            <v-text-field
                                 placeholder="example@gmail.com" 
                                outlined 
                                class="text-fields"
                                :rules="rules"
                                hide-details="auto">
                                </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6" class="pb-0">
                            <label class="text-item-label">Contact Person</label>
                            <v-text-field 
                                placeholder="Type Name" 
                                outlined 
                                class="text-fields"
                                :rules="rules"
                                hide-details="auto">
                            </v-text-field>
                        </v-col>

                    </v-row>
                </v-card-text>

                <v-card-actions>

                    <v-btn class="" @click="dsuccess">
                        Join Waiting List
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
            <v-dialog v-model="dialogSuccess" max-width="500px" content-class="item-delete-dialog">
            <v-card class="delete-dialog text-center align-center justify-center">
                <v-card-title class="headline">
                    <div class="delete-icon mt-3 mb-1">
                        <img src="../assets/icons/check-completed.png" alt="">
                    </div>
                </v-card-title>

                <v-card-text style="padding-bottom: 15px;">
                    <h2>
                        <!--  Success -->
                        You are on the list
                    </h2>
                    <p>
                        Thank you for joining the waiting list. A team members will reach out to you as soon as we are ready to take you onboard.
                    </p>

                </v-card-text>
                
                <v-card-actions class="delete-btn-wrapper">
                    <v-btn class="cancel-btn" text @click="successclose">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</div>
</template>
<script>
    import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue"
    import VueTagsInput from '@johmun/vue-tags-input';
  export default {
    data: () => ({
    components: {
        VueTelInputVuetify,
        VueTagsInput
    },
      model: 0,
      e6: 1,
      dialog: false,
      dialogSuccess: false,
      phone: null,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
      methods:{
      joinwaitinglist()
      {
        this.dialog=true;
      },
      close(){
          this.dialog=false;
      },
    dsuccess(){
        this.dialogSuccess=true;
    },
    successclose(){
        this.dialogSuccess=false;
    }
  }
  }
</script>

<style scoped lang="scss">
.bg-img{   
    background-image: url("../assets/images/hero.png");
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
</style>
