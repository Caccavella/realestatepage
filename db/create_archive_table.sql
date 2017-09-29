CREATE TABLE archived_emails (
    emailID SERIAL PRIMARY KEY REFERENCES emails (emailID),
    clientName varchar(180),
    clientEmail varchar(200),
    clientPhone varchar(15),
    contactReason varchar(40),
    clientMessage text
)