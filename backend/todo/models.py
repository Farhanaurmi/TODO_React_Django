from django.db import models
from django.contrib.auth.models import User


class TodoClass(models.Model):
    title = models.CharField(max_length=100)
    memo = models.TextField(blank=True)
    createtime = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class PackageClass(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.title

class SubscriptionClass(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    package = models.OneToOneField(PackageClass, on_delete=models.SET_NULL, null=True)
