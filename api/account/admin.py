from django.contrib import admin
from .models import User, FollowRequest

# Register your models here.
admin.site.register(User)
admin.site.register(FollowRequest)