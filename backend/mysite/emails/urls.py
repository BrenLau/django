from django.urls import path, include

from . import views

from rest_framework import routers
from emails import views

router = routers.DefaultRouter()
router.register(r'emails', views.EmailView, 'emails')
# router.register(r'emails/<int:email_id>', views.EmailView, 'emails')


urlpatterns = [
    path("", views.index, name="index"),
    path('api/', include(router.urls)),
]
