from django.urls import path, include
from . import api

urlpatterns = [
    path('uploadtst/', api.upload_file, name='upload_file'),
    path('getimage/', api.get_image_url, name='get_image')
]
