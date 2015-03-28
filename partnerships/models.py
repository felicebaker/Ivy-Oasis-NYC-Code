# Create your models here.

from django.db import models


class Partnerships(models.Model):

    partnership_name = models.CharField(max_length=100,blank=True,null=True)
    partnership_logo = models.FileField(upload_to='/home/felicebaker/webapps/ivyoasisnyc/myproject/media/images/',max_length=255,blank=True,null=True)
    partnership_date_added = models.DateField()
    partnership_website = models.CharField(max_length=150,blank=True,null=True)
    partnership_summary = models.TextField(blank=True,null=True)

    class Meta:
            ordering = ['-partnership_date_added']
            verbose_name_plural = "Partnerships"
# Create your models here.
