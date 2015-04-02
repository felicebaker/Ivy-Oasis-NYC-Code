from django.contrib import admin

# Register your models here.
from sponsors.models import Sponsors

class SponsorsAdmin(admin.ModelAdmin):
    list_display = ('sponsor_company_name',)

admin.site.register(Sponsors, SponsorsAdmin)
