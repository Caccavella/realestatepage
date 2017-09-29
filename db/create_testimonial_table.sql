CREATE TABLE testimonials (
    emailID Integer PRIMARY KEY REFERENCES archived_emails (emailID),
    clientName varchar(180),
    clientMessage text
)