<template>
  <div id="home">
    <div class="nav-search">
      <Search
        @clickSearch="search_items"
        @clickClearSearch="clearSearch"
        :newQuery="searchQuery"
      >
      </Search>
    </div>

    <main>
      <CardList
        :replaceArtworkUrlSize="replaceArtworkUrlSize"
        :items="pageType === 'search' ? items : bookmarkAlbums"
        :isLoading="isLoading"
        :searchFailed="searchFailed"
        :pageType="pageType"
      ></CardList>
    </main>
  </div>
</template>

<script>
import Search from "@/components/SearchComponent.vue";
import CardList from "@/components/CardsComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },

  components: {
    Search,
    CardList
  },

  methods: {
    ...mapActions(["update_query", "search_collection"]),
    setPageType(pageType) {
      if (pageType !== this.pageType) {
        this.$store.commit("set_page_type", pageType);
      }

      if (
        pageType === "search" &&
        this.initialSearchQuery !== this.searchQuery
      ) {
        this.search_items(this.initialSearchQuery);
      }
    },
    search_items(new_query, selected, type) {
      if (new_query) {
        const payload = {
          url: `https://itunes.apple.com/search?term=${new_query}&entity=${type}&media=${selected}`,
          query: new_query
        };
        this.$store.dispatch("search_collection", payload);
      }
      this.$store.commit("set_page_type", "search");
    },
    clearSearch() {
      this.$store.commit("clear_search");
    },
    replaceArtworkUrlSize(itemArtwork, newSize) {
      return itemArtwork.replace("100x100", newSize);
    }
  },
  computed: {
    ...mapGetters({
      items: "get_collection",
      searchQuery: "search_query",
      initialSearchQuery: "initial_query",
      isLoading: "is_loading",
      searchFailed: "search_failed",
      pageType: "page_type"
    })
  }
};
</script>
<style scoped>
.nav-search {
  width: 100%;
}
</style>
