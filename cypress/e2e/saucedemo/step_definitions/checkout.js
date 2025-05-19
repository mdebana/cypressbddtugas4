import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I already in the cart page", () => {
    cy.visit("https://www.saucedemo.com/"); 
    cy.get("#user-name").clear().type("standard_user");
    cy.get("#password").clear().type("secret_sauce");
    cy.get("#login-button").click();
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#shopping_cart_container").click();
});

When(
  "I click the checkout button", () => {
  cy.get("#checkout").click();
});

When("I fill up the field with {string} , {string} , and {string}", (firstName, lastName, zipCode) => {
  cy.get("#first-name").clear().type(firstName);
  cy.get("#last-name").clear().type(lastName);
  cy.get("#postal-code").clear().type(zipCode);
});

When(
  "I click the continue button", () => {
  cy.get("#continue").click();
});

When(
  "I click the finish button", () => {
  cy.get("#finish").click();
});

Then("I should be redirected to the complete page that says 'Thank you for your order!'", () => {
  cy.url().should("include", "checkout-complete");
  cy.get('[data-test="complete-header"]').should(
    "contain",
    "Thank you for your order!"
  );
});

Then("I should see an error message that says 'Error: First Name is required'", () => {
  cy.get('[data-test="error"]').should(
    "contain",
    "Error: First Name is required"
  );
});