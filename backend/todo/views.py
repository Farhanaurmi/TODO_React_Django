from django.core.checks import messages
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .serializers import *
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from datetime import datetime

from .models import *



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v


        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



@api_view(['POST'])
def registerUser(request):
    data=request.data
    try:
        user=User.objects.create( 
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer=UserSerializerWithToken(user,many=False)
        return Response(serializer.data)
    except:
        message={'details':'User with this email already exist'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data
    user.username = data['email']
    user.email = data['email']
    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()

    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createPackage(request):
    package=PackageClass.objects.create(
        title = 'Sample Title',
        price = 0,
        description = 'Sample Description'
    )
    serializer=PackageSerializer(package, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getPackage(request):
    package=PackageClass.objects.all()
    serializer=PackageSerializer(package, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deletePackage(request, pk):
    package=PackageClass.objects.get(id=pk)
    package.delete()
    return Response('Package deleted')

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updatePackage(request, pk):
    data = request.data
    package=PackageClass.objects.get(id=pk)
    package.title = data['title']
    package.price = data['price']
    package.description = data['description']
    package.save()
    serializer = PackageSerializer(package, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getPackagebyId(request, pk):
    package=PackageClass.objects.get(id=pk)
    serializer=PackageSerializer(package, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createSubscribe(request):
    user = request.user
    data = request.data
    _id = data['id']
    packages = PackageClass.objects.get(id=_id)
        
    try:
        subscription = SubscriptionClass.objects.create(
            user=user,
            package=packages,
            isPaid=True,
            paidAt=datetime.now()

        )


        subscription.save()

        return Response('successfully created')

    except:
        return Response({'detail':'No package'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSubscription(request):
    user = request.user
    subscription = user.subscriptionclass_set.all()
    serializer = SubscriptionSerializer(subscription, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createTodo(request):
    user= request.user
    data= request.data
    todo=TodoClass.objects.create(
        user=user,
        title = data['title'],
        memo = data['memo']
    )

    return Response('create successfully')


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTodo(request):
    todo=TodoClass.objects.all()
    serializer=TodoSerializer(todo, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteTodo(request, pk):
    todo=TodoClass.objects.get(id=pk)
    todo.delete()
    return Response('todo deleted')