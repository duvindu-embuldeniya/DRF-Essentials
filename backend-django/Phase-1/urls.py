from django.urls import path
from . views import *

urlpatterns = [
    #Function Based Views.................................................................
    # path('customer/', customer, name = 'customer'),
    # path('customer/<int:pk>/', get_customer, name = 'customer'),

    #Class Based Views.................................................................
    path('customer/', customer.as_view(), name = 'customer'),
    path('get_customer/<int:pk>/', get_customer.as_view(), name = 'customer'),

]