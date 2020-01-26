import axios from "axios";

export default {
 
  // Gets the book with the given id
  getBook: function(token) {
    return axios.get("/api/data/upload",{
        token
    });
  },

  // Saves a book to the database
  saveBook: function(userData) {
    return axios.post("/api/data/upload", {

    });
  }
};
