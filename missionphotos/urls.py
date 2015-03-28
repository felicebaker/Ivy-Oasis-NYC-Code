from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import DetailView
from events.models import Events
from aboutphotos.models import AboutPhotos
from missionphotos.models import MissionPhotos
from views.views import HomePageView



admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'myproject.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', HomePageView.as_view(), name='index'),
    #url(r'^$', ListView.as_view(
        #model=AboutPhotos,
        #template_name='ivyoasisnyc/index.html',
    #),),
    #url(r'^events/', ListView.as_view(
        #model=Events,
    #), name='events'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

)
