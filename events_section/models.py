from django.db import models


class EventsSection(models.Model):
    GENERAL_NETWORKING = 'GENERAL_NETWORKING'
    TECH = 'TECH'
    FINANCE = 'FINANCE'
    ENVIRONMENT = 'ENVIRONMENT'
    POLITICS = 'POLITICS'
    SOCIAL_MEDIA_TRENDS = 'SOCIAL_MEDIA_TRENDS'
    FUNDRAISING = 'FUNDRAISING'
    COMPANY_SPOTLIGHT_PROMOTION = 'COMPANY_SPOTLIGHT_PROMOTION'
    ENTREPRENEURSHIP = 'ENTREPRENEURSHIP'
    EVENT_CATEGORY_CHOICES = (
    (GENERAL_NETWORKING, 'General Networking'),
    (TECH, 'Tech'),
    (FINANCE, 'Finance'),
    (ENVIRONMENT, 'Environment'),
    (POLITICS, 'Politics'),
    (SOCIAL_MEDIA_TRENDS, 'Social Media Trends'),
    (FUNDRAISING, 'Fundraising'),
    (COMPANY_SPOTLIGHT_PROMOTION, 'Company Spotlight Promotion'),
    (ENTREPRENEURSHIP, 'Entrepreneurship'),
    )
    event_title = models.CharField(max_length=100,blank=True,null=True)
    event_date = models.DateField()
    event_summary = models.TextField(blank=True,null=True)
    ticket_link = models.CharField(max_length=100,blank=True,null=True)
    event_venue_name = models.CharField(max_length=100,blank=True,null=True)
    event_venue_link = models.CharField(max_length=200,default="oldeventlink",blank=True,null=True)
    street_address = models.CharField(max_length=100,blank=True,null=True)
    city_state_zip = models.CharField(max_length=100,blank=True,null=True)
    time_range = models.CharField(max_length=25,blank=True,null=True)
    event_category = models.CharField(max_length=40,choices = EVENT_CATEGORY_CHOICES,default = GENERAL_NETWORKING)
    event_photo = models.FileField(upload_to='/home/felicebaker/webapps/ivyoasisnyc/myproject/media/images/',max_length=255)

    class Meta:
            ordering = ['-event_date']
            verbose_name_plural = "EventsSection"
# Create your models here.
