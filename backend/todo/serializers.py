from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):
    isAdmin=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields= ['id','username','email','isAdmin']

    def get_isAdmin(self,obj):
        return obj.is_staff

    

class UserSerializerWithToken(UserSerializer):
    token=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields= ['id','username','email','isAdmin','token']

    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)


class PackageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = PackageClass
        fields= '__all__'