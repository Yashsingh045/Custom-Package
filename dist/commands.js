"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLICommands = void 0;
const axios_1 = __importDefault(require("axios"));
const commander_1 = require("commander");
class MathCommands {
    add(num1, num2) {
        const suma = Number(num1) + Number(num2);
        console.log(`The sum of ${num1} and ${num2} is ${suma}.`);
    }
    subtract(num1, num2) {
        const diff = Number(num1) - Number(num2);
        console.log(`The difference between ${num1} and ${num2} is ${diff}.`);
    }
    multiply(num1, num2) {
        const mul = Number(num1) * Number(num2);
        console.log(`The product of ${num1} and ${num2} is ${mul}.`);
    }
    divide(num1, num2) {
        if (Number(num2) === 0) {
            console.log("division by zero is not allowed.");
            return;
        }
        const d = Number(num1) / Number(num2);
        console.log(`The quotient of ${num1} and ${num2} is ${d}.`);
    }
}
class ApiCommands {
    async joke() {
        try {
            const res = await axios_1.default.get("https://official-joke-api.appspot.com/random_joke");
            const joke = res.data;
            console.log(`${joke.setup}\n${joke.punchline}`);
        }
        catch (error) {
            console.log("Failed to fetch a joke:", error);
        }
    }
    async quote() {
        try {
            const res = await axios_1.default.get("https://zenquotes.io/api/random");
            const quote = res.data;
            console.log(`"${quote[0].q}" - ${quote[0].a}`);
        }
        catch (error) {
            console.log("Failed to fetch a quote:", error);
        }
    }
    async info(country) {
        try {
            const res = await axios_1.default.get(`https://restcountries.com/v3.1/name/${country}`);
            const info = res.data[0];
            console.log(`Country: ${info.name.common}\n` +
                `Capital: ${info.capital[0]}\n` +
                `Population: ${info.population}\n` +
                `Region: ${info.region}`);
        }
        catch (error) {
            console.log("Failed to fetch country information:", error);
        }
    }
    async weather(city) {
        try {
            const res = await axios_1.default.get(`https://wttr.in/${city}?format=j1`);
            const weather = res.data;
            console.log(`Current weather in ${city}:\n` +
                `Temperature: ${weather.current_condition[0].temp_C}°C\n` +
                `Description: ${weather.current_condition[0].weatherDesc[0].value}`);
        }
        catch (error) {
            console.log("Failed to fetch weather information:", error);
        }
    }
    async pokemon(name) {
        try {
            const res = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            const pokemon = res.data;
            console.log(`Name: ${pokemon.name}\n` +
                `Height: ${pokemon.height}\n` +
                `Weight: ${pokemon.weight}\n` +
                `Types: ${pokemon.types.map((type) => type.type.name).join(", ")}`);
        }
        catch (error) {
            console.log("Failed to fetch Pokémon information:", error);
        }
    }
}
class GreetCommand {
    greet(name) {
        console.log(`Hello, ${name}!`);
    }
}
class CLICommands {
    constructor() {
        this.mathCommands = new MathCommands();
        this.apiCommands = new ApiCommands();
        this.greetCommand = new GreetCommand();
        this.program = new commander_1.Command();
        this.registerCommands();
    }
    registerCommands() {
        this.program
            .command("greet <name>")
            .action((name) => {
            try {
                this.greetCommand.greet(name);
            }
            catch (error) {
                console.log("Command Fail:", error);
            }
        });
        this.program
            .command("add <num1> <num2>")
            .description("Adds two numbers")
            .action((num1, num2) => {
            this.mathCommands.add(num1, num2);
        });
        this.program
            .command("subtract <num1> <num2>")
            .description("Subtracts the second number from the first")
            .action((num1, num2) => {
            this.mathCommands.subtract(num1, num2);
        });
        this.program
            .command("multiply <num1> <num2>")
            .description("Multiplies two numbers")
            .action((num1, num2) => {
            this.mathCommands.multiply(num1, num2);
        });
        this.program
            .command("divide <num1> <num2>")
            .description("Divides the first number by the second")
            .action((num1, num2) => {
            this.mathCommands.divide(num1, num2);
        });
        this.program
            .command("joke")
            .description("Tells a random joke")
            .action(() => {
            this.apiCommands.joke();
        });
        this.program
            .command("quote")
            .description("Tells a random quote")
            .action(() => {
            this.apiCommands.quote();
        });
        this.program
            .command("info <country>")
            .description("Provides information about a country")
            .action((country) => {
            this.apiCommands.info(country);
        });
        this.program
            .command("weather <city>")
            .description("Provides current weather information for a city")
            .action((city) => {
            this.apiCommands.weather(city);
        });
        this.program
            .command("pokemon <name>")
            .description("Provides information about a Pokémon")
            .action((name) => {
            this.apiCommands.pokemon(name);
        });
    }
    run(argv) {
        this.program.parse(argv);
    }
}
exports.CLICommands = CLICommands;
