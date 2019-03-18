<template>
  <v-app>
    <v-content>
      <Pay/>
    </v-content>

  </v-app>
</template>

<script>
import Pay from './components/Pay'

export default {
  name: 'App',
  components: {
    Pay
  },
  data () {
    return {
      //
    }
  }
}
</script>
