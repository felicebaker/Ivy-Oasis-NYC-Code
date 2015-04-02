from django.contrib import admin
from missionphotos.models import MissionPhotos

class MissionPhotosAdmin(admin.ModelAdmin):
    list_display = ('mission_photo',)

admin.site.register(MissionPhotos, MissionPhotosAdmin)


