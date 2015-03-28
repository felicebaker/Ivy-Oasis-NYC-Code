from django.db import models
from memberinfo.models import MemberInfo
from django.forms import ModelForm

# Create the form class.
class MemberInfoForm(ModelForm):
    class Meta:
        model = MemberInfo
        fields = ['member_first_name', 'member_last_name', 'member_email_address', 'member_school_1', 'member_school_2', 'member_school_3', 'member_school_4']


form = MemberInfoForm()

# Creating a form to change an existing article.
# member_info = MemberInfo.objects.get(pk=1)
# form = MemberInfoForm(instance=member_info)