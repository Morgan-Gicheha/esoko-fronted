new Vue({
    el: '#app',
    data() {
      return {
       
      }
    },
    methods: {
      submitForm() {
        axios.post('http://127.0.0.1:5000/signup', {
          userID: this.userID,
          name: this.name,
          email: this.email,
          firstSon: this.firstSon
        }).then(response => {
          // console.log(response);
          // this.response = response.data
          this.success = 'Data saved successfully';
          this.response = JSON.stringify(response, null, 2)
        }).catch(error => {
          this.response = 'Error: ' + error.response.status
        })
        this.name = '';
        this.email = '';
        this.firstSon = '';
      }
    }
  })