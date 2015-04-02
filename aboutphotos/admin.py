from django.contrib import admin

# Register your models here.
from aboutphotos.models import AboutPhotos

class AboutPhotosAdmin(admin.ModelAdmin):
    list_display = ('about_photo',)

admin.site.register(AboutPhotos, AboutPhotosAdmin)
