<template>
    <b-container>
        <b-row align-v="center" style="height: 35rem !important">
            <b-col md="12" align-self="center">
                <b-row align-h="center">
                    <b-col md="5">
                        <b-card>
                            <div class="w-75 mx-auto my-4">
                                <b-form-group>
                                    <b-input type="text" placeholder="Login"/>
                                </b-form-group>
                                <b-form-group>
                                    <b-input type="text" placeholder="Senha"/>
                                </b-form-group>
                                <b-button block variant="outline-success">Login</b-button>
                                <b-link @click="auth('google')">
                                  <b-img-lazy src="@/statics/btn-login-google.png" style="width: 35px; height: 35px"/>
                                </b-link>
                                <b-link @click="auth('facebook')">
                                  <b-img-lazy src="@/statics/btn-login-facebook.png" style="width: 35px; height: 35px"/>
                                </b-link>
                                <b-link @click="auth('twitter')">
                                  <b-img-lazy src="@/statics/btn-login-twitter.png" style="width: 35px; height: 35px"/>
                                </b-link>
                                <br/>
                                <b-link mt-1>Esqueceu a conta?</b-link>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import HelloJs from 'hellojs'
export default {
  data () {
    return {
      $HelloJs: ''
    }
  },
  mounted () {
    this.$HelloJs = HelloJs.init({
      google: '252314890353-tmjn9he8q5p8dijsok34jfhs2oal1jgv.apps.googleusercontent.com'
    })
  },
  methods: {
    auth (network) {
      // let self = this
      this.$HelloJs(network).login()
        .then((res) => {
          const authRes = this.$HelloJs(network).getAuthResponse()
          console.log('auth', authRes)
          localStorage.setItem('INTERACT_AUTH', JSON.stringify(authRes))
          this.$HelloJs(network).api('me')
            .then((res) => {
              self.user = res
              localStorage.setItem('INTERACT_USER', JSON.stringify(res))
              this.rotaDashboard()
              console.log('user', self.user)
            })
        })
    },
    rotaDashboard () {
      setTimeout(() => {
        this.$router.push('/about')
      }, 100)
    }
  }
}
</script>

<style>
    body{
        background-color: #4fc08d;
    }
    .btn-outline-success {
        color: #4fc08d;
        border-color: #4fc08d;
    }
    .btn-outline-success:hover {
        color: #fff;
        background-color: #4fc08d;
        border-color: #4fc08d;
    }
    a {
        color: #6cd281;
        font-size: 12px;
    }
</style>
