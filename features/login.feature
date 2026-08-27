@smoke_test
Feature: Login functionality

    Background:
    Given Browser Launch

    Scenario: Validate valid Username and Password
        When Enter valid username "Admin1223"
        And Enter valid password "Aasndks"
        And Click Login button
        Then Validate Home page

    
    Scenario: Validate invalid Username and Password
        When Enter invalid username "Admin1223"
        And Enter invalid password "Aasndks"
        And Click Login button
        Then Validate Home page

    
    Scenario Outline: Validate Username and Password
        When Enter username "<username>"
        And Enter password "<password>"
        And Click Login button
        Then Validate Home page
        Examples:
            | username | password |
            | Admin1   | pass1    |
            | Admin2   | pass2    |
            | Admin3   | pass3    |