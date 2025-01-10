@ebay
@Assignment
Feature:  EBay - Functional Cases
  
  Scenario: E2E Scenario to verify user can add a book to cart
    Given navigate to ebay homepage
    And search for "Book"
    And press key "Enter"
    And verify page contains "Save this search"
    Then select first book from search results
    Then wait till new window appears
    Then click on "Add to cart" button by exact text
    Then verify cart has been updated and displays the number of items as "1"