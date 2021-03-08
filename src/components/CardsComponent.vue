<template>
  <div class="container">
    <transition name="list" mode="out-in">
      <div
        class="columns is-multiline"
        v-if="!isLoading && displayedItems.length > 0"
      >
        <div
          class="column"
          :class="'is-4-widescreen  is-4-desktop is-5-tablet'"
          v-for="(itemCard, i) in displayedItems"
          :key="i"
        >
          <div class="card">
            <figure class="card-img-top">
              <p class="image ">
                <img
                  :src="
                    replaceArtworkUrlSize(itemCard.artworkUrl100, '120x120')
                  "
                  :alt="itemCard.collectionCensoredName"
                />
              </p>
            </figure>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <div class="title is-size-5-widescreen is-size-5-desktop ">
                    <a
                      v-if="itemCard.collectionId"
                      @click="onClickName(itemCard)"
                      >{{ itemCard.collectionCensoredName }}</a
                    >
                  </div>
                  <div class="subtitle is-6">
                    {{ itemCard.artistName }} <br />
                    <span style="color: gray">{{
                      itemCard.primaryGenreName
                    }}</span>
                    <br />
                    <span
                      style="color: green"
                      v-if="
                        itemCard.trackPrice !== undefined &&
                          itemCard.trackPrice !== 0
                      "
                      >{{ "Track Price " + itemCard.trackPrice }}
                    </span>
                    <br />

                    <span
                      style="color: green"
                      v-if="
                        itemCard.collectionPrice !== undefined &&
                          itemCard.collectionPrice !== 0
                      "
                    >
                      {{ "Collection Price " + itemCard.collectionPrice }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <template v-if="searchFailed && !isLoading">
      <div class="columns is-multiline">
        <div class="column">
          <h3 class="title is-4 has-text-centered">Nothing found!</h3>
          <h3 class="title is-4 has-text-centered">
            Please Try Again!
          </h3>
        </div>
      </div>
    </template>
    <div
      class="columns is-multiline is-mobile"
      v-if="!isLoading && displayedItems.length > 0"
    >
      <div class="column is-12" v-if="displayedItems.length > 0">
        <hr />
        <b-pagination
          :total="displayedItems.length"
          :current.sync="currentPage"
          :order="order"
          :size="size"
          :simple="isSimple"
          :rounded="isRounded"
          :per-page="numberOfCardsPerPage"
        >
        </b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      currentPage: 1,
      numberOfCardsPerPage: 20,
      order: "is-centered",
      size: "",
      isSimple: false,
      isRounded: false
    };
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    pageType: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    searchFailed: {
      type: Boolean,
      required: true
    },
    replaceArtworkUrlSize: {
      type: Function,
      required: true
    }
  },
  watch: {
    items(val, oldVal) {
      if (val !== oldVal) {
        this.currentPage = 1;
      }
    }
  },
  computed: {
    displayedItems() {
      let from =
        this.currentPage * this.numberOfCardsPerPage -
        this.numberOfCardsPerPage;
      let to = this.currentPage * this.numberOfCardsPerPage;
      return this.items.slice(from, to);
    }
  },
  methods: {
    onClickName(item) {
      window.open(item.collectionViewUrl, "_blank");
    }
  }
};
</script>

<style scoped>
.card {
  margin: 5 rem;
  padding: 5 rem;
}
</style>
