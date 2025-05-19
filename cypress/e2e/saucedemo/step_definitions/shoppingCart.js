import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I logged in with username {string} and password {string}",
   (username, password) => {
    cy.visit("https://www.saucedemo.com/"); 
    cy.get("#user-name").clear().type(username);
    cy.get("#password").clear().type(password);
    cy.get("#login-button").click();
  }
);

When(
  "I click the add cart button from the first product", () => {
  cy.get("#add-to-cart-sauce-labs-backpack").click();
});

When("I click the cart button", () => {
  cy.get("#shopping_cart_container").click();
});

Then("I should be redirected to the cart page with the product I added", () => {
  cy.url().should("include", "cart");
  cy.get('[data-test="inventory-item-name"]').should(
    "contain",
    "Sauce Labs Backpack"
  );
});

Then("I should be redirected to the cart page without any products", () => {
  cy.url().should("include", "cart");
  cy.get('[data-test="cart-list"]').should(
    "contain",
    ""
  );
});