from django.forms import ModelForm
from django import forms
from .models import Course

class CourseForm(ModelForm):
    image = forms.ImageField()

    class Meta:
        model = Course
        fields = ('title', 'description', 'price', 'image',)