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

    # @action(methods=['post'], detail=True)
    def create(self, request, pk=None):
        print('hello, create works here')
        return HttpResponse('Hey man')


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
