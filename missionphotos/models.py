from django.db import models

class MissionPhotos(models.Model):
    mission_photo = models.FileField(upload_to='/home/felicebaker/webapps/ivyoasisnyc/myproject/media/images/',max_length=255,blank=True, null=True)
    mission_caption = models.TextField(max_length=1000,blank=True, null=True)

    class Meta:
            ordering = ['id']
            verbose_name_plural = "MissionPhotos"