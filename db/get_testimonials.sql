SELECT t.clientMessage, t.clientName
FROM testimonials t
JOIN archived_emails ae ON t.emailID = ae.emailID
where ae.contactReason='Testimonial';