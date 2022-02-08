var app = new Vue({
  el: "#app",
  data: {
    mss: "hello world",
    loading: true,
    errored: "",
    phoneNumber: "",
    amount:'',
    response: "",
    success: "",
    activeClass: "active",
  },
  methods: {
    // submitForm() {
    //   axios
    //     .post("http://127.0.0.1:5000/signup", {
    //       userID: this.userID,
    //       name: this.name,
    //       email: this.email,
    //       firstSon: this.firstSon,
    //     })
    //     .then((response) => {
    //       // console.log(response);
    //       // this.response = response.data
    //       this.success = "Data saved successfully";
    //       this.response = JSON.stringify(response, null, 2);
    //     })
    //     .catch((error) => {
    //       this.response = "Error: " + error.response;
    //     });
    //   this.name = "";
    //   this.email = "";
    //   this.firstSon = "";
    // },

    lipaNaMpesa() {
      axios
        .post("http://127.0.0.1:5000/stkpush", {
          phoneNumber: this.phoneNumber,
          amount: this.amount,
        })
        console.log('cthi is my data:', phoneNumber, amount)
        // .then((res) => {console.log('THIS IS MY MPESA RESPONSE',res)})
        // .catch((err)=>{  console.log("THIS IS MY MPESA ERROR RESPONSE",err);})
    },
  },

  mounted() {
    axios
      .get("http://127.0.0.1:5000/json/forex")
      .then((response) => {
        this.mss = response.data[0]["Weekly Time Series"];
        console.log(response.data[0]["Weekly Time Series"]["2021-12-10"]);
      })
      .catch((error) => {
        console.log(error);
        this.errored = error;
      })
      .finally(() => (this.loading = false));
  },

 
});
