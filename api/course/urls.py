from django.urls import path, include
from . import api

urlpatterns = [
    path('upload/cover/', api.upload_course_cover, name='upload_file'),
    path('getimage/', api.get_image_url, name='get_image'),
]
