from django.contrib import admin

# Register your models here.
from mediacoverage.models import MediaCoverage

class MediaCoverageAdmin(admin.ModelAdmin):
    list_display = ('title',) 

admin.site.register(MediaCoverage, MediaCoverageAdmin)
