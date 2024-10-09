export class RandomDataGenerator {

    private static firstNames = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Diana', 'Eva', 'Frank', 'Grace', 'Henry'];
    private static lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];



    static generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }


    static generateRandomFirstName(): string {
        const firstName = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
        return firstName;
    }

    static generateRandomLastName(): string {
        const lastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
        return lastName;
    }

    static generateRandomFullName(): string {
        return `${this.generateRandomFirstName()} ${this.generateRandomLastName()}`;
    }

    static generateRandomEmail(): string {
        const username = this.generateRandomString(8);
        const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
        const domain = domains[Math.floor(Math.random() * domains.length)];
        
        return `${username}@${domain}`;
    }

    static generateRandomPassword(): string {
        return this.generateRandomString(12);
    }
}

//here was he idea to use this random data generator in dataProvider, but unfortunatelly I didn't have time to finish this idea to the end 
//(for example, password can be randomly generated, as well as first and last name. For email my idea failed, because I saw that system accepts only real email addresses)