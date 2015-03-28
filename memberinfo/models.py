# Create your models here.

from django.db import models


class MemberInfo(models.Model):

    member_first_name = models.CharField(max_length=100)
    member_last_name = models.CharField(max_length=100)
    member_email_address = models.CharField(max_length=150, unique=True)
    member_school_1 = models.CharField(max_length=250)
    member_school_2 = models.CharField(max_length=250)
    member_school_3 = models.CharField(max_length=250)
    member_school_4 = models.CharField(max_length=250)


    class Meta:
            ordering = ['id']
            verbose_name_plural = "MemberInfo"


