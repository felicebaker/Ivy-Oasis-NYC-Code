# Create your models here.

from django.db import models


class FeatureEventSpeakerBios(models.Model):


    speaker_first_name = models.CharField(max_length=100,blank=True,null=True)
    speaker_last_name = models.CharField(max_length=100,blank=True,null=True)
    speaker_portrait = models.FileField(upload_to='/home/felicebaker/webapps/ivyoasisnyc/myproject/media/images/',max_length=255,blank=True,null=True)
    speaker_education = models.TextField(blank=True,null=True)
    speaker_company_name = models.CharField(max_length=150,blank=True,null=True)
    speaker_company_position = models.CharField(max_length=150,blank=True,null=True)
    speaker_website = models.CharField(max_length=150,blank=True,null=True)
    speaker_hometown = models.CharField(max_length=150,blank=True,null=True)
    speaker_current_city = models.CharField(max_length=150,blank=True,null=True)
    speaker_linkedin_link = models.CharField(max_length=150,blank=True,null=True)
    speaker_phone_numbers = models.CharField(max_length=150,blank=True,null=True)
    speaker_email_address = models.CharField(max_length=150,blank=True,null=True)
    speaker_date_added = models.DateField(blank=True,null=True)
    speaker_summary = models.TextField(blank=True,null=True)

    class Meta:
            ordering = ['id']
            verbose_name_plural = "FeatureEventSpeakerBios"


