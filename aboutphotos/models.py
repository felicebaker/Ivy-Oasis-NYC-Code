from django.db import models

class AboutPhotos(models.Model):
    about_photo = models.FileField(upload_to='/home/felicebaker/webapps/ivyoasisnyc/myproject/media/images/',max_length=255,blank=True, null=True)
    about_caption = models.TextField(max_length=1000, blank=True, null=True)


    class Meta:
            ordering = ['id']
            verbose_name_plural = "AboutPhotos"