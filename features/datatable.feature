Feature: DataTable concept


    Background:
       #Given Browser Launch
    #changes 2    
    #changes
    #hashes()
    @hashes
    Scenario: Login with Credentials
        Given user enters the login details
            | username | password   |
            | Yuvaraj  | Admins2323 |

    #rowsHash()
    @rowsHash
    Scenario: Login with Credentials with rowsHash
        Given user enters the login details with rowsHash
            | username | Yuvaraj    |
            | password | Admins2323 |

    #raw()
    @raw
    Scenario: Login with Credentials with raw
        Given user enters the login details with raw
            | username | password   |
            | Yuvaraj  | Admins2323 |


    #rows()
    @rows
    Scenario: Login with Credentials rows
        Given user enters the login details rows
            | username | password   |
            | Yuvaraj  | Admins2323 |
