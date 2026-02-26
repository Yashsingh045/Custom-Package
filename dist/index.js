#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_console_1 = __importDefault(require("node:console"));
const { Command } = require("commander");
const axios = require("axios");
const program = new Command();
program
    .command("greet <name>")
    .action((name) => {
    node_console_1.default.log(`Hello, ${name}!`);
});
program
    .command("add <num1> <num2>")
    .description("Adds two numbers")
    .action((num1, num2) => {
    const sum = Number(num1) + Number(num2);
    node_console_1.default.log(`The sum of ${num1} and ${num2} is ${sum}.`);
});
program
    .command("subtract <num1> <num2>")
    .description("Subtracts the second number from the first")
    .action((num1, num2) => {
    const difference = Number(num1) - Number(num2);
    node_console_1.default.log(`The difference between ${num1} and ${num2} is ${difference}.`);
});
program
    .command("multiply <num1> <num2>")
    .description("Multiplies two numbers")
    .action((num1, num2) => {
    const product = Number(num1) * Number(num2);
    node_console_1.default.log(`The product of ${num1} and ${num2} is ${product}.`);
});
program
    .command("divide <num1> <num2>")
    .description("Divides the first number by the second")
    .action((num1, num2) => {
    if (Number(num2) === 0) {
        node_console_1.default.log("Error: Division by zero is not allowed.");
        return;
    }
    const quotient = Number(num1) / Number(num2);
    node_console_1.default.log(`The quotient of ${num1} and ${num2} is ${quotient}.`);
});
program
    .command("joke")
    .description("Tells a random joke")
    .action(async () => {
    try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        const joke = res.data;
        node_console_1.default.log(`${joke.setup}\n${joke.punchline}`);
    }
    catch (error) {
        node_console_1.default.log("Failed to fetch a joke:", error);
    }
});
program
    .command("quote")
    .description("Tells a random quote")
    .action(async () => {
    try {
        const res = await axios.get("https://zenquotes.io/api/random");
        const quote = res.data;
        node_console_1.default.log(`"${quote[0].q}" - ${quote[0].a}`);
    }
    catch (error) {
        node_console_1.default.log("Failed to fetch a quote:", error);
    }
});
program
    .command("info <country>")
    .description("Provides information about a country")
    .action(async (country) => {
    try {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
        const info = res.data[0];
        node_console_1.default.log(`Country: ${info.name.common}\nCapital: ${info.capital[0]}\nPopulation: ${info.population}\nRegion: ${info.region}`);
    }
    catch (error) {
        node_console_1.default.log("Failed to fetch country information:", error);
    }
});
program
    .command("weather <city>")
    .description("Provides current weather information for a city")
    .action(async (city) => {
    try {
        const res = await axios.get(`https://wttr.in/${city}?format=j1`);
        const weather = res.data;
        node_console_1.default.log(`Current weather in ${city}:\nTemperature: ${weather.main.temp}°C\nDescription: ${weather.weather[0].description}`);
    }
    catch (error) {
        node_console_1.default.log("Failed to fetch weather information:", error);
    }
});
program
    .command("pokemon <name>")
    .description("Provides information about a Pokémon")
    .action(async (name) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        const pokemon = res.data;
        node_console_1.default.log(`Name: ${pokemon.name}\nHeight: ${pokemon.height}\nWeight: ${pokemon.weight}\nTypes: ${pokemon.types.map((type) => type.type.name).join(", ")}`);
    }
    catch (error) {
        node_console_1.default.log("Failed to fetch Pokémon information:", error);
    }
});
program.parse(process.argv);
