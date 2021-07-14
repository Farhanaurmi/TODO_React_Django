from django.urls import path
from . import views



urlpatterns = [
    path('user/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/register', views.registerUser ,name="user-register"),
    path('user/update', views.updateUserProfile, name="user-profile-update"),
    path('user/profile', views.getUserProfile, name='user'),

    path('package', views.getPackage),
    path('package/create', views.createPackage, name="package-create"),
    path('package/update/<str:pk>', views.updatePackage, name="update-package"),
    path('package/delete/<str:pk>', views.deletePackage, name="delete-package"),
]