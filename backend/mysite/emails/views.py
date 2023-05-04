from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from .models import Email
from rest_framework import viewsets

from .serializers import EmailSerializer


class EmailView(viewsets.ModelViewSet):
    serializer_class = EmailSerializer
    queryset = Email.objects.all()


def index(request):
    return HttpResponse("Hello, world. You're at the emails index.")


def email(request, email_id):
    response = "You are looking at email %s."
    return HttpResponse(response % email_id)
