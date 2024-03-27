from django.db import models
from django.contrib.auth.models import User

class YouTubeVideo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_url = models.URLField(max_length=200)
    timestamps = models.TextField()  # Store timestamps as a JSON string
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.video_url}"
    
class TestApi(models.Model):
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.title