from django.urls import path, include
from . views import *

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('customer', customer, basename='customer')

urlpatterns = [
    #Function Based Views.............................................................
    # path('customer/', customer, name = 'customer'),
    # path('customer/<int:pk>/', get_customer, name = 'customer'),

    #Class Based Views................................................................
    # path('customer/', customer.as_view(), name = 'customer'),
    # path('get_customer/<int:pk>/', get_customer.as_view(), name = 'customer'),

    # Mixins..........................................................................
    # path('customer/', customer.as_view(), name = 'employee'),
    # path('get_customer/<int:pk>/', get_customer.as_view(), name = 'employee'),

    # Generics.........................................................................
    # path('customer/', customer.as_view(), name = 'customer'),
    # path('get_customer/<int:pk>/', get_customer.as_view(), name = 'customer'),

    # Viewsets -> part 1.....................................................................
    path('', include(router.urls)),   #can handkle all 5 methods
]