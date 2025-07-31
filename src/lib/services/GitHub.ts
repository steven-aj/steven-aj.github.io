class GitHub {

    url: string;
    fetcher: any;

    constructor() {
        this.url = "https://api.github.com/users/steven-aj";
    }

    async fetch(url: string = this.url) {
        if (!this.fetcher) throw new Error(`GitHub Service: Fetcher not provided.`);
        
        try {
            const response = await this.fetcher(url);
            
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }
}

export default new GitHub();