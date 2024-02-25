from django.db import models
import uuid
from account.models import User

# Create your models here.

class Course(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)


class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=100)
    content = models.TextField()
    video = models.FileField(upload_to='videos/', blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    order = models.PositiveIntegerField()

    class Meta:
        ordering = ['order']