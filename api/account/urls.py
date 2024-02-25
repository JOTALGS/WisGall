from django.urls import path
from . import api
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path("register/", api.user_register_view, name="register"),
    path("logout_user/", api.logout_user, name="logout_user"),
    path("me/", api.me, name="me"),
]