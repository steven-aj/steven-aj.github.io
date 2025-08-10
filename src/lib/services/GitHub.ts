class GitHub {

    http: any;
    profile: string;
    repo: string;

    constructor() {
        this.profile = "https://api.github.com/users/steven-aj";
        this.repo = "https://api.github.com/repos/steven-aj/steven-aj/git/trees/main";
    }

    private async fetch(endpoint: string = this.profile) {
        if (!this.http) throw new Error(`GitHub Service: Fetcher not provided.`);

        await this.http(endpoint)
        
        try {
            const response = await this.http(endpoint);
            
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    public async getUser() {
        const user = await this.fetch();
        return user;
    }
}

export default new GitHub();