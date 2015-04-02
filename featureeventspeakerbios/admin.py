from django.contrib import admin
from featureeventspeakerbios.models import FeatureEventSpeakerBios

class FeatureEventSpeakerBiosAdmin(admin.modelAdmin):
    list_display = ('speaker_first_name',)

admin.site.register(FeatureEventSpeakerBios, FeatureEventSpeakerBiosAdmin)
