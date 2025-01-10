@coindesk
@Assignment
Feature: Verify Coindesk API Response

  Scenario: Validate Coindesk API response for BPIs
    Given I send a GET request to the Coindesk API
    When I extract the BPI data from the response
    Then I verify the response contains exactly 3 BPIs
    And I verify the BPIs include USD, GBP, and EUR
    And I verify the GBP description is "British Pound Sterling"
