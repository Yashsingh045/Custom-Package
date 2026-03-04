# Custom Package

## mycli - Command Line Tool

A simple Node.js CLI featuring 10 custom commands including API integrations.


## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Yashsingh045/Custom-Package.git
cd Custom-Package
```

2. Install dependencies:

```bash
npm install
```

3. Compile TypeScript:

```bash
npx tsc
```

4. Link CLI globally:

```bash
npm link
```

Now you can use `mycli` from anywhere in your terminal!

## Available Commands

| Command                        | Description                           |
| ------------------------------ | ------------------------------------- |
| `mycli greet <name>`           | Greet a user by name                    |
| `mycli add <num1> <num2>`      | Add two numbers                       |
| `mycli subtract <num1> <num2>` | Subtract two numbers                    |
| `mycli multiply <num1> <num2>` | Multiply two numbers                   |
| `mycli divide <num1> <num2>`   | Divide two numbers                    |
| `mycli pokemon <name>`         | Show information about a Pokemon (API) |
| `mycli info <country_name>`    | Get information about a country (API) |
| `mycli joke`                   | Get a random joke (API)               |
| `mycli weather <city>`         | Get current weather of the city (API)     |
| `mycli quote`                  | Show Random Quote (API)               |
| `mycli help`                   | Show help information                 |

## Example Usage

### Basic Commands

```bash
# Greet someone
mycli greet Yash
# Output: Hello, Yash!

# Math operations
mycli add 2 4
# Output: The sum of 2 and 4 is 6.

mycli subtract 10 4
# Output: The difference between 10 and 4 is 6.

mycli multiply 6 7
# Output: The product of 6 and 7 is 42.

mycli divide 20 4
# Output: The quotient of 20 and 4 is 5.




```

### API Commands

```bash
# Get Pokemon info

mycli pokemon pikachu
# output:
#    Name: pikachu
#    Height: 4
#    Weight: 60
#    Types: electric 


# Get country info

mycli info india         
# Output: 
#    Country: India
#    Capital: New Delhi
#    Population: 1417492000
#    Region: Asia


# Get a random joke

mycli joke
# Output:
#   What’s 50 Cent’s name in Zimbabwe?
#   200 Dollars.


# Get a random Quote

mycli quote
# output:
#   "Before anything else, preparation is the key to success." - Alexander Graham Bell


# get city weather

mycli weather London
# Output:
#   Current weather in London:
#   Temperature: 12°C
#   Description: Haze
```

## API Integrations

- **PokeAPI** - Fetches Pokemon data (https://pokeapi.co)
- **REST Countries API** - Fetches country information (https://restcountries.com)
- **Official Joke API** - Fetches random jokes (https://official-joke-api.appspot.com)

- **Random Quotes** - Fetches random quote (https://zenquotes.io)
- **Get Weather Info** - Fetches weather info (https://wttr.in)

## Tech Stack

- Node.js
- TypeScript
- Commander.js (CLI framework)
- Axios (HTTP client)
