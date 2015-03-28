from django.conf.urls import patterns, include, url
from django.contrib import admin
#from aboutphotos.models import AboutPhotos
#from missionphotos.models import MissionPhotos
#from eventssection.models import EventsSection
from views.views import HomePageView, ArchivedEventsView, ArchivedEventsViewByCategory, MediaCoverageView, EmailBlastView
from django.conf import settings




admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'myproject.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', HomePageView.as_view(), name='index'),
    url(r'^thanks/', 'views.views.send_contact_form', name='contact'),
    url(r'^memberinfo/','views.views.sign_in_member', name='memberinfo'),
    url(r'^session/','views.views.start_session', name='session'),
    url(r'^endsession/','views.views.end_session', name='endsession'),
    url(r'^eventarchives/',ArchivedEventsView.as_view(), name='eventarchives'),
    url(r'^eventarchivesbycategory/',ArchivedEventsViewByCategory.as_view(), name='eventarchivesbycategory'),
    url(r'^mediacoverage/',MediaCoverageView.as_view(), name='mediacoverage'),
    url(r'^emailblast/',EmailBlastView.as_view(), name='emailblast'),
    url(r'^emailblastprocessor/','views.views.email_blast', name='emailblastprocessor'),
    #url(r'^$', ListView.as_view(
        #model=AboutPhotos,
        #template_name='ivyoasisnyc/index.html',
    #),),

    #url(r'^events/', ListView.as_view(
        #model=Events,
    #), name='events'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
     #url(r'^tinymce/', include('tinymce.urls')),

)


#if settings.DEBUG:
urlpatterns += patterns('',
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
        'document_root': settings.MEDIA_ROOT,
    }),
)