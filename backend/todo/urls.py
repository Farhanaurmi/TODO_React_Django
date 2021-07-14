from django.urls import path
from . import views



urlpatterns = [
    path('user/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/register', views.registerUser ,name="user-register"),
    path('user/update', views.updateUserProfile, name="user-profile-update"),
    path('user/profile', views.getUserProfile, name='user'),

    path('package', views.getPackage),
    path('package/create', views.createPackage, name="package-create"),
    path('package/<str:pk>', views.getPackagebyId, name="package"),
    path('package/update/<str:pk>', views.updatePackage, name="update-package"),
    path('package/delete/<str:pk>', views.deletePackage, name="delete-package"),

    path('subscription', views.getSubscription),
    path('subscribe/create', views.createSubscribe, name="subscribe-create"),

    path('todo', views.getTodo),
    path('todo/create', views.createTodo, name="todo-create"),
    path('todo/delete/<str:pk>', views.deleteTodo, name="delete-todo"),

]