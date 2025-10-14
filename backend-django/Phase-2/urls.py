from django.urls import path
from . views import *


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('blog/', blog, name = 'blog'),
    path('get_blog/<int:pk>/', get_blog, name = 'get_blog'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]