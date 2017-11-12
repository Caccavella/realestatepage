CREATE TABLE archived_emails (
    emailID SERIAL PRIMARY KEY,
    clientName varchar(180),
    clientEmail varchar(200),
    clientPhone varchar(15),
    contactReason varchar(40),
    clientMessage text
)