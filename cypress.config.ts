import { defineConfig } from 'cypress';                 

async function setupNodeEvents(on, config){
    
}

export default defineConfig({
    e2e: {
          retries: 1,
          specPattern: "**/*.cy.ts",
          baseUrl: "https://demoqa.com",
    }
  });