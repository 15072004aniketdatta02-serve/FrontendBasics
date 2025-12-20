class ApiClient {
    constructor(){
        this.baseURL = "http://localhost:5000/api/v1";
        this.defaultHeaders = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
    }
    async customFetch(endpoint, options = {}) {
        try {
            const url = `${this.baseURL}${endpoint}`;
            const headers = { ...this.defaultHeaders, ...options.headers};
            const config = {
                ...options,
                headers,
                credentials:'include'//cookies
            }
            console.log("Fetching:${url}");
            const response = await fetch(url, config);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "API request failed");
            }
            return data;
        } catch (error) {
            console.error("API call error:", error);
            throw error;

        }
}
    // Auth endpoints
    async signup(name, email,password){
        this.customFetch("/users/register", {
            method:"POST",
            body:JSON.stringify({name,email,password}),
        });
    }
    async login(email,password){
        this.customFetch("/users/login", {
            method:"POST",
            body:JSON.stringify({email,password}),
        });        
    }
    async getProfile(){
        this.customFetch("/users/profile");        
    }    
}
const apiClient = new ApiClient();
export default apiClient;