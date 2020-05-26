Feature: Launch
  Verify launch google chrome

  @smoke
  Scenario: Launch google chrome
    Given I launch google chrome
    Then I type something in google search
    Then I press enter

  @sanity
  Scenario: Launch google chrome
    Given I launch google chrome
    Then I type something in google search
    Then I press enter
