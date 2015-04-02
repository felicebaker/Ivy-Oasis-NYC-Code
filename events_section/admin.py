from django.contrib import admin
from events_section.models import EventsSection

class EventsSectionAdmin(admin.ModelAdmin):
    list_display = ('event_title',)

admin.site.register(EventsSection, EventsSectionAdmin)
