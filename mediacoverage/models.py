# Create your models here.

from django.db import models


class MediaCoverage(models.Model):


    title = models.CharField(max_length=100,blank=True,null=True)
    date_added = models.DateField()
    first_text_portion = models.TextField(blank=True,null=True)
    first_photo_upload = models.TextField(blank=True,null=True)
    first_photo_caption = models.TextField(blank=True,null=True)
    first_youtube_link = models.CharField(max_length=400,blank=True,null=True)
    first_video_caption = models.TextField(blank=True,null=True)
    second_text_portion = models.TextField(blank=True,null=True)
    second_photo_upload = models.TextField(blank=True,null=True)
    second_photo_caption = models.TextField(blank=True,null=True)
    second_youtube_link = models.CharField(max_length=400,blank=True,null=True)
    second_video_caption = models.TextField(blank=True,null=True)
    third_text_portion = models.TextField(blank=True,null=True)
    third_photo_upload = models.TextField(blank=True,null=True)
    third_photo_caption = models.TextField(blank=True,null=True)
    third_youtube_link = models.CharField(max_length=400,blank=True,null=True)
    third_video_caption = models.TextField(blank=True,null=True)
    fourth_text_portion = models.TextField(blank=True,null=True)
    fourth_photo_upload = models.TextField(blank=True,null=True)
    fourth_photo_caption = models.TextField(blank=True,null=True)
    fourth_youtube_link = models.CharField(max_length=400,blank=True,null=True)
    fourth_video_caption = models.TextField(blank=True,null=True)
    fifth_text_portion = models.TextField(blank=True,null=True)
    fifth_photo_upload = models.TextField(blank=True,null=True)
    fifth_photo_caption = models.TextField(blank=True,null=True)
    fifth_youtube_link = models.CharField(max_length=400,blank=True,null=True)
    fifth_video_caption = models.TextField(blank=True,null=True)
    sixth_text_portion = models.TextField(blank=True,null=True)
    sixth_photo_upload = models.TextField(blank=True,null=True)
    sixth_photo_caption = models.TextField(blank=True,null=True)
    sixth_youtube_link = models.CharField(max_length=400,blank=True,null=True)
    sixth_video_caption = models.TextField(blank=True,null=True)
    seventh_text_portion = models.TextField(blank=True,null=True)
    seventh_photo_upload = models.TextField(blank=True,null=True)
    seventh_photo_caption = models.TextField(blank=True,null=True)
    seventh_youtube_link = models.CharField(max_length=400,blank=True,null=True)
    seventh_video_caption = models.TextField(blank=True,null=True)
    eighth_text_portion = models.TextField(blank=True,null=True)
    eighth_photo_upload = models.TextField(blank=True,null=True)
    eighth_photo_caption = models.TextField(blank=True,null=True)
    eighth_youtube_link = models.CharField(max_length=400,blank=True,null=True)
    eighth_video_caption = models.TextField(blank=True,null=True)
    additional_links = models.TextField(blank=True,null=True)
    pdf_1_title = models.CharField(max_length=400,blank=True,null=True)
    pdf_1 = models.FileField(upload_to='/home/felicebaker/webapps/ivyoasisnyc/myproject/media/images/',max_length=255,blank=True,null=True)
    pdf_2_title = models.CharField(max_length=400,blank=True,null=True)
    pdf_2 = models.FileField(upload_to='/home/felicebaker/webapps/ivyoasisnyc/myproject/media/images/',max_length=255,blank=True,null=True)


    class Meta:
            ordering = ['-date_added']
            verbose_name_plural = "Media Coverage"


