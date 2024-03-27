from django.urls import path, include
from .views import TestApiView

urlpatterns = [
    path('test/', TestApiView.as_view(), name='test-api'),
]
