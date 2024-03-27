from django.shortcuts import render
from .serializers import TestApiSerializer
from rest_framework import generics
from .models import TestApi

# Create your views here.
class TestApiView(generics.ListAPIView):
    queryset = TestApi.objects.all()
    serializer_class = TestApiSerializer
