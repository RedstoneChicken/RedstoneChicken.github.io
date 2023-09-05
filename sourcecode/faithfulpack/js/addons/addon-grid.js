export default {
  name: 'addon-grid',
  template: `
  <div class="card card-body addon-grid">
    <div class="res-grid-3">
      <div v-for="(addon, index) in addons_sorted" class="hovering-effect" style="margin-bottom: calc(-28px)" v-if="addon.approval.status === 'approved'">
        <a class="card img-card" :href="'/addons/' + addon.slug">
          <img :src="'https://database.faithfulpack.net/images/addons/' + addon.slug + '/header'" loading="lazy">
          <div class="img-card-shadow"></div>
          <h3>{{ addon.name }}</h3>
          <div class="addon-flags" style="margin-bottom: 5px">
            <img style="margin-bottom: 5px" v-if="addon.options.tags.includes('Java')" :src="java" alt="available for Java Edition" loading="lazy">
            <img style="margin-bottom: 5px" v-if="addon.options.tags.includes('Bedrock')" :src="bedrock" alt="available for Bedrock Edition" loading="lazy">
            <img style="margin-bottom: 5px" v-if="addon.options.optifine" :src="optifine" alt="requires optifine" loading="lazy">
          </div>
          <div class="addon-tags">
            <p style="margin-bottom: 5px; margin-right: 5px" v-if="addon.options.tags.includes('32x')" >32x</p>
            <p style="margin-bottom: 5px" v-if="addon.options.tags.includes('64x')" >64x</p>
          </div>
        </a>
        <v-btn
          @click="action(addon)"
          small
          :color="Object.keys(addons) === Object.keys(addonsFav) ? iconColor : (addonsFav[addon.id] ? iconColor : 'rgba(0, 0, 0, .5)')"
          icon
          style="position: relative; top: calc(-100% + 2px + 28px); left: 2px"
        >
        <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
  `,
  props: {
    addons: {
      type: Object,
      required: true
    },
    addonsFav: {
      type: Object,
      required: true
    },
    action: {
      type: Function,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconColor: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      optifine: '/image/icon/optifine.png',
      bedrock: '/image/icon/bedrock.png',
      java: '/image/icon/java.png',
    }
  },
  computed: {
    addons_sorted: function() {
      let sorted = Object.values(this.addons)
      sorted.sort((a,b) => {
        let an = a.name.trim().toLowerCase()
        let bn = b.name.trim().toLowerCase()
        
        return an === bn ? 0 : (an > bn ? 1 : -1)
      })

      return sorted
    }
  }
}