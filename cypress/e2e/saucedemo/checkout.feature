Feature: Checkout a Product
  Scenario: Successful checking out a product from the cart
    Given I already in the cart page
    When I click the checkout button
    And I fill up the field with "Mochamad" , "Deban" , and "40275"
    And I click the continue button
    And I click the finish button
    Then I should be redirected to the complete page that says 'Thank you for your order!'

  Scenario: Unsuccessful checking out a product from the cart
    Given I already in the cart page
    When I click the checkout button
    And I click the continue button
    Then I should see an error message that says 'Error: First Name is required'
