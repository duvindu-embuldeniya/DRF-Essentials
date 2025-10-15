from django.urls import path
from . views import *

urlpatterns = [
    path('register/', RegisterView.as_view(), name = 'register'),
    path('protected-view/', ProtectedView.as_view(), name='protected-view')
]