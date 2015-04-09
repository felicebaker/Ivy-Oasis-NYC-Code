# Create your models here.

from django.db import models
from tinymce import models as tinymce_models

class Bios(models.Model):

    bio_name = models.CharField(max_length=100)
    bio_staff_position_short = models.CharField(max_length=100)
    bio_staff_position_long = models.CharField(max_length=150)
    bio_portrait = models.FileField(upload_to='/home/felicebaker/webapps/ivyoasisnyc/myproject/media/images/',max_length=255)
    bio_education = tinymce_models.HTMLField()
    bio_company_name = models.CharField(max_length=150)
    bio_company_position = models.CharField(max_length=150)
    bio_website = models.CharField(max_length=150)
    bio_hometown = models.CharField(max_length=150)
    bio_current_city = models.CharField(max_length=150)
    bio_linkedin_link = models.CharField(max_length=150)
    bio_phone_numbers = models.CharField(max_length=150)
    bio_email_address = models.CharField(max_length=150)
    bio_date_added = models.DateField()
    bio_summary = tinymce_models.HTMLField()

    class Meta:
            ordering = ['id']
            verbose_name_plural = "Bios"

