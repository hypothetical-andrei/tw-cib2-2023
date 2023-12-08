class DataStore {
  constructor () {
    this.data = []
  }

  async getAll() {
    try {
      const response = await fetch('http://localhost:8080/votes')
      if (!response.ok) {
        throw response
      }
      this.data = await response.json()
    } catch (error) {
      console.warn(error)
    }
  }
}

const store = new DataStore()

export default store