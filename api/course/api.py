from django.core.files.storage import default_storage
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
import os
from google.cloud import storage
from google.oauth2 import service_account
from datetime import timezone, datetime
from .models import Course
from .forms import CourseForm
from google.cloud import storage


@api_view(["POST",])
def upload_course_cover(request):

    print('user', request.user)
    print('request data image:', request.data['image'], 'type:', type(request.data['image']))
    form = CourseForm(request.POST, request.FILES)
    message = 'success'

    print('form is valid:', form.is_valid())
    if form.is_valid():
        # Upload image to Google Cloud Storage
        image = form.cleaned_data['image']
        print(image.name)
        client = storage.Client()
        bucket = client.bucket('wisgallery_content')
        blob = bucket.blob(image.name)
        blob.upload_from_string(image.read(), content_type=image.content_type)

        # Save course data
        course = form.save(commit=False)
        course.image_blob_name = blob.name
        course.owner = request.user
        course.save()
    else:
        message = form.errors.as_json()
    
    print(message)

    return Response({'status': message})


@api_view(["POST",])
def upload_lesson(request):
    # Authenticate to Google Cloud Storage
    storage_client = storage.Client()

    # Get the bucket where you want to upload the file
    bucket = storage_client.bucket('wisgallery_content')
    print(bucket)

    # Get the directory of the current Python file
    current_directory = os.path.dirname(os.path.abspath(__file__))
    # Construct the full path to the file
    file_path = os.path.join(current_directory, 'pyhack')

    # Upload the file to the bucket
    blob = bucket.blob('png/pyhack.png')

    print(file_path)
    blob.upload_from_filename(file_path)

    return Response({"message": "file uploaded"})


@api_view(["GET"])
def get_image_url(request, blob_name):
    bucket_name = 'wisgallery_content'
    ## blob_name = 'pyhack.png'

    credentials_path = '/home/jota/Documentos/Projects/WisGall/api/credentials.json'
    credentials = service_account.Credentials.from_service_account_file(credentials_path)

    # Authenticate to Google Cloud Storage
    storage_client = storage.Client(credentials=credentials)
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)



    token_lifetime = int(datetime.now().timestamp()) + 3600
    signed_url = blob.generate_signed_url(expiration=token_lifetime)
    
    return Response({'signed_url': signed_url})
