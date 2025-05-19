Feature: Add to Shopping Cart
  Scenario: Successfully added a product to a cart
    Given I logged in with username "standard_user" and password "secret_sauce"
    When I click the add cart button from the first product
    And I click the cart button
    Then I should be redirected to the cart page with the product I added

  Scenario: Go to cart without adding any products
    Given I logged in with username "standard_user" and password "secret_sauce"
    When I click the cart button
    Then I should be redirected to the cart page without any products