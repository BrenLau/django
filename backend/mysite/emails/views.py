from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from .models import Email
from rest_framework import viewsets
from rest_framework.decorators import action
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail


from .serializers import EmailSerializer


class EmailView(viewsets.ModelViewSet):
    serializer_class = EmailSerializer
    queryset = Email.objects.all()

    def create(self, request):
        print(request.data)
        email = Email(email=request.data['email'])
        email.save()
        return HttpResponse(email)


def index(request):
    print('hello')
    return HttpResponse("Hello, world. You're at the emails index.")


@csrf_exempt
def email(request, email_id):
    current = Email.objects.get(pk=email_id)
    if (current.new):
        print('is new')
    current.new = False
    current.save()
    print(current.email, current.new)

    response = "You are looking at email %s."
    return HttpResponse(response % email_id)
