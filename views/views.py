from django.views.generic import ListView
from aboutphotos.models import AboutPhotos
from missionphotos.models import MissionPhotos
from events_section.models import EventsSection
from partnerships.models import Partnerships
from bios.models import Bios
from featureeventspeakerbios.models import FeatureEventSpeakerBios
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from views.contactforms import ContactForm
from django.core.mail import send_mail
from memberinfo.models import MemberInfo
from memberinfo.memberinfo import MemberInfoForm
from sponsors.models import Sponsors
from mediacoverage.models import MediaCoverage
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator



class HomePageView(ListView):
    model = AboutPhotos
    template_name = 'ivyoasisnyc/index.html'
    context_object_name = 'aboutphotos_list'

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(HomePageView, self).get_context_data(**kwargs)
        # Add in a QuerySet of all the books
        context['missionphotos_list'] = MissionPhotos.objects.all()
        context['eventssection_list'] = EventsSection.objects.all()
        context['partnerships_list'] = Partnerships.objects.all()
        context['bios_list'] = Bios.objects.all()
        context['featureeventspeakerbios_list'] = FeatureEventSpeakerBios.objects.all()
        context['sponsors_list'] = Sponsors.objects.all()
        return context


def send_contact_form(request):
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = ContactForm(request.POST)
        if form.is_valid():
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            subject = form.cleaned_data['subject']
            message = "New email from: " + form.cleaned_data['first_name'] + " " + form.cleaned_data[
                'last_name'] + "\r\n\r\n" + form.cleaned_data['message']
            sender = form.cleaned_data['sender']
            cc_myself = form.cleaned_data['cc_myself']
            recipients = ['ivyoasisny@gmail.com','canberk.dayan@ivyoasisnyc.com','admin@ivyoasisnyc.com']

            if cc_myself:
                recipients.append(sender)

            send_mail(subject, message, sender, recipients)
            # return HttpResponseRedirect('/thanks/')

    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})


def sign_in_member(request):
    if request.method == 'POST':
        print(request.POST)
        # Create a form instance from POST data.



        f = MemberInfoForm(request.POST)
        if f.is_valid():
            print(f.errors)
            new_member_info = f.save()

            # Create a form to edit an existing Article, but use
            # POST data to populate the form.
            # a = MemberInfo.objects.get(pk=1)
            # f = MemberInfoForm(request.POST, instance=a)
            #f.save()

    else:
        f = MemberInfoForm()

    return render(request, 'memberinfo.html', {'form': f})


def start_session(request):
    if request.method == 'POST':
        request.session['first_name'] = request.POST['first_name']
        request.session['last_name'] = request.POST['last_name']
        request.session['email_address'] = request.POST['email_address']
        link_to_site = "http://www.ivyoasisnyc.com"
        link_to_photo = "http://www.ivyoasisnyc.com/static/ivyoasisnyc/images/ionyclogo3.png"
        member_type = request.POST['sign_in_type']
        if member_type == "newmember":
            subject = "Welcome to Ivy Oasis NYC " + request.POST['first_name'] + "!"
            message = ""
            my_html_message = "Thank you for registering with Ivy Oasis NYC, " + request.POST['first_name'] + "! <br /><br />"
            my_html_message += "Whether you are actively seeking a job, or just looking to grow your network, as a member <br />"
            my_html_message += "of Ivy Oasis NYC, you will have exclusive access to some of the most life-enriching <br />"
            my_html_message += "networking events in New York City, as well as frequent opportunities to connect with <br />"
            my_html_message += "individuals of similar intellect and compatible interests. <br /><br />"
            my_html_message += "We look forward to seeing you at our upcoming events ! <br /><br />"
            my_html_message += "<br /><br />"
            my_html_message += "Sincerely, <br />"
            my_html_message += "The Ivy Oasis NYC Team <br /><br />"
            my_html_message += "<a href='"+link_to_site+"'><img src='"+link_to_photo+"'  style='width:30%;'/></a>"
            sender = "Ivy Oasis NYC <admin@ivyoasisnyc.com>"
            recipients = [request.POST['email_address']]
            send_mail(subject, message, sender, recipients, html_message = my_html_message)
            return HttpResponse("Session has started successfully")
        elif member_type == "oldmember":
            return HttpResponse("Session has started successfully")



    else:
        return HttpResponse("There was a problem starting this session")


def end_session(request):
    if request.method == 'POST':
        del request.session['first_name']
        del request.session['last_name']
        del request.session['email_address']
        return HttpResponse("Session has ended successfully")
    else:
        return HttpResponse("There was a problem ending this session")


def email_blast(request):
    if request.method == 'POST':
        recipients = [request.POST['recipients']]
        sender = request.POST['sender']
        subject = request.POST['subject']
        messageportion1 = request.POST['messageportion1']
        photo1 = request.POST['photo1']
        messageportion2 = request.POST['messageportion2']
        photo2 = request.POST['photo2']
        messageportion3 = request.POST['messageportion3']
        signature = request.POST['signature']
        logo = request.POST['logo']
        message = ""
        my_html_message = "<br />"
        if len(messageportion1)>0:
            my_html_message += messageportion1+"<br /><br />"
        if len(photo1)>0:
            my_html_message += photo1+"<br /><br />"
        if len(messageportion2)>0:
            my_html_message += messageportion2+"<br /><br />"
        if len(photo2)>0:
            my_html_message += photo2+"<br /><br />"
        if len(messageportion3)>0:
            my_html_message += messageportion3+"<br /><br />"
        if len(signature)>0:
            my_html_message += signature+"<br /><br />"
        if len(logo)>0:
            my_html_message += logo+"<br /><br />"
        send_mail(subject, message, sender, recipients, html_message = my_html_message)
        return HttpResponse("Your email has been sent successfully to the members of Ivy Oasis NYC")
    else:
        return HttpResponse("Your email has NOT been sent successfully to the members of Ivy Oasis NYC")



class ArchivedEventsView(ListView):
    model = EventsSection
    template_name = 'ivyoasisnyc/eventarchives.html'
    context_object_name = 'eventarchives_list'


class ArchivedEventsViewByCategory(ListView):
    model = EventsSection
    template_name = 'ivyoasisnyc/eventarchivesbycategory.html'
    context_object_name = 'eventarchivesbycategory_list'


class MediaCoverageView(ListView):
    model = MediaCoverage
    template_name = 'ivyoasisnyc/mediacoverage.html'
    context_object_name = 'mediacoverage_list'

class EmailBlastView(ListView):
    model = MemberInfo
    template_name = 'ivyoasisnyc/emailblast.html'
    context_object_name = 'emailblast_list'

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(EmailBlastView, self).dispatch(*args, **kwargs)
