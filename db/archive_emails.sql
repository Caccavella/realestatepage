INSERT INTO archived_emails
select * from emails
where emailid = $1;

DELETE FROM emails
where emailid = $1;