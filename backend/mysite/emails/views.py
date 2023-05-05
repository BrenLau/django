from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from .models import Email
from rest_framework import viewsets
from rest_framework.decorators import action
from django.views.decorators.csrf import csrf_exempt

from .serializers import EmailSerializer


class EmailView(viewsets.ModelViewSet):
    serializer_class = EmailSerializer
    queryset = Email.objects.all()

    @action(methods=['post'], detail=True)
    def sendEmail(self, request, pk=None):
        print('hello')
        return HttpResponse('Hey man')


def index(request):
    print('hello')
    return HttpResponse("Hello, world. You're at the emails index.")


@csrf_exempt
def email(request, email_id):
    print(Email.objects.get(pk=email_id).email)
    print('hello')
    print(request)
    response = "You are looking at email %s."
    return HttpResponse(response % email_id)
