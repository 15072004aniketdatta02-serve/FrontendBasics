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
            console.log(`Fetching: ${url}`);
            const response = await fetch(url, config);

            const text = await response.text();
            let data = null;
            try {
                data = text ? JSON.parse(text) : null;
            } catch (parseErr) {
                data = text;
            }

            if (!response.ok) {
                const message = (data && data.message) ? data.message : response.statusText || 'API request failed';
                const err = new Error(message);
                err.status = response.status;
                err.response = data;
                throw err;
            }

            return data;
        } catch (error) {
            console.error("API call error:", error);
            throw error;

        }
}
    // Auth endpoints
    async signup(name, email,password){
        return await this.customFetch("/users/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
        });
    }
    async login(email,password){
        return await this.customFetch("/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });
    }
    async getProfile(){
        return await this.customFetch("/users/profile");        
    }    
}
const apiClient = new ApiClient();
export default apiClient;