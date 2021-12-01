<template>
  <div class="add-data">
    <h1 class="title">Data Visualization</h1>
    <div class="subtitle">Please upload the data in csv format to visualize.</div>
    <label for="file-input">파일 업로드</label>
    <input 
      id="file-input"
      type="file"
      accept=".csv"
      @change="onUpload"
      style="display: none;"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AddData',
  data () {
    return {
      file: null,
    }
  },
  methods: {
    onUpload(event) {
      const file = event.target.files ? event.target.files[0] : null
      var reader = new FileReader()
      reader.onload = () => {
        this.file = reader.result
      }
      reader.readAsText(file, "EUC-KR")
      this.$store.commit('SET_FILE_NAME', file.name)
    },
  }, 
  watch: {
    file () {
      this.$store.dispatch('tsv2Array', this.file)
    }
  },
  computed: {
    ...mapState(['data', 'fileName'])
  }
}
</script>

<style scoped>
  .add-data {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1, h4 {
    margin: 0;
  }
  .title {
    font-size: 3rem;
    font-weight: 900;
  }
  .subtitle {
    font-size: 1.2rem;
  }
  label {
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    padding: .5rem 3rem;
    border-radius: 2rem;
    background: linear-gradient(120deg, rgba(244,49,66,1) 50%, rgba(254,115,6,1) 100%);
    cursor: pointer;
  }
</style>