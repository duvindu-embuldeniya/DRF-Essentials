from django.urls import path
from . views import *

urlpatterns = [
    path('customer/', customer, name = 'customer'),
]