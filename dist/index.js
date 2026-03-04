#!/usr/bin/env node
"use strict";
// import console from "node:console"
Object.defineProperty(exports, "__esModule", { value: true });
// const {Command} = require("commander")
// const axios = require("axios")
// const program = new Command()
// program
// .command("greet <name>")
// .action((name:string) => {
//     console.log(`Hello, ${name}!`)
// })
// program
// .command("add <num1> <num2>")
// .description("Adds two numbers")
// .action((num1:string, num2:string) => {
//     const sum = Number(num1) + Number(num2)
//     console.log(`The sum of ${num1} and ${num2} is ${sum}.`)
// })
// program
// .command("subtract <num1> <num2>")
// .description("Subtracts the second number from the first")
// .action((num1:string, num2:string) => {
//     const difference = Number(num1) - Number(num2)
//     console.log(`The difference between ${num1} and ${num2} is ${difference}.`)
// })
// program
// .command("multiply <num1> <num2>")
// .description("Multiplies two numbers")
// .action((num1:string, num2:string) => {
//     const product = Number(num1) * Number(num2)
//     console.log(`The product of ${num1} and ${num2} is ${product}.`)
// })
// program
// .command("divide <num1> <num2>")
// .description("Divides the first number by the second")
// .action((num1:string, num2:string) => {
//     if (Number(num2) === 0) {
//         console.log("Error: Division by zero is not allowed.")
//         return
//     }
//     const quotient = Number(num1) / Number(num2)
//     console.log(`The quotient of ${num1} and ${num2} is ${quotient}.`)
// })
// program
// .command("joke")
// .description("Tells a random joke")
// .action(async() => {
//   try {
//     const res = await axios.get("https://official-joke-api.appspot.com/random_joke")
//     const joke = res.data
//     console.log(`${joke.setup}\n${joke.punchline}`)
//   } catch (error) {
//     console.log("Failed to fetch a joke:", error)
//   }
// })
// program
// .command("quote")
// .description("Tells a random quote")
// .action(async() => {
//   try {
//     const res = await axios.get("https://zenquotes.io/api/random")
//     const quote = res.data
//     console.log(`"${quote[0].q}" - ${quote[0].a}`)
//   } catch (error) {
//     console.log("Failed to fetch a quote:", error)
//   }
// })
// program
// .command("info <country>")
// .description("Provides information about a country")
// .action(async(country:string) => {
//   try {
//     const res = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
//     const info = res.data[0]
//     console.log(`Country: ${info.name.common}\nCapital: ${info.capital[0]}\nPopulation: ${info.population}\nRegion: ${info.region}`)
//   } catch (error) {
//     console.log("Failed to fetch country information:", error)
//   }
// })
// program
// .command("weather <city>")
// .description("Provides current weather information for a city")
// .action(async(city:string) => {
//   try {
//     const res = await axios.get(`https://wttr.in/${city}?format=j1`)
//     const weather = res.data
//     console.log(`Current weather in ${city}:\nTemperature: ${weather.main.temp}°C\nDescription: ${weather.weather[0].description}`)
//   } catch (error) {
//     console.log("Failed to fetch weather information:", error)
//   }
// })
// program
// .command("pokemon <name>")
// .description("Provides information about a Pokémon")
// .action(async(name:string) => {
//   try {
//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
//     const pokemon = res.data
//     console.log(`Name: ${pokemon.name}\nHeight: ${pokemon.height}\nWeight: ${pokemon.weight}\nTypes: ${pokemon.types.map((type:any) => type.type.name).join(", ")}`)
//   } catch (error) {
//     console.log("Failed to fetch Pokémon information:", error)
//   }
// })
// program.parse(process.argv)
const commands_1 = require("./commands");
const cli = new commands_1.CLICommands();
cli.run(process.argv);
