export const apiConfig = {
  baseUrl: "http://localhost", // TODO Should be ENV based
  port: ":3001",
  clientID: "1",
  endPoints: {
    signUp: "users",
    signIn: "users/login",
    signOut: "users/logout",
    screenings: "screenings"
  },
  get apiUrl() { 
    return this.baseUrl + this.port + '/api/'
  }
};
