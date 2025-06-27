// Load environment variables from .env file
require('dotenv').config();

// Import the child_process module to run the Chromatic command
const { spawnSync } = require('child_process');

// Run Chromatic with the token from .env
const result = spawnSync('npx', ['chromatic', `--project-token=${process.env.CHROMATIC_TOKEN}`], {
  stdio: 'inherit', // Pipe the output to the current terminal
  encoding: 'utf-8'
});

// Exit with the same code as the Chromatic process
process.exit(result.status); 