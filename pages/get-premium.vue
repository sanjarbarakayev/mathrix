<template>
  <div class="premium pt-8">
    <div class="container mx-auto">
      <div class="breadcumb  page-breadcumb mb-8">
        <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"
            >Account settings</el-breadcrumb-item
          >
          <el-breadcrumb-item>Get premium</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <h2 class="premium__title page-title">
        Get Premium
      </h2>

      <div class="premium__info flex justify-between p-8 mt-8">
        <div class="premium__info-items">
          <div
            class="premium__info-item flex items-center mb-4"
            v-for="(item, i) of infoItems"
            :key="i"
          >
            <img
              :src="item.img"
              alt="mahtrix-premium"
              class="premium__info-img mr-5"
            />
            <p class="premium__info-title">{{ item.title }}</p>
          </div>
        </div>
        <div class="premium__info-video relative text-center">
          <img
            src="@/assets/img/videos/video-placeholder-1.jpg"
            alt="mathrix-premium-video"
          />
          <img src="@/assets/img/icons/video-icon.svg" alt="video-play-icon" />
          <p class="mt-4">We have official professors</p>
        </div>
      </div>

      <div class="flex mx-auto price">
        <div
          class="price__card text-center relative m-5 pb-6"
          v-for="(item, i) of prices"
          :key="i"
        >
          <div class="price__sale" v-if="item.forSale">{{ item.sale }}%</div>
          <h3 class="price__title pt-6">{{ item.title }} plan</h3>
          <div class="price__content">
            <p v-if="item.recommends" class="price__recommend my-4 mx-auto">
              MATHRIX recommends
            </p>
            <p class="price__num my-4">
              <span>{{ item.price }} &euro;</span> / month
            </p>
            <p class="price__descr my-4 mx-auto">{{ item.descr }}</p>
            <button class="m-btn-primary relative" @click="paymentModal = true">
              Get premium
            </button>
          </div>

          <div class="payment-modal">
            <el-dialog :visible.sync="paymentModal" class="register__modal">
              <h2 class="register__modal-title section-title mt-4">
                {{ item.title }}
              </h2>
              <p class="my-6">
                <span class="payment-modal__price">{{ item.price }}</span> /
                month
              </p>
              <p class="payment-modal__subtitle text-left my-4">
                Payment information
              </p>
              <el-form
                label-position="top"
                label-width="120px"
                class="demo-ruleForm"
              >
                <el-form-item
                  prop="nameHolder"
                  label="Name of the card holder"
                  :rules="rules"
                >
                  <el-input
                    v-model="rulePayment.nameHolder"
                    placeholder="Enter card name"
                  ></el-input>
                </el-form-item>
                <div class="flex justify-between">
                  <el-form-item
                    prop="cardNUmber"
                    label="Credit card number"
                    :rules="rules"
                  >
                    <el-input
                      v-model="rulePayment.cardNUmber"
                      placeholder="1111 2222 3333 4444"
                    ></el-input>
                  </el-form-item>
                  <el-form-item
                    prop="expiry"
                    label="Expiry"
                    :rules="rules"
                    class="mx-6"
                  >
                    <el-input
                      v-model="rulePayment.expiry"
                      placeholder="01 / 21"
                    ></el-input>
                  </el-form-item>
                  <el-form-item
                    prop="cryptogram"
                    label="Cryptogram"
                    :rules="rules"
                  >
                    <el-input
                      v-model="rulePayment.cryptogram"
                      placeholder="123"
                    ></el-input>
                  </el-form-item>
                </div>
                <el-form-item class="text-left">
                  <el-checkbox v-model="acceptTems"
                    >I accept terms and conditions</el-checkbox
                  >
                </el-form-item>

                <button
                  class="m-btn-primary"
                  @click.prevent="submitPayment('rulePayment')"
                >
                  Pay {{ item.price }}
                </button>
              </el-form>
            </el-dialog>
          </div>
        </div>
      </div>
    </div>

    <div class="recovery-complted">
      <el-dialog :visible.sync="paymentSuccess" class="register__modal">
        <div class="register__modal-logo">
          <img src="@/assets/img/logo/success-logo.svg" alt="mathrix-logo" />
        </div>
        <h2 class="register__modal-title modal-title">
          Congratulations!
        </h2>
        <p
          class="recovery__action-text modal-action-text"
          @click="goToDashboard"
        >
          Go to dasboard
        </p>
      </el-dialog>
    </div>

    <methods-media />

    <div class="container mx-auto">
      <witness-carousel />

      <div class="questions">
        <h3 class="questions__title section-title mb-8">
          Frequently asked questions
        </h3>
        <div class="questions__accordion">
          <el-collapse v-model="activeQuestion" accordion>
            <el-collapse-item
              :title="question.title"
              :name="question.id"
              v-for="(question, q) of questions"
              :key="q"
            >
              <div>
                {{ question.body }}
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>

    <div class="contact">
      <h3 class="contact__title section-title"></h3>
      <p class="contact__subtitle section-subtitle"></p>
      <p class="contact__phone"></p>
      <div class="contact__price-info"></div>
    </div>
  </div>
</template>

<script>
import MethodsMedia from "@/components/MethodsMedia.vue";
import WitnessCarousel from "@/components/WitnessCarousel.vue";
export default {
  components: { MethodsMedia, WitnessCarousel },
  data: () => ({
    infoItems: [
      {
        img: require("@/assets/img/icons/info-icon-1.svg"),
        title: "Unlimited access to courses, video exercises and flashcards"
      },
      {
        img: require("@/assets/img/icons/info-icon-2.svg"),
        title: "Correction of video interros and advanced exercises"
      },
      {
        img: require("@/assets/img/icons/info-icon-3.svg"),
        title: "Fill your gaps with access in previous years"
      }
    ],
    prices: [
      {
        forSale: true,
        sale: 28,
        title: "School year",
        recommends: true,
        price: "12,90",
        descr:
          "Formula invoiced in a single payment of 45.45€ for the period from 04/14/2020 to 07/31/2020",
        id: 1
      },
      {
        forSale: false,
        sale: "",
        title: "Monthly",
        recommends: false,
        price: "17,90",
        descr: "Formule renouvelée tous les mois annulable à tout moment",
        id: 2
      }
    ],
    questions: [
      {
        id: 1,
        title: "What does the subscription include?",
        body:
          "You can pay online with confidence, all transactions made on the Mathrix.fr site are 100% secure and ensured by our payment partner Stripe. We pay particular attention to the security of your data: your credit card information is encrypted using the SSL (Secure Socket Layer) protocol and no bank data is stored on our network."
      },
      {
        id: 2,
        title: "Do the courses conform to the official programs?",
        body:
          "You can pay online with confidence, all transactions made on the Mathrix.fr site are 100% secure and ensured by our payment partner Stripe. We pay particular attention to the security of your data: your credit card information is encrypted using the SSL (Secure Socket Layer) protocol and no bank data is stored on our network."
      },
      {
        id: 3,
        title: "What means of payment are accepted on Mathrix.fr?",
        body:
          "You can pay online with confidence, all transactions made on the Mathrix.fr site are 100% secure and ensured by our payment partner Stripe. We pay particular attention to the security of your data: your credit card information is encrypted using the SSL (Secure Socket Layer) protocol and no bank data is stored on our network."
      },
      {
        id: 4,
        title: "Is the payment secured ?",
        body:
          "You can pay online with confidence, all transactions made on the Mathrix.fr site are 100% secure and ensured by our payment partner Stripe. We pay particular attention to the security of your data: your credit card information is encrypted using the SSL (Secure Socket Layer) protocol and no bank data is stored on our network."
      },
      {
        id: 5,
        title: "How do I stop my subscription?",
        body:
          "You can pay online with confidence, all transactions made on the Mathrix.fr site are 100% secure and ensured by our payment partner Stripe. We pay particular attention to the security of your data: your credit card information is encrypted using the SSL (Secure Socket Layer) protocol and no bank data is stored on our network."
      }
    ],
    activeQuestion: 4,
    paymentModal: false,
    acceptTerms: false,
    rulePayment: {
      nameHolder: "",
      cardNUmber: "",
      expiry: "",
      cryptogram: ""
    },
    paymentSuccess: false
  }),
  methods: {
    submitPayment() {
      this.paymentModal = false;
      this.paymentSuccess = true;
    },
    goToDashboard() {
      this.$router.push("/");
    }
  }
};
</script>
