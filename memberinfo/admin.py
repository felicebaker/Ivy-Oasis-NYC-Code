from django.contrib import admin
from memberinfo.models import MemberInfo

class MemberInfoAdmin(admin.ModelAdmin):
    list_display = ('member_first_name','member_last_name')

admin.site.register(MemberInfo, MemberInfoAdmin)
