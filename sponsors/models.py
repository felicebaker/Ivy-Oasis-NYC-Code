# Create your models here.

from django.db import models


class Sponsors(models.Model):

    sponsor_company_name = models.CharField(max_length=100,blank=True,null=True)
    sponsor_founder_name = models.CharField(max_length=100,blank=True,null=True)
    sponsor_address = models.TextField(blank=True,null=True)
    sponsor_website = models.CharField(max_length=150,blank=True,null=True)
    sponsor_logo = models.FileField(upload_to='/home/felicebaker/webapps/ivyoasisnyc/myproject/media/images/',max_length=255,blank=True,null=True)

    sponsor_date_added = models.DateField()
    sponsor_summary = models.TextField(blank=True,null=True)

    class Meta:
            ordering = ['id']
            verbose_name_plural = "Sponsors"


