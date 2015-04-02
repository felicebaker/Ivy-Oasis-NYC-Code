from django.contrib import admin
from bios.models import Bios

class BiosAdmin(admin.ModelAdmin):
    list_display = ('bio_name',)

admin.site.register(Bios, BiosAdmin)
