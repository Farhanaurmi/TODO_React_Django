from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


urlpatterns = [
    path('token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('', views.home ,name="home"),
]