INSERT INTO testimonials
select emailid, clientname, clientmessage
from archived_emails
where emailid = $1;
